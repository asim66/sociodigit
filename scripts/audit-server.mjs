import http from "node:http";
import { URL } from "node:url";

const PORT = 3001;

function runHtmlAudit(html, urlObj, techMeta) {
  // Extract Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
  const titleLength = title.length;

  // Extract Meta Description
  const descMatch =
    html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i) ||
    html.match(/<meta\s+[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*>/i);
  const description = descMatch ? descMatch[1].replace(/\s+/g, " ").trim() : "";
  const descLength = description.length;

  // Viewport
  const viewportMatch = html.match(/<meta\s+[^>]*name=["']viewport["'][^>]*>/i);
  const hasViewport = !!viewportMatch;

  // Robots
  const robotsMatch =
    html.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i) ||
    html.match(/<meta\s+[^>]*content=["']([\s\S]*?)["'][^>]*name=["']robots["'][^>]*>/i);
  const robotsContent = robotsMatch ? robotsMatch[1].toLowerCase() : "index, follow";
  const isNoIndex = robotsContent.includes("noindex");

  // Canonical
  const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["'][^>]*>/i);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1].trim() : "";

  // Headings
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Texts = h1Matches.map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()).filter(Boolean);
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;

  // Images and Alt attributes
  const imgTags = [...html.matchAll(/<img\s+[^>]*>/gi)];
  const totalImages = imgTags.length;
  const imagesWithoutAlt = [];

  for (const match of imgTags) {
    const tag = match[0];
    const hasAlt = /alt=["'][^"']*["']/i.test(tag);
    const altEmpty = /alt=["']\s*["']/i.test(tag);
    if (!hasAlt || altEmpty) {
      const srcMatch = tag.match(/src=["']([^"']+)["']/i);
      const src = srcMatch ? srcMatch[1] : "unknown image";
      imagesWithoutAlt.push(src);
    }
  }

  // Open Graph
  const ogTitleMatch = html.match(/<meta\s+[^>]*property=["']og:title["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i);
  const ogDescMatch = html.match(/<meta\s+[^>]*property=["']og:description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i);
  const ogImageMatch = html.match(/<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i);
  const ogTypeMatch = html.match(/<meta\s+[^>]*property=["']og:type["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i);

  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : "";
  const ogDescription = ogDescMatch ? ogDescMatch[1].trim() : "";
  const ogImage = ogImageMatch ? ogImageMatch[1].trim() : "";
  const ogType = ogTypeMatch ? ogTypeMatch[1].trim() : "";

  // Structured Data (JSON-LD)
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const detectedSchemas = [];
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1].trim());
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (item["@type"]) detectedSchemas.push(String(item["@type"]));
        });
      } else if (parsed && parsed["@type"]) {
        detectedSchemas.push(String(parsed["@type"]));
      }
    } catch {
      // Ignored malformed JSON-LD
    }
  }

  // Links
  const linkMatches = [...html.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi)];
  let internalLinksCount = 0;
  let externalLinksCount = 0;
  for (const l of linkMatches) {
    const href = l[1].trim();
    if (href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      continue;
    }
    if (href.startsWith("/") || href.includes(urlObj.hostname)) {
      internalLinksCount++;
    } else if (href.startsWith("http://") || href.startsWith("https://")) {
      externalLinksCount++;
    }
  }

  // Word count estimate
  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textContent ? textContent.split(" ").length : 0;

  // Compute checklist and issue rules
  const checks = [];

  // 1. Title Check
  if (!title) {
    checks.push({
      id: "title",
      category: "seo",
      title: "Page Title Tag",
      description: "No <title> tag was found on the page.",
      status: "fail",
      score: 0,
      recommendation: "Add a descriptive <title> tag between 40 and 60 characters with your primary target keyword.",
    });
  } else if (titleLength < 30) {
    checks.push({
      id: "title",
      category: "seo",
      title: "Page Title Tag Length",
      description: `Title is too short (${titleLength} characters): "${title}"`,
      status: "warning",
      score: 60,
      recommendation: "Expand the title tag to 40–60 characters to maximize click-through rate and relevance in Google SERPs.",
    });
  } else if (titleLength > 70) {
    checks.push({
      id: "title",
      category: "seo",
      title: "Page Title Tag Length",
      description: `Title is too long (${titleLength} characters) and may be truncated on Google: "${title}"`,
      status: "warning",
      score: 70,
      recommendation: "Shorten your title to under 60 characters so it doesn't get cut off in mobile and desktop search results.",
    });
  } else {
    checks.push({
      id: "title",
      category: "seo",
      title: "Page Title Tag",
      description: `Optimal title length (${titleLength} chars): "${title}"`,
      status: "pass",
      score: 100,
    });
  }

  // 2. Meta Description
  if (!description) {
    checks.push({
      id: "description",
      category: "seo",
      title: "Meta Description",
      description: "No meta description tag found.",
      status: "fail",
      score: 0,
      recommendation: "Add an engaging meta description between 120 and 160 characters with clear call-to-action.",
    });
  } else if (descLength < 80) {
    checks.push({
      id: "description",
      category: "seo",
      title: "Meta Description Length",
      description: `Meta description is short (${descLength} characters).`,
      status: "warning",
      score: 65,
      recommendation: "Aim for 120–160 characters to provide sufficient context for users searching on Google.",
    });
  } else if (descLength > 170) {
    checks.push({
      id: "description",
      category: "seo",
      title: "Meta Description Length",
      description: `Meta description is too long (${descLength} characters) and may get cut off with ellipses.`,
      status: "warning",
      score: 75,
      recommendation: "Trim to under 160 characters to ensure your full message displays in search snippets.",
    });
  } else {
    checks.push({
      id: "description",
      category: "seo",
      title: "Meta Description",
      description: `Optimal description length (${descLength} chars).`,
      status: "pass",
      score: 100,
    });
  }

  // 3. H1 Heading
  if (h1Texts.length === 0) {
    checks.push({
      id: "h1",
      category: "seo",
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
      title: "Multiple H1 Headings",
      description: `Found ${h1Texts.length} <h1> tags. Best practice is to have exactly one H1 per page.`,
      status: "warning",
      score: 70,
      recommendation: "Keep a single <h1> for the main topic and use <h2> and <h3> for sub-sections to preserve hierarchy.",
    });
  } else {
    checks.push({
      id: "h1",
      category: "seo",
      title: "H1 Heading Tag",
      description: `Single H1 found: "${h1Texts[0].substring(0, 70)}${h1Texts[0].length > 70 ? "..." : ""}"`,
      status: "pass",
      score: 100,
    });
  }

  // 4. Canonical Tag
  if (!canonicalUrl) {
    checks.push({
      id: "canonical",
      category: "seo",
      title: "Canonical URL Tag",
      description: "No <link rel='canonical'> tag specified.",
      status: "warning",
      score: 50,
      recommendation: "Declare a self-referencing canonical URL to prevent duplicate content penalties from URL query parameters.",
    });
  } else {
    checks.push({
      id: "canonical",
      category: "seo",
      title: "Canonical URL Tag",
      description: `Canonical tag properly declared: ${canonicalUrl.substring(0, 60)}`,
      status: "pass",
      score: 100,
    });
  }

  // 5. Robots Indexability
  if (isNoIndex) {
    checks.push({
      id: "robots",
      category: "seo",
      title: "Search Engine Indexability",
      description: "Page has 'noindex' directive set in meta robots, blocking search engines!",
      status: "fail",
      score: 0,
      recommendation: "Remove 'noindex' from your meta robots tag immediately if you want this page to appear in Google.",
    });
  } else {
    checks.push({
      id: "robots",
      category: "seo",
      title: "Search Engine Indexability",
      description: "Page allows search engines to index and crawl (no 'noindex' tag found).",
      status: "pass",
      score: 100,
    });
  }

  // 6. TTFB Speed
  if (techMeta.ttfb > 1200) {
    checks.push({
      id: "ttfb",
      category: "speed",
      title: "Server Response Time (TTFB)",
      description: `High Time To First Byte: ${techMeta.ttfb}ms (Google recommends < 600ms).`,
      status: "fail",
      score: 40,
      recommendation: "Implement edge caching, upgrade server infrastructure, or use a CDN like Cloudflare to reduce server delay.",
    });
  } else if (techMeta.ttfb > 600) {
    checks.push({
      id: "ttfb",
      category: "speed",
      title: "Server Response Time (TTFB)",
      description: `Moderate server latency: ${techMeta.ttfb}ms.`,
      status: "warning",
      score: 75,
      recommendation: "Enable edge caching and optimize database queries to bring TTFB under 500ms.",
    });
  } else {
    checks.push({
      id: "ttfb",
      category: "speed",
      title: "Server Response Time (TTFB)",
      description: `Fast server response: ${techMeta.ttfb}ms!`,
      status: "pass",
      score: 100,
    });
  }

  // 7. Mobile Viewport
  if (!hasViewport) {
    checks.push({
      id: "viewport",
      category: "speed",
      title: "Mobile Responsiveness Viewport",
      description: "Missing <meta name='viewport'> tag. Mobile devices will not render this page correctly.",
      status: "fail",
      score: 0,
      recommendation: "Add <meta name='viewport' content='width=device-width, initial-scale=1'> to your <head>.",
    });
  } else {
    checks.push({
      id: "viewport",
      category: "speed",
      title: "Mobile Viewport",
      description: "Mobile viewport meta tag is present.",
      status: "pass",
      score: 100,
    });
  }

  // 8. HTML Payload Size
  if (techMeta.htmlSizeKb > 250) {
    checks.push({
      id: "page-weight",
      category: "speed",
      title: "HTML Document Size",
      description: `Heavy initial HTML payload (${techMeta.htmlSizeKb} KB). This slows down mobile rendering.`,
      status: "warning",
      score: 60,
      recommendation: "Minify HTML, defer inlined base64 images or massive inline CSS/JS bundles.",
    });
  } else {
    checks.push({
      id: "page-weight",
      category: "speed",
      title: "HTML Document Size",
      description: `Lightweight document size: ${techMeta.htmlSizeKb} KB.`,
      status: "pass",
      score: 100,
    });
  }

  // 9. Image Alt Attributes
  if (totalImages > 0 && imagesWithoutAlt.length > 0) {
    const missingPercentage = Math.round((imagesWithoutAlt.length / totalImages) * 100);
    checks.push({
      id: "images-alt",
      category: "content",
      title: "Image Alt Attributes",
      description: `${imagesWithoutAlt.length} out of ${totalImages} image(s) (${missingPercentage}%) are missing alt text.`,
      status: missingPercentage > 50 ? "fail" : "warning",
      score: Math.max(20, 100 - missingPercentage),
      recommendation: "Add descriptive, keyword-rich alt attributes to all images to rank in Google Images and improve accessibility.",
    });
  } else if (totalImages > 0) {
    checks.push({
      id: "images-alt",
      category: "content",
      title: "Image Alt Attributes",
      description: `All ${totalImages} detected images have alt attributes defined.`,
      status: "pass",
      score: 100,
    });
  } else {
    checks.push({
      id: "images-alt",
      category: "content",
      title: "Image Alt Attributes",
      description: "No images detected in raw HTML.",
      status: "pass",
      score: 95,
    });
  }

  // 10. Headings Hierarchy
  if (h2Count === 0 && h3Count === 0) {
    checks.push({
      id: "heading-hierarchy",
      category: "content",
      title: "Headings Structure",
      description: "No H2 or H3 subheadings found. Content may lack structural scannability.",
      status: "warning",
      score: 60,
      recommendation: "Break content into logical sections with H2 and H3 subheadings for search crawlers and readers.",
    });
  } else {
    checks.push({
      id: "heading-hierarchy",
      category: "content",
      title: "Headings Structure",
      description: `Healthy structure: ${h1Texts.length} H1, ${h2Count} H2, and ${h3Count} H3 headings.`,
      status: "pass",
      score: 100,
    });
  }

  // 11. HTTPS / SSL
  if (!techMeta.isHttps) {
    checks.push({
      id: "https",
      category: "tech",
      title: "SSL / HTTPS Security",
      description: "Website is not running on secure HTTPS. Google flags HTTP sites as insecure.",
      status: "fail",
      score: 0,
      recommendation: "Install an SSL certificate and force 301 redirection from HTTP to HTTPS.",
    });
  } else {
    checks.push({
      id: "https",
      category: "tech",
      title: "SSL / HTTPS Security",
      description: "Website connects over a secure HTTPS connection.",
      status: "pass",
      score: 100,
    });
  }

  // 12. Open Graph Tags
  if (!ogTitle || !ogImage) {
    checks.push({
      id: "opengraph",
      category: "tech",
      title: "Social Open Graph Tags",
      description: "Missing og:title or og:image. Links shared on WhatsApp, LinkedIn, or Twitter will not display preview cards.",
      status: "warning",
      score: 50,
      recommendation: "Add og:title, og:description, and a high-resolution 1200x630px og:image tag.",
    });
  } else {
    checks.push({
      id: "opengraph",
      category: "tech",
      title: "Social Open Graph Tags",
      description: "Open Graph social sharing tags are configured properly.",
      status: "pass",
      score: 100,
    });
  }

  // 13. Schema / Structured Data
  if (detectedSchemas.length === 0) {
    checks.push({
      id: "schema",
      category: "tech",
      title: "Structured Data / JSON-LD Schema",
      description: "No JSON-LD structured data detected. Missing rich snippet opportunities on Google.",
      status: "warning",
      score: 50,
      recommendation: "Add schema.org JSON-LD markup (e.g. Organization, LocalBusiness, Article, or FAQPage) to qualify for Google Rich Results.",
    });
  } else {
    checks.push({
      id: "schema",
      category: "tech",
      title: "Structured Data / JSON-LD Schema",
      description: `Detected schema markup: ${detectedSchemas.slice(0, 3).join(", ")}.`,
      status: "pass",
      score: 100,
    });
  }

  // Calculate category averages
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
      h1Count: h1Texts.length,
      h1Texts,
      h2Count,
      h3Count,
      totalImages,
      imagesWithoutAltCount: imagesWithoutAlt.length,
      sampleImagesWithoutAlt: imagesWithoutAlt.slice(0, 5),
      internalLinksCount,
      externalLinksCount,
      wordCount,
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
      hsts: techMeta.hsts,
      server: techMeta.server,
    },
    checks,
  };
}

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedReqUrl = new URL(req.url, `http://localhost:${PORT}`);

  if (parsedReqUrl.pathname === "/api/audit") {
    const rawUrl = parsedReqUrl.searchParams.get("url");

    if (!rawUrl) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing required 'url' parameter" }));
      return;
    }

    let targetUrl = rawUrl.trim();
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      if (targetUrl.startsWith("localhost") || targetUrl.startsWith("127.0.0.1")) {
        targetUrl = "http://" + targetUrl;
      } else {
        targetUrl = "https://" + targetUrl;
      }
    }

    let targetParsed;
    try {
      targetParsed = new URL(targetUrl);
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid URL provided." }));
      return;
    }

    try {
      const startTime = Date.now();
      const response = await fetch(targetParsed.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 (SociodigitSeoBot/1.0)",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(15000),
      });

      const ttfb = Date.now() - startTime;
      const html = await response.text();
      const downloadTime = Date.now() - startTime;
      const htmlSizeKb = +(html.length / 1024).toFixed(1);

      const auditData = runHtmlAudit(html, targetParsed, {
        ttfb,
        downloadTime,
        htmlSizeKb,
        status: response.status,
        isHttps: (response.url || targetUrl).startsWith("https://"),
        finalUrl: response.url || targetUrl,
        hsts: response.headers.has("strict-transport-security"),
        server: response.headers.get("server") || "hidden",
        hasCompression: !!(response.headers.get("content-encoding")),
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(auditData));
    } catch (err) {
      res.writeHead(502, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: `Failed to connect to ${targetParsed.hostname}: ${err.message}` }));
    }
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`[Sociodigit Audit Dev Engine] listening on http://localhost:${PORT}/api/audit`);
});
