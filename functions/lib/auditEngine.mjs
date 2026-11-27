// Shared SEO & Performance Audit Engine (Cloudflare Pages + Node.js Dev)
// Provides deep surface diagnostics while gating pro-level remediation & asset lists
// so the free tool serves as a genuine high-value glimpse of Sociodigit's full agency audit.

const STOPWORDS = new Set([
  "the", "and", "for", "that", "this", "with", "you", "your", "are", "from",
  "have", "has", "was", "were", "will", "can", "all", "not", "but", "what",
  "when", "where", "who", "how", "why", "which", "our", "out", "into", "more",
  "about", "than", "then", "them", "they", "their", "there", "these", "those",
  "been", "being", "also", "just", "only", "over", "such", "some", "very",
  "make", "like", "time", "most", "get", "use", "using", "used", "work", "best",
  "new", "one", "two", "home", "page", "site", "website", "click", "here",
  "read", "learn", "more", "view", "contact", "privacy", "policy", "terms",
  "copyright", "rights", "reserved", "menu", "skip", "content", "main"
]);

export function isBlockedHost(hostname) {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host.endsWith(".local") ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.startsWith("10.") ||
    host.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host.startsWith("169.254.")
  );
}

function getAttr(tag, attr) {
  const re = new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i");
  const m = tag.match(re);
  return m ? m[1].trim() : "";
}

function extractMeta(html, nameOrProp, attrType = "name") {
  const re1 = new RegExp(
    `<meta\\s+[^>]*${attrType}=["']${nameOrProp}["'][^>]*content=["']([\\s\\S]*?)["'][^>]*>`,
    "i"
  );
  const re2 = new RegExp(
    `<meta\\s+[^>]*content=["']([\\s\\S]*?)["'][^>]*${attrType}=["']${nameOrProp}["'][^>]*>`,
    "i"
  );
  const match = html.match(re1) || html.match(re2);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function detectTechStack(html, headers) {
  const stack = new Set();
  const server = (headers.get("server") || "").toLowerCase();
  const poweredBy = (headers.get("x-powered-by") || "").toLowerCase();

  if (headers.has("cf-ray") || server.includes("cloudflare")) stack.add("Cloudflare Edge");
  if (server.includes("nginx")) stack.add("Nginx");
  if (server.includes("apache")) stack.add("Apache");
  if (server.includes("vercel") || headers.has("x-vercel-id")) stack.add("Vercel");
  if (html.includes("/_next/static") || html.includes("__NEXT_DATA__") || poweredBy.includes("next.js")) {
    stack.add("Next.js");
  }
  if (html.includes("wp-content/") || html.includes("wp-includes/")) stack.add("WordPress");
  if (html.includes("cdn.shopify.com") || html.includes("Shopify.theme")) stack.add("Shopify");
  if (html.includes("webflow.com") || html.includes("data-wf-site")) stack.add("Webflow");
  if (html.includes("static.wixstatic.com")) stack.add("Wix");
  if (html.includes("googletagmanager.com") || html.includes("gtag(")) stack.add("Google Analytics / GTM");
  if (html.includes("connect.facebook.net") || html.includes("fbevents.js")) stack.add("Meta Pixel");

  return Array.from(stack);
}

async function fetchAuxiliaryFiles(origin) {
  const fetchText = async (url) => {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "SociodigitSeoBot/1.0" },
        redirect: "follow",
        signal: AbortSignal.timeout(3500),
      });
      if (!res.ok) return { ok: false, status: res.status, text: "" };
      const text = await res.text();
      return { ok: true, status: res.status, text: text.slice(0, 150000) };
    } catch {
      return { ok: false, status: 0, text: "" };
    }
  };

  const [robotsRes, defaultSitemapRes] = await Promise.all([
    fetchText(`${origin}/robots.txt`),
    fetchText(`${origin}/sitemap.xml`),
  ]);

  const robotsExists = robotsRes.ok && robotsRes.text.length > 0;
  const blocksAllCrawlers =
    robotsExists && /user-agent:\s*\*[\s\S]*?disallow:\s*\/\s*($|\n)/i.test(robotsRes.text);
  const sitemapLineMatch = robotsRes.text.match(/^\s*sitemap:\s*(https?:\/\/\S+)/im);
  const declaredSitemapUrl = sitemapLineMatch ? sitemapLineMatch[1].trim() : "";

  let sitemapExists = defaultSitemapRes.ok && (
    defaultSitemapRes.text.includes("<urlset") || defaultSitemapRes.text.includes("<sitemapindex")
  );
  let sitemapText = defaultSitemapRes.text;

  // If robots.txt points to a custom same-origin sitemap URL and /sitemap.xml wasn't valid, check it
  if (!sitemapExists && declaredSitemapUrl && declaredSitemapUrl.startsWith(origin)) {
    const customRes = await fetchText(declaredSitemapUrl);
    if (
      customRes.ok &&
      (customRes.text.includes("<urlset") || customRes.text.includes("<sitemapindex"))
    ) {
      sitemapExists = true;
      sitemapText = customRes.text;
    }
  }

  const sitemapUrlCount = sitemapExists
    ? (sitemapText.match(/<loc>/gi) || []).length
    : 0;

  return {
    robotsExists,
    blocksAllCrawlers,
    declaredSitemapUrl,
    sitemapExists,
    sitemapUrlCount,
  };
}

export async function executeAudit(rawUrl, options = { allowLocal: false, timeoutMs: 10000 }) {
  let targetUrl = (rawUrl || "").trim();
  if (!targetUrl) {
    return { status: 400, body: { error: "Missing required parameter 'url'." } };
  }

  if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
    if (targetUrl.startsWith("localhost") || targetUrl.startsWith("127.0.0.1")) {
      targetUrl = "http://" + targetUrl;
    } else {
      targetUrl = "https://" + targetUrl;
    }
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(targetUrl);
  } catch {
    return { status: 400, body: { error: "Invalid URL provided." } };
  }

  if (!options.allowLocal && isBlockedHost(parsedUrl.hostname)) {
    return {
      status: 403,
      body: { error: "Auditing local or private networks is not allowed." },
    };
  }

  const startTime = Date.now();
  let response;
  try {
    response = await fetch(parsedUrl.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 (SociodigitSeoBot/1.0)",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(options.timeoutMs || 10000),
    });
  } catch (fetchErr) {
    return {
      status: 502,
      body: {
        error: `Failed to connect to ${parsedUrl.hostname}. Please verify the domain is online and accessible. (${fetchErr?.message || "Network Error"})`,
      },
    };
  }

  const ttfb = Date.now() - startTime;
  const finalUrl = response.url || targetUrl;
  const finalParsed = new URL(finalUrl);
  const isHttps = finalUrl.startsWith("https://");
  const status = response.status;
  const headers = response.headers;

  const contentType = headers.get("content-type") || "";
  if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
    return {
      status: 400,
      body: {
        error: `Target URL returned non-HTML content (${contentType || "unknown"}). Only web pages can be audited.`,
      },
    };
  }

  const [html, aux] = await Promise.all([
    response.text(),
    fetchAuxiliaryFiles(finalParsed.origin),
  ]);

  const downloadTime = Date.now() - startTime;
  const htmlSizeKb = +(html.length / 1024).toFixed(1);

  const auditData = analyzeHtml(html, finalParsed, {
    ttfb,
    downloadTime,
    htmlSizeKb,
    status,
    isHttps,
    finalUrl,
    wasRedirected: finalUrl.replace(/\/$/, "") !== parsedUrl.toString().replace(/\/$/, ""),
    hsts: headers.has("strict-transport-security"),
    xContentTypeOptions: (headers.get("x-content-type-options") || "").toLowerCase() === "nosniff",
    xFrameOptions: headers.has("x-frame-options") || (headers.get("content-security-policy") || "").includes("frame-ancestors"),
    csp: headers.has("content-security-policy"),
    referrerPolicy: headers.has("referrer-policy"),
    server: headers.get("server") || "hidden",
    hasCompression: !!(headers.get("content-encoding") || headers.get("cf-cache-status")),
    detectedStack: detectTechStack(html, headers),
    aux,
  });

  return { status: 200, body: auditData };
}

function analyzeHtml(html, urlObj, techMeta) {
  // 1. Core Meta
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
  const titleLength = title.length;

  const description = extractMeta(html, "description", "name");
  const descLength = description.length;

  const hasViewport = /<meta\s+[^>]*name=["']viewport["'][^>]*>/i.test(html);
  const robotsContent = (extractMeta(html, "robots", "name") || "index, follow").toLowerCase();
  const isNoIndex = robotsContent.includes("noindex");

  const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i);
  const canonicalUrl = canonicalMatch ? getAttr(canonicalMatch[0], "href") : "";

  const htmlLangMatch = html.match(/<html[^>]*\blang=["']([^"']+)["'][^>]*>/i);
  const htmlLang = htmlLangMatch ? htmlLangMatch[1].trim() : "";
  const hasCharset = /<meta[^>]*charset=/i.test(html);
  const hasFavicon = /<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/i.test(html);

  // 2. Headings
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Texts = h1Matches.map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()).filter(Boolean);
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  const h2Count = h2Matches.length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;

  // 3. Images
  const imgTags = [...html.matchAll(/<img\s+[^>]*>/gi)];
  const totalImages = imgTags.length;
  const imagesWithoutAlt = [];
  let modernImagesCount = 0;
  let lazyLoadedCount = 0;

  for (const match of imgTags) {
    const tag = match[0];
    const src = getAttr(tag, "src") || getAttr(tag, "data-src") || "unknown image";
    const alt = getAttr(tag, "alt");
    const hasAltAttr = /\balt\s*=/i.test(tag);
    if (!hasAltAttr || !alt) {
      imagesWithoutAlt.push(src);
    }
    if (/\.(webp|avif)(\?|$)/i.test(src) || src.includes("/_next/image") || src.includes("format=webp")) {
      modernImagesCount++;
    }
    if (/loading\s*=\s*["']lazy["']/i.test(tag)) {
      lazyLoadedCount++;
    }
  }

  // 4. Head Render-Blocking Scripts & Stylesheets
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const headHtml = headMatch ? headMatch[1] : "";
  const headScripts = [...headHtml.matchAll(/<script\s+[^>]*src=["']([^"']+)["'][^>]*>/gi)];
  const renderBlockingScripts = headScripts.filter((m) => {
    const tag = m[0];
    return !/\b(async|defer)\b/i.test(tag) && !/type\s*=\s*["']module["']/i.test(tag);
  });
  const stylesheetCount = (headHtml.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;

  // 5. Open Graph & Twitter Cards
  const ogTitle = extractMeta(html, "og:title", "property");
  const ogDescription = extractMeta(html, "og:description", "property");
  const ogImage = extractMeta(html, "og:image", "property");
  const ogType = extractMeta(html, "og:type", "property");
  const twitterCard = extractMeta(html, "twitter:card", "name") || extractMeta(html, "twitter:card", "property");

  // 6. JSON-LD Schema
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const detectedSchemas = [];
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1].trim());
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (item?.["@type"]) detectedSchemas.push(String(item["@type"]));
        });
      } else if (parsed?.["@graph"] && Array.isArray(parsed["@graph"])) {
        parsed["@graph"].forEach((item) => {
          if (item?.["@type"]) detectedSchemas.push(String(item["@type"]));
        });
      } else if (parsed?.["@type"]) {
        detectedSchemas.push(String(parsed["@type"]));
      }
    } catch {
      // Ignore malformed JSON-LD
    }
  }

  // 7. Links
  const linkMatches = [...html.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>/gi)];
  let internalLinksCount = 0;
  let externalLinksCount = 0;
  let emptyOrHashLinksCount = 0;
  for (const l of linkMatches) {
    const href = l[1].trim();
    if (!href || href === "#") {
      emptyOrHashLinksCount++;
      continue;
    }
    if (href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      continue;
    }
    if (href.startsWith("/") || href.includes(urlObj.hostname)) {
      internalLinksCount++;
    } else if (href.startsWith("http://") || href.startsWith("https://")) {
      externalLinksCount++;
    }
  }

  // 8. Word Count & Top Keywords
  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = textContent ? textContent.split(" ").filter(Boolean) : [];
  const wordCount = words.length;
  const readingTimeMin = Math.max(1, Math.ceil(wordCount / 200));

  const freq = new Map();
  for (const rawWord of words) {
    const w = rawWord.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (w.length >= 4 && !STOPWORDS.has(w) && !/^\d+$/.test(w)) {
      freq.set(w, (freq.get(w) || 0) + 1);
    }
  }
  const topKeywords = Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([keyword, count]) => ({
      keyword,
      count,
      inTitle: title.toLowerCase().includes(keyword),
      inH1: h1Texts.some((h) => h.toLowerCase().includes(keyword)),
    }));

  // ── BUILD 20 CHECKS (10 FREE SURFACE + 10 PRO LOCKED) ──
  const checks = [];

  // [FREE 1] Page Title
  if (!title) {
    checks.push({
      id: "title",
      category: "seo",
      tier: "free",
      title: "Page Title Tag",
      description: "No <title> tag was found on the page.",
      status: "fail",
      score: 0,
      recommendation: "Add a descriptive <title> tag between 40 and 60 characters with your primary target keyword.",
    });
  } else if (titleLength < 30 || titleLength > 70) {
    checks.push({
      id: "title",
      category: "seo",
      tier: "free",
      title: "Page Title Tag Length",
      description: `Title is ${titleLength < 30 ? "too short" : "too long"} (${titleLength} chars): "${title}"`,
      status: "warning",
      score: titleLength < 30 ? 60 : 70,
      recommendation: "Keep your title between 40–60 characters so it displays cleanly without truncation in Google SERPs.",
    });
  } else {
    checks.push({
      id: "title",
      category: "seo",
      tier: "free",
      title: "Page Title Tag",
      description: `Optimal title length (${titleLength} chars): "${title}"`,
      status: "pass",
      score: 100,
    });
  }

  // [FREE 2] Meta Description
  if (!description) {
    checks.push({
      id: "description",
      category: "seo",
      tier: "free",
      title: "Meta Description",
      description: "No meta description tag found.",
      status: "fail",
      score: 0,
      recommendation: "Add an engaging meta description between 120 and 160 characters with a clear call-to-action.",
    });
  } else if (descLength < 80 || descLength > 170) {
    checks.push({
      id: "description",
      category: "seo",
      tier: "free",
      title: "Meta Description Length",
      description: `Meta description is ${descLength < 80 ? "too short" : "too long"} (${descLength} chars).`,
      status: "warning",
      score: 70,
      recommendation: "Aim for 120–160 characters to maximize click-through rate in search results.",
    });
  } else {
    checks.push({
      id: "description",
      category: "seo",
      tier: "free",
      title: "Meta Description",
      description: `Optimal description length (${descLength} chars).`,
      status: "pass",
      score: 100,
    });
  }

  // [FREE 3] H1 Heading
  if (h1Texts.length === 0) {
    checks.push({
      id: "h1",
      category: "seo",
      tier: "free",
      title: "H1 Heading Tag",
      description: "No <h1> heading tag was detected on the page.",
      status: "fail",
      score: 0,
      recommendation: "Add exactly one descriptive <h1> tag containing your page's primary search topic.",
    });
  } else if (h1Texts.length > 1) {
    checks.push({
      id: "h1",
      category: "seo",
      tier: "free",
      title: "Multiple H1 Headings",
      description: `Found ${h1Texts.length} <h1> tags. Best practice is a single primary H1 per page.`,
      status: "warning",
      score: 70,
      recommendation: "Keep one <h1> for the main headline and use <h2>/<h3> for subsections.",
    });
  } else {
    checks.push({
      id: "h1",
      category: "seo",
      tier: "free",
      title: "H1 Heading Tag",
      description: `Single H1 found: "${h1Texts[0].substring(0, 70)}${h1Texts[0].length > 70 ? "..." : ""}"`,
      status: "pass",
      score: 100,
    });
  }

  // [FREE 4] Canonical Tag
  checks.push(
    !canonicalUrl
      ? {
          id: "canonical",
          category: "seo",
          tier: "free",
          title: "Canonical URL Tag",
          description: "No <link rel='canonical'> tag specified.",
          status: "warning",
          score: 50,
          recommendation: "Declare a self-referencing canonical URL to prevent duplicate content issues.",
        }
      : {
          id: "canonical",
          category: "seo",
          tier: "free",
          title: "Canonical URL Tag",
          description: `Canonical tag properly declared: ${canonicalUrl.substring(0, 60)}`,
          status: "pass",
          score: 100,
        }
  );

  // [FREE 5] Indexability (noindex & robots.txt block)
  if (isNoIndex || techMeta.aux.blocksAllCrawlers) {
    checks.push({
      id: "robots",
      category: "seo",
      tier: "free",
      title: "Search Engine Indexability",
      description: isNoIndex
        ? "Page has 'noindex' directive set in meta robots, blocking Google!"
        : "robots.txt contains 'Disallow: /' blocking all search crawlers!",
      status: "fail",
      score: 0,
      recommendation: "Remove crawl/index blocks immediately if you want this page to rank on Google.",
    });
  } else {
    checks.push({
      id: "robots",
      category: "seo",
      tier: "free",
      title: "Search Engine Indexability",
      description: `Page allows indexing (${techMeta.aux.robotsExists ? "robots.txt active" : "no blocking rules"}).`,
      status: "pass",
      score: 100,
    });
  }

  // [FREE 6] TTFB Speed
  if (techMeta.ttfb > 1200) {
    checks.push({
      id: "ttfb",
      category: "speed",
      tier: "free",
      title: "Server Response Time (TTFB)",
      description: `High Time To First Byte: ${techMeta.ttfb}ms (Google recommends < 600ms).`,
      status: "fail",
      score: 40,
      recommendation: "Implement edge caching or a CDN like Cloudflare to reduce server delay.",
    });
  } else if (techMeta.ttfb > 600) {
    checks.push({
      id: "ttfb",
      category: "speed",
      tier: "free",
      title: "Server Response Time (TTFB)",
      description: `Moderate server latency: ${techMeta.ttfb}ms.`,
      status: "warning",
      score: 75,
      recommendation: "Enable edge caching and optimize backend queries to bring TTFB under 500ms.",
    });
  } else {
    checks.push({
      id: "ttfb",
      category: "speed",
      tier: "free",
      title: "Server Response Time (TTFB)",
      description: `Fast server response: ${techMeta.ttfb}ms.`,
      status: "pass",
      score: 100,
    });
  }

  // [FREE 7] Mobile Viewport
  checks.push(
    !hasViewport
      ? {
          id: "viewport",
          category: "speed",
          tier: "free",
          title: "Mobile Responsiveness Viewport",
          description: "Missing <meta name='viewport'> tag.",
          status: "fail",
          score: 0,
          recommendation: "Add <meta name='viewport' content='width=device-width, initial-scale=1'> to your <head>.",
        }
      : {
          id: "viewport",
          category: "speed",
          tier: "free",
          title: "Mobile Viewport",
          description: "Mobile viewport meta tag is properly configured.",
          status: "pass",
          score: 100,
        }
  );

  // [FREE 8] HTML Payload Size
  checks.push(
    techMeta.htmlSizeKb > 250
      ? {
          id: "page-weight",
          category: "speed",
          tier: "free",
          title: "HTML Document Size",
          description: `Heavy initial HTML payload (${techMeta.htmlSizeKb} KB).`,
          status: "warning",
          score: 60,
          recommendation: "Minify HTML and defer large inline CSS/JS payloads.",
        }
      : {
          id: "page-weight",
          category: "speed",
          tier: "free",
          title: "HTML Document Size",
          description: `Lightweight HTML document size: ${techMeta.htmlSizeKb} KB.`,
          status: "pass",
          score: 100,
        }
  );

  // [FREE 9] Image Alt Attributes
  if (totalImages > 0 && imagesWithoutAlt.length > 0) {
    const missingPct = Math.round((imagesWithoutAlt.length / totalImages) * 100);
    checks.push({
      id: "images-alt",
      category: "content",
      tier: "free",
      title: "Image Alt Attributes",
      description: `${imagesWithoutAlt.length} of ${totalImages} images (${missingPct}%) are missing alt text.`,
      status: missingPct > 50 ? "fail" : "warning",
      score: Math.max(20, 100 - missingPct),
      recommendation: "Add descriptive alt attributes to images for Google Images visibility and accessibility.",
    });
  } else {
    checks.push({
      id: "images-alt",
      category: "content",
      tier: "free",
      title: "Image Alt Attributes",
      description: totalImages > 0 ? `All ${totalImages} detected images have alt attributes.` : "No images detected in raw HTML.",
      status: "pass",
      score: totalImages > 0 ? 100 : 95,
    });
  }

  // [FREE 10] SSL / HTTPS
  checks.push(
    !techMeta.isHttps
      ? {
          id: "https",
          category: "tech",
          tier: "free",
          title: "SSL / HTTPS Security",
          description: "Website is not running on secure HTTPS.",
          status: "fail",
          score: 0,
          recommendation: "Install an SSL certificate and force 301 redirection from HTTP to HTTPS.",
        }
      : {
          id: "https",
          category: "tech",
          tier: "free",
          title: "SSL / HTTPS Security",
          description: "Website connects over an encrypted HTTPS connection.",
          status: "pass",
          score: 100,
        }
  );

  // ── [PRO / GATED CHECKS] ──
  // Returned with real status, score & surface teaser count, while withholding exact asset lists & deep fix playbooks

  // [PRO 11] XML Sitemap & Crawl Discovery
  checks.push({
    id: "sitemap",
    category: "seo",
    tier: "pro",
    isLocked: true,
    title: "XML Sitemap & Crawl Budget Discovery",
    teaserSummary: techMeta.aux.sitemapExists
      ? `Sitemap detected (${techMeta.aux.sitemapUrlCount || "index"} entries) — crawl depth & orphan page audit locked.`
      : "No valid /sitemap.xml detected — indexation coverage & crawl budget diagnostic locked.",
    status: techMeta.aux.sitemapExists ? "pass" : "warning",
    score: techMeta.aux.sitemapExists ? 100 : 50,
  });

  // [PRO 12] Render-Blocking Scripts
  const blockingCount = renderBlockingScripts.length;
  checks.push({
    id: "render-blocking",
    category: "speed",
    tier: "pro",
    isLocked: true,
    title: "Render-Blocking Scripts & CSS Waterfall",
    teaserSummary:
      blockingCount > 0
        ? `${blockingCount} render-blocking script(s) & ${stylesheetCount} stylesheet(s) detected in <head>. Offending asset list locked.`
        : `0 render-blocking <head> scripts detected (${stylesheetCount} stylesheets). Full bundle waterfall locked.`,
    status: blockingCount > 2 ? "fail" : blockingCount > 0 ? "warning" : "pass",
    score: blockingCount > 2 ? 40 : blockingCount > 0 ? 75 : 100,
  });

  // [PRO 13] Modern Image Formats & Lazy Loading
  const legacyImagesCount = Math.max(0, totalImages - modernImagesCount);
  checks.push({
    id: "modern-images",
    category: "speed",
    tier: "pro",
    isLocked: true,
    title: "Next-Gen Image Compression (WebP/AVIF) & Lazy Loading",
    teaserSummary:
      totalImages > 0
        ? `${legacyImagesCount}/${totalImages} image(s) not using WebP/AVIF; ${lazyLoadedCount}/${totalImages} lazy-loaded. Asset compression savings locked.`
        : "No raw <img> elements found. Background/CSS media audit available in Agency Audit.",
    status: legacyImagesCount > 3 ? "warning" : "pass",
    score: legacyImagesCount > 3 ? 65 : 100,
  });

  // [PRO 14] Security Headers Deep Audit
  const missingSecHeaders = [
    !techMeta.hsts && "HSTS",
    !techMeta.xContentTypeOptions && "X-Content-Type-Options",
    !techMeta.xFrameOptions && "X-Frame-Options",
    !techMeta.csp && "CSP",
    !techMeta.referrerPolicy && "Referrer-Policy",
  ].filter(Boolean);
  checks.push({
    id: "security-headers",
    category: "tech",
    tier: "pro",
    isLocked: true,
    title: "HTTP Security Headers & Hardening",
    teaserSummary:
      missingSecHeaders.length > 0
        ? `${missingSecHeaders.length} enterprise security header(s) missing. Full header policy & server config locked.`
        : "All 5 core HTTP security headers detected. Full CSP directive audit locked.",
    status: missingSecHeaders.length >= 3 ? "warning" : "pass",
    score: Math.max(40, 100 - missingSecHeaders.length * 15),
  });

  // [PRO 15] JSON-LD Structured Data
  checks.push({
    id: "schema",
    category: "tech",
    tier: "pro",
    isLocked: true,
    title: "Structured Data (JSON-LD) & Rich Snippets",
    teaserSummary:
      detectedSchemas.length > 0
        ? `${detectedSchemas.length} schema block(s) found (${detectedSchemas.slice(0, 2).join(", ")}). Validator & Rich Result gap roadmap locked.`
        : "0 JSON-LD schema blocks detected. Custom schema generator & Rich Snippet plan locked.",
    status: detectedSchemas.length === 0 ? "warning" : "pass",
    score: detectedSchemas.length === 0 ? 50 : 100,
  });

  // [PRO 16] Social Open Graph & Twitter Cards
  const missingSocial = [!ogTitle && "og:title", !ogImage && "og:image", !twitterCard && "twitter:card"].filter(Boolean);
  checks.push({
    id: "opengraph",
    category: "tech",
    tier: "pro",
    isLocked: true,
    title: "Open Graph & Twitter/X Social Meta",
    teaserSummary:
      missingSocial.length > 0
        ? `${missingSocial.length} social sharing tag(s) incomplete. Platform preview optimization locked.`
        : "Core Open Graph & Twitter card metadata configured.",
    status: missingSocial.length > 0 ? "warning" : "pass",
    score: missingSocial.length > 0 ? 60 : 100,
  });

  // [PRO 17] Content Depth & Keyword Alignment
  const alignedCount = topKeywords.filter((k) => k.inTitle || k.inH1).length;
  checks.push({
    id: "content-depth",
    category: "content",
    tier: "pro",
    isLocked: true,
    title: "Content Depth, Readability & Keyword Alignment",
    teaserSummary:
      wordCount < 300
        ? `Thin page content (~${wordCount} words). Competitor word-count benchmark & semantic keyword gaps locked.`
        : `~${wordCount} words (${readingTimeMin} min read); ${alignedCount}/6 top keywords aligned with Title/H1. Full semantic gap report locked.`,
    status: wordCount < 300 ? "warning" : "pass",
    score: wordCount < 300 ? 60 : 100,
  });

  // [PRO 18] Heading Hierarchy
  checks.push({
    id: "heading-hierarchy",
    category: "content",
    tier: "pro",
    isLocked: true,
    title: "Semantic Heading Hierarchy (H1–H3)",
    teaserSummary:
      h2Count === 0 && h3Count === 0
        ? "0 H2/H3 subheadings detected. Semantic outline restructuring plan locked."
        : `Structure detected: ${h1Texts.length} H1, ${h2Count} H2, ${h3Count} H3. Topic-cluster blueprint locked.`,
    status: h2Count === 0 && h3Count === 0 ? "warning" : "pass",
    score: h2Count === 0 && h3Count === 0 ? 60 : 100,
  });

  // [PRO 19] Internal Link & Anchor Hygiene
  checks.push({
    id: "link-hygiene",
    category: "content",
    tier: "pro",
    isLocked: true,
    title: "Internal Link Architecture & Broken Anchor Hygiene",
    teaserSummary: `${internalLinksCount} internal, ${externalLinksCount} external, and ${emptyOrHashLinksCount} empty/placeholder (#) links found. Full site link-equity map locked.`,
    status: emptyOrHashLinksCount > 5 || internalLinksCount < 3 ? "warning" : "pass",
    score: emptyOrHashLinksCount > 5 ? 65 : 100,
  });

  // [PRO 20] Compression, Redirects & Internationalization
  checks.push({
    id: "compression-i18n",
    category: "tech",
    tier: "pro",
    isLocked: true,
    title: "Edge Compression, Redirect Chains & Lang/Charset Signals",
    teaserSummary: `${techMeta.hasCompression ? "Compression active" : "No compression header"} • lang="${htmlLang || "missing"}" • charset=${hasCharset ? "OK" : "missing"} • favicon=${hasFavicon ? "OK" : "missing"}.`,
    status: !techMeta.hasCompression || !htmlLang || !hasFavicon ? "warning" : "pass",
    score: !techMeta.hasCompression || !htmlLang ? 70 : 100,
  });

  // Category scores
  const calcCatScore = (cat) => {
    const list = checks.filter((c) => c.category === cat);
    if (!list.length) return 85;
    const sum = list.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(sum / list.length);
  };

  const performanceScore = calcCatScore("speed");
  const onPageSeoScore = calcCatScore("seo");
  const contentScore = calcCatScore("content");
  const technicalScore = calcCatScore("tech");

  const overallScore = Math.round(
    onPageSeoScore * 0.35 + performanceScore * 0.25 + contentScore * 0.2 + technicalScore * 0.2
  );

  return {
    url: urlObj.toString(),
    finalUrl: techMeta.finalUrl,
    hostname: urlObj.hostname,
    auditedAt: new Date().toISOString(),
    auditMode: "surface_preview",
    overallScore,
    categories: {
      seo: { score: onPageSeoScore, label: "On-Page SEO" },
      speed: { score: performanceScore, label: "Speed & Performance" },
      content: { score: contentScore, label: "Content & Structure" },
      tech: { score: technicalScore, label: "Technical & Security" },
    },
    meta: {
      title,
      titleLength,
      description,
      descLength,
      canonicalUrl,
      robotsContent,
      isNoIndex,
      htmlLang,
      hasFavicon,
      h1Count: h1Texts.length,
      h1Texts: h1Texts.slice(0, 2),
      h2Count,
      h3Count,
      totalImages,
      imagesWithoutAltCount: imagesWithoutAlt.length,
      modernImagesCount,
      lazyLoadedCount,
      internalLinksCount,
      externalLinksCount,
      emptyOrHashLinksCount,
      wordCount,
      readingTimeMin,
      topKeywords: topKeywords.slice(0, 3), // Glimpse: only top 3 keywords unlocked
      totalKeywordsFound: topKeywords.length,
      ogTitle,
      ogDescription,
      ogImage,
      ogType,
      detectedSchemas,
    },
    tech: {
      ttfbMs: techMeta.ttfb,
      downloadTimeMs: techMeta.downloadTime,
      htmlSizeKb: techMeta.htmlSizeKb,
      status: techMeta.status,
      isHttps: techMeta.isHttps,
      wasRedirected: techMeta.wasRedirected,
      hsts: techMeta.hsts,
      hasCompression: techMeta.hasCompression,
      server: techMeta.server,
      detectedStack: techMeta.detectedStack,
      robotsExists: techMeta.aux.robotsExists,
      sitemapExists: techMeta.aux.sitemapExists,
      sitemapUrlCount: techMeta.aux.sitemapUrlCount,
      renderBlockingScriptsCount: renderBlockingScripts.length,
      missingSecurityHeadersCount: missingSecHeaders.length,
    },
    checks,
  };
}
