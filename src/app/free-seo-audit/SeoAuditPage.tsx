"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  Shield,
  Gauge,
  FileText,
  Share2,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Globe,
  ImageIcon,
  Send,
  Zap,
  Lock,
  Layers,
  TrendingUp,
  MapPin,
  Activity,
  MessageSquare,
  Check,
  Info,
} from "lucide-react";

interface AuditCheck {
  id: string;
  category: "speed" | "seo" | "content" | "tech";
  tier: "free" | "pro";
  isLocked?: boolean;
  title: string;
  description?: string;
  teaserSummary?: string;
  status: "pass" | "warning" | "fail";
  score: number;
  recommendation?: string;
}

interface TopKeyword {
  keyword: string;
  count: number;
  inTitle: boolean;
  inH1: boolean;
}

interface AuditResult {
  url: string;
  finalUrl: string;
  hostname: string;
  auditedAt: string;
  auditMode: string;
  overallScore: number;
  categories: {
    seo: { score: number; label: string };
    speed: { score: number; label: string };
    content: { score: number; label: string };
    tech: { score: number; label: string };
  };
  meta: {
    title: string;
    titleLength: number;
    description: string;
    descLength: number;
    canonicalUrl: string;
    robotsContent: string;
    isNoIndex: boolean;
    htmlLang: string;
    hasFavicon: boolean;
    h1Count: number;
    h1Texts: string[];
    h2Count: number;
    h3Count: number;
    totalImages: number;
    imagesWithoutAltCount: number;
    modernImagesCount: number;
    lazyLoadedCount: number;
    internalLinksCount: number;
    externalLinksCount: number;
    emptyOrHashLinksCount: number;
    wordCount: number;
    readingTimeMin: number;
    topKeywords: TopKeyword[];
    totalKeywordsFound: number;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogType: string;
    detectedSchemas: string[];
  };
  tech: {
    ttfbMs: number;
    downloadTimeMs: number;
    htmlSizeKb: number;
    status: number;
    isHttps: boolean;
    wasRedirected: boolean;
    hsts: boolean;
    hasCompression: boolean;
    server: string;
    detectedStack: string[];
    robotsExists: boolean;
    sitemapExists: boolean;
    sitemapUrlCount: number;
    renderBlockingScriptsCount: number;
    missingSecurityHeadersCount: number;
  };
  checks: AuditCheck[];
}

const DAILY_FREE_LIMIT = 3;
const STORAGE_KEY = "sociodigit_free_audit_usage_v1";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function SeoAuditPage() {
  const [urlInput, setUrlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [auditData, setAuditData] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "seo" | "speed" | "content" | "tech">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "issues" | "pass">("all");
  const [scansUsedToday, setScansUsedToday] = useState(0);

  // Lead capture state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);

  const loadingSteps = [
    "Establishing secure connection to target server...",
    "Measuring server response latency (TTFB) & headers...",
    "Inspecting robots.txt & XML sitemap discovery...",
    "Parsing HTML, meta tags, keywords & heading hierarchy...",
    "Detecting render-blocking assets & media optimization...",
    "Compiling surface preview & locking pro diagnostics...",
  ];

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === getTodayKey() && typeof parsed.count === "number") {
          setScansUsedToday(parsed.count);
        } else {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: getTodayKey(), count: 0 }));
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 650);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading, loadingSteps.length]);

  const recordScanUsage = () => {
    const nextCount = scansUsedToday + 1;
    setScansUsedToday(nextCount);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: getTodayKey(), count: nextCount }));
    } catch {
      // Ignore storage errors
    }
  };

  const remainingScans = Math.max(0, DAILY_FREE_LIMIT - scansUsedToday);

  const scrollToFullAuditForm = () => {
    const el = document.getElementById("full-audit-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRunAudit = async (target?: string) => {
    if (remainingScans <= 0) {
      setErrorMsg(
        "You have used all 3 free surface preview scans for today. Request a full agency audit below to unlock unlimited multi-page diagnostics."
      );
      scrollToFullAuditForm();
      return;
    }

    const rawUrl = (target || urlInput).trim();
    if (!rawUrl) {
      setErrorMsg("Please enter a valid website URL (e.g. example.com)");
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);
    setAuditData(null);
    setLeadSubmitted(false);
    setLeadError(null);

    let cleanUrl = rawUrl;
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      if (cleanUrl.startsWith("localhost") || cleanUrl.startsWith("127.0.0.1")) {
        cleanUrl = "http://" + cleanUrl;
      } else {
        cleanUrl = "https://" + cleanUrl;
      }
    }

    const isLocalDev =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.startsWith("192.168.") ||
        window.location.hostname.startsWith("10."));

    const primaryEndpoint = isLocalDev
      ? `http://${window.location.hostname}:3001/api/audit?url=${encodeURIComponent(cleanUrl)}`
      : `/api/audit?url=${encodeURIComponent(cleanUrl)}`;

    try {
      let response: Response | null = null;
      try {
        response = await fetch(primaryEndpoint);
      } catch {
        try {
          response = await fetch(`/api/audit?url=${encodeURIComponent(cleanUrl)}`);
        } catch {
          response = null;
        }
      }

      if (response && response.ok) {
        const data = await response.json();
        setAuditData(data);
        recordScanUsage();
        setTimeout(() => {
          const resultsEl = document.getElementById("audit-results");
          if (resultsEl) {
            resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else {
        const errorData = response ? await response.json().catch(() => ({})) : {};
        setErrorMsg(
          errorData.error ||
            "Unable to connect to the target website. Please ensure the domain is online and accessible."
        );
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to complete audit. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;

    setIsSubmittingLead(true);
    setLeadError(null);

    try {
      const formData = new FormData();
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_SEO_AUDIT_KEY ||
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "8bb19443-1e3c-47c2-85b2-bab73c33973e";

      formData.append("access_key", accessKey);
      formData.append("subject", `🔍 Full SEO Audit Request: ${auditData?.hostname || urlInput || "New Lead"}`);
      formData.append("from_name", "Sociodigit SEO Audit Portal");
      formData.append("name", leadName || "Prospect");
      formData.append("email", leadEmail);
      formData.append("phone", leadPhone || "Not provided");
      formData.append("website", auditData?.finalUrl || urlInput || "Not specified");
      formData.append("score", auditData?.overallScore ? `${auditData.overallScore}/100` : "N/A");
      formData.append(
        "message",
        `User ran the free surface preview on ${auditData?.finalUrl || urlInput || "their domain"} (Score: ${
          auditData?.overallScore ?? "N/A"
        }/100, Issues: ${issuesCount}) and requested the Full Agency SEO Audit & Fix Roadmap.`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setLeadSubmitted(true);
      } else {
        setLeadError(data.message || "Failed to submit request. Please try again.");
      }
    } catch (err: any) {
      setLeadError(err?.message || "Failed to submit request. Please try again.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
    if (score >= 60) return "text-amber-400 border-amber-500/30 bg-amber-500/10";
    return "text-red-400 border-red-500/30 bg-red-500/10";
  };

  const getScoreStroke = (score: number) => {
    if (score >= 85) return "#34d399";
    if (score >= 60) return "#fbbf24";
    return "#f87171";
  };

  const allChecks = auditData?.checks || [];
  const filteredChecks = allChecks.filter((c) => {
    if (activeTab !== "all" && c.category !== activeTab) return false;
    if (filterStatus === "issues") return c.status === "fail" || c.status === "warning";
    if (filterStatus === "pass") return c.status === "pass";
    return true;
  });

  const issuesCount = allChecks.filter((c) => c.status === "fail" || c.status === "warning").length;
  const lockedIssuesCount = allChecks.filter(
    (c) => c.tier === "pro" && (c.status === "fail" || c.status === "warning")
  ).length;

  return (
    <div className="min-h-screen bg-space-blue text-white selection:bg-brand-orange/30 pt-28 pb-24">
      {/* Background radial glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px]" />
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom mx-auto">
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-brand-amber mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span>Surface Preview Tool • Glimpse of Sociodigit&apos;s Full SEO Suite</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Free Website <span className="gradient-text">SEO &amp; Speed Audit</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Run an instant 20-point single-page health check covering TTFB latency, on-page meta tags, security headers, and crawl signals.
          </p>

          {/* URL Input Form */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunAudit();
              }}
              className="relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl md:rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-2xl focus-within:border-brand-orange/60 transition-all"
            >
              <div className="flex items-center flex-1 w-full px-4 py-2 sm:py-0">
                <Globe className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Enter website (e.g. yourbusiness.com)"
                  className="w-full bg-transparent border-none text-white placeholder-neutral-500 focus:outline-none text-base"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || remainingScans <= 0}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-crimson text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer shadow-lg shadow-brand-orange/20"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : remainingScans <= 0 ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Daily Limit Reached</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Preview Audit</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Sample Links & Daily Quota Pill */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 px-2">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span>Try a sample:</span>
                {["sociodigit.in", "stripe.com", "airbnb.com"].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    disabled={isLoading || remainingScans <= 0}
                    onClick={() => {
                      setUrlInput(sample);
                      handleRunAudit(sample);
                    }}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors disabled:opacity-40 cursor-pointer"
                  >
                    {sample}
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
                <span
                  className={`w-2 h-2 rounded-full ${
                    remainingScans > 1 ? "bg-emerald-400" : remainingScans === 1 ? "bg-amber-400" : "bg-red-400"
                  }`}
                />
                <span>
                  Free Preview Scans: <strong>{remainingScans}/{DAILY_FREE_LIMIT}</strong> left today
                </span>
              </div>
            </div>

            {/* Glimpse Scope Disclaimer */}
            <div className="mt-5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-neutral-400 flex items-start gap-2.5 text-left">
              <Info className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-neutral-200">Scope Note:</strong> This free tool provides a{" "}
                <strong className="text-neutral-200">1-page surface glimpse</strong> of our technical SEO diagnostics. Full site-wide crawls (500+ URLs), Core Web Vitals lab/field traces, backlink toxicity, and competitor keyword gap reports are part of our{" "}
                <Link href="/seo-agency-bhubaneswar" className="text-brand-amber hover:underline">
                  managed SEO service
                </Link>
                .
              </p>
            </div>

            {errorMsg && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 justify-center">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>
        </div>

        {/* Loading Progress State */}
        {isLoading && (
          <div className="max-w-2xl mx-auto my-16 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl text-center">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin" />
              <Search className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">Running Surface Diagnostic</h3>
            <p className="text-neutral-400 text-sm h-6 transition-all">{loadingSteps[loadingStep]}</p>
            <div className="w-full bg-white/5 h-2 rounded-full mt-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-orange to-brand-amber h-full transition-all duration-500 ease-out"
                style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {auditData && !isLoading && (
          <div id="audit-results" className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700 scroll-mt-24">
            {/* Glimpse Mode Banner */}
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-brand-orange/10 to-transparent border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Surface Preview Mode (1 URL Scanned)
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                      10 Core Checks Unlocked • 10 Pro Diagnostics Locked
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 mt-1">
                    We detected <strong className="text-white">{issuesCount} total issues</strong> ({lockedIssuesCount} inside locked pro modules). Unlock the full asset list, exact code fixes, and 500-page crawl with our team.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={scrollToFullAuditForm}
                className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-crimson text-white font-semibold text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20"
              >
                <span>Unlock Full Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Top Overview Scorecard */}
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Overall Score Circle */}
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-white/10"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={getScoreStroke(auditData.overallScore)}
                        strokeWidth="8"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * auditData.overallScore) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-extrabold tracking-tight">{auditData.overallScore}</span>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">/ 100</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 uppercase tracking-wider">
                        Surface Score
                      </span>
                      <span className="text-xs text-neutral-400">
                        {new Date(auditData.auditedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 break-all">{auditData.hostname}</h2>
                    <p className="text-sm text-neutral-400 flex items-center gap-1 justify-center sm:justify-start mb-3">
                      <span className="truncate max-w-xs">{auditData.finalUrl}</span>
                      <a href={auditData.finalUrl} target="_blank" rel="noreferrer" className="text-brand-orange hover:underline">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </p>
                    {/* Tech Stack & Crawl Signals */}
                    <div className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
                      {auditData.tech.detectedStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${
                          auditData.tech.robotsExists
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                            : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                        }`}
                      >
                        robots.txt: {auditData.tech.robotsExists ? "OK" : "Missing"}
                      </span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${
                          auditData.tech.sitemapExists
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                            : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                        }`}
                      >
                        sitemap.xml: {auditData.tech.sitemapExists ? `${auditData.tech.sitemapUrlCount || "Active"}` : "Missing"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Category Score Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
                  {Object.entries(auditData.categories).map(([key, cat]) => (
                    <div
                      key={key}
                      className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center min-w-0"
                    >
                      <div className={`text-2xl font-bold mb-1 ${getScoreColor(cat.score).split(" ")[0]}`}>
                        {cat.score}
                        <span className="text-xs font-normal text-neutral-500">/100</span>
                      </div>
                      <div className="text-xs text-neutral-400 font-medium leading-tight">{cat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">Server TTFB</div>
                  <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                    <Zap className="w-4 h-4 text-amber-400" />
                    {auditData.tech.ttfbMs} ms
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">HTML Payload</div>
                  <div className="text-base font-bold text-white">{auditData.tech.htmlSizeKb} KB</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">Blocking Scripts</div>
                  <div className={`text-base font-bold ${auditData.tech.renderBlockingScriptsCount > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                    {auditData.tech.renderBlockingScriptsCount} in &lt;head&gt;
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">Missing Alt Tags</div>
                  <div className={`text-base font-bold ${auditData.meta.imagesWithoutAltCount > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                    {auditData.meta.imagesWithoutAltCount} / {auditData.meta.totalImages}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">Word Count</div>
                  <div className="text-base font-bold text-white">
                    {auditData.meta.wordCount} <span className="text-xs text-neutral-400 font-normal">({auditData.meta.readingTimeMin}m)</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">SSL Security</div>
                  <div className={`text-base font-bold flex items-center justify-center gap-1 ${auditData.tech.isHttps ? "text-emerald-400" : "text-red-400"}`}>
                    <Shield className="w-4 h-4" />
                    {auditData.tech.isHttps ? "HTTPS" : "HTTP"}
                  </div>
                </div>
              </div>
            </div>

            {/* Google SERP & Social Sharing Live Previews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Google SERP Snippet Preview */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Search className="w-5 h-5 text-brand-orange" />
                    <span>Google Search Preview</span>
                  </h3>
                  <span className="text-xs text-neutral-400">Desktop / Mobile Snippet</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#202124] border border-white/5 text-left font-sans">
                  <div className="flex items-center gap-2 mb-1.5 text-xs text-[#bdc1c6] truncate">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[9px]">🌐</div>
                    <span className="font-medium text-[#dadce0]">{auditData.hostname}</span>
                    <span>›</span>
                    <span className="truncate">{auditData.finalUrl.replace(/^https?:\/\/[^/]+/i, "") || "home"}</span>
                  </div>
                  <h4 className="text-lg md:text-xl text-[#8ab4f8] hover:underline cursor-pointer font-medium leading-snug line-clamp-1 mb-1">
                    {auditData.meta.title || "Untitled Document"}
                  </h4>
                  <p className="text-sm text-[#bdc1c6] line-clamp-2 leading-relaxed">
                    {auditData.meta.description || "No meta description provided. Google will display arbitrary text from your page."}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                  <span>Title: {auditData.meta.titleLength} / 60 chars</span>
                  <span>Description: {auditData.meta.descLength} / 160 chars</span>
                </div>

                {/* Top Extracted Keywords Glimpse */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Top Detected Keywords (Glimpse)
                    </span>
                    <span className="text-[11px] text-amber-300 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Full Gap Report Locked
                    </span>
                  </div>
                  <div className="space-y-2">
                    {auditData.meta.topKeywords.map((kw) => (
                      <div
                        key={kw.keyword}
                        className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <span className="font-medium text-white">
                          {kw.keyword} <span className="text-neutral-500">({kw.count}x)</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={kw.inTitle ? "text-emerald-400" : "text-neutral-500"}>
                            {kw.inTitle ? "✓ Title" : "✗ Title"}
                          </span>
                          <span className={kw.inH1 ? "text-emerald-400" : "text-neutral-500"}>
                            {kw.inH1 ? "✓ H1" : "✗ H1"}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-amber-500/[0.04] border border-amber-500/20 text-amber-200/80">
                      <span className="flex items-center gap-1.5 blur-[2px] select-none">
                        competitor keyword gap cluster
                      </span>
                      <button
                        type="button"
                        onClick={scrollToFullAuditForm}
                        className="text-brand-amber hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Lock className="w-3 h-3" /> Unlock Semantic Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social OpenGraph Preview Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-blue-400" />
                      <span>Social Media Card Preview</span>
                    </h3>
                    <span className="text-xs text-neutral-400">WhatsApp / LinkedIn / X</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                    {auditData.meta.ogImage ? (
                      <div className="h-44 w-full relative bg-neutral-900 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={auditData.meta.ogImage}
                          alt="Social preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                    ) : (
                      <div className="h-36 w-full bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-500 gap-2">
                        <ImageIcon className="w-4 h-4" />
                        <span>No og:image specified</span>
                      </div>
                    )}
                    <div className="p-4">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                        {auditData.hostname}
                      </div>
                      <div className="font-semibold text-sm line-clamp-1 mb-1">
                        {auditData.meta.ogTitle || auditData.meta.title || "No social title"}
                      </div>
                      <div className="text-xs text-neutral-400 line-clamp-2">
                        {auditData.meta.ogDescription || auditData.meta.description || "No social description"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schema Snapshot */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">
                    Detected JSON-LD Schemas:{" "}
                    <strong className="text-white">
                      {auditData.meta.detectedSchemas.length > 0
                        ? auditData.meta.detectedSchemas.slice(0, 3).join(", ")
                        : "None found"}
                    </strong>
                  </span>
                  <span className="text-neutral-400">
                    Links: <strong className="text-white">{auditData.meta.internalLinksCount}</strong> int /{" "}
                    <strong className="text-white">{auditData.meta.externalLinksCount}</strong> ext
                  </span>
                </div>
              </div>
            </div>

            {/* Locked Agency-Exclusive Intelligence Modules */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-amber mb-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Beyond The Free Glimpse</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    4 Enterprise Modules Included in Sociodigit&apos;s Full Audit
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={scrollToFullAuditForm}
                  className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer self-start md:self-auto"
                >
                  Request Full Report →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: Layers,
                    title: "500+ Page Site Crawl",
                    desc: "Uncover broken 404s, redirect loops, duplicate meta tags & orphan URLs across your entire domain.",
                    blurredStat: "42 crawl errors",
                  },
                  {
                    icon: Activity,
                    title: "CWV Field & Waterfall",
                    desc: "Real-user CrUX LCP/INP/CLS bottlenecks, unused JS/CSS tree-shaking & server caching architecture.",
                    blurredStat: "1.8s LCP gain",
                  },
                  {
                    icon: TrendingUp,
                    title: "Competitor & Backlink Gap",
                    desc: "Reverse-engineer top 3 competitors' ranking keywords, toxic backlinks & high-DR link opportunities.",
                    blurredStat: "180+ keyword gaps",
                  },
                  {
                    icon: MapPin,
                    title: "Local SEO & Map Pack",
                    desc: "Google Business Profile audit, NAP citation consistency & hyper-local schema for Odisha & India.",
                    blurredStat: "Top-3 Map Pack",
                  },
                ].map((mod) => (
                  <div
                    key={mod.title}
                    className="p-5 rounded-2xl bg-black/30 border border-white/10 relative overflow-hidden group hover:border-brand-orange/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center">
                        <mod.icon className="w-4 h-4" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        <Lock className="w-2.5 h-2.5" /> Locked
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-white mb-1.5">{mod.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{mod.desc}</p>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="blur-[3px] select-none text-neutral-300 font-mono">{mod.blurredStat}</span>
                      <button
                        type="button"
                        onClick={scrollToFullAuditForm}
                        className="text-brand-amber font-semibold hover:underline cursor-pointer"
                      >
                        Unlock →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Checklist Tabs & Filters */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                {/* Category Navigation */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  {[
                    { id: "all", label: `All Checks (${allChecks.length})` },
                    { id: "seo", label: "On-Page SEO" },
                    { id: "speed", label: "Speed & Performance" },
                    { id: "content", label: "Content & Media" },
                    { id: "tech", label: "Technical & Security" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-neutral-500 font-medium">Show:</span>
                  <button
                    onClick={() => setFilterStatus("all")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      filterStatus === "all" ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterStatus("issues")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      filterStatus === "issues"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Issues ({issuesCount})
                  </button>
                  <button
                    onClick={() => setFilterStatus("pass")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      filterStatus === "pass"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Passed
                  </button>
                </div>
              </div>

              {/* Audit Checks List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredChecks.map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      item.status === "pass"
                        ? "bg-white/[0.015] border-white/5 hover:border-white/10"
                        : item.status === "warning"
                        ? "bg-amber-500/[0.03] border-amber-500/20 hover:border-amber-500/40"
                        : "bg-red-500/[0.04] border-red-500/25 hover:border-red-500/40"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 shrink-0">
                        {item.status === "pass" && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        {item.status === "warning" && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                        {item.status === "fail" && <XCircle className="w-5 h-5 text-red-400" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-base text-white">{item.title}</h4>
                            {item.tier === "pro" && (
                              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-brand-orange/15 text-brand-amber border border-brand-orange/30">
                                <Lock className="w-2.5 h-2.5" /> Pro Insight
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                              item.status === "pass"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : item.status === "warning"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                : "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}
                          >
                            {item.status === "pass" ? "Passed" : item.status === "warning" ? "Needs Attention" : "Failed"}
                          </span>
                        </div>

                        {item.tier === "pro" ? (
                          <>
                            <p className="text-sm text-neutral-300 mb-3 leading-relaxed">{item.teaserSummary}</p>
                            <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-2 text-xs text-neutral-400">
                                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span className="blur-[2.5px] select-none">
                                  Detailed offending asset list &amp; step-by-step code remediation snippet
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={scrollToFullAuditForm}
                                className="text-xs font-semibold text-brand-amber hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                              >
                                Unlock in Full Audit →
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-neutral-300 mb-2 leading-relaxed">{item.description}</p>
                            {item.recommendation && (
                              <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 flex items-start gap-2">
                                <span className="font-semibold text-brand-amber shrink-0">💡 Quick Fix:</span>
                                <span className="leading-relaxed">{item.recommendation}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {filteredChecks.length === 0 && (
                  <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/5 text-neutral-400">
                    No checks found for this filter.
                  </div>
                )}
              </div>
            </div>

            {/* Free Glimpse vs Full Agency Audit Comparison */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Free Surface Glimpse vs. Full Agency Audit</h3>
                <p className="text-sm text-neutral-400">
                  See why growing brands partner with Sociodigit beyond automated surface scores.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">You Just Ran</div>
                  <h4 className="text-lg font-bold mb-4">Free Surface Preview</h4>
                  <ul className="space-y-2.5 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 1 single URL scanned per run
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 10 core meta &amp; TTFB checks unlocked
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Top 3 extracted page keywords
                    </li>
                    <li className="flex items-center gap-2 text-neutral-500">
                      <XCircle className="w-4 h-4 shrink-0" /> No multi-page crawl or broken link map
                    </li>
                    <li className="flex items-center gap-2 text-neutral-500">
                      <XCircle className="w-4 h-4 shrink-0" /> No competitor keyword or backlink audit
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-orange/15 via-white/[0.03] to-transparent border border-brand-orange/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-amber mb-1">Recommended</div>
                  <h4 className="text-lg font-bold mb-4">Sociodigit Full Technical &amp; Growth Audit</h4>
                  <ul className="space-y-2.5 text-sm text-neutral-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Full 500+ URL site-wide crawl &amp; indexation audit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Exact offending asset list &amp; developer-ready fixes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Core Web Vitals (LCP, INP, CLS) optimization blueprint
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Top 3 competitor keyword &amp; backlink gap analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 30-minute 1-on-1 strategy walkthrough with our team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* High-Converting Lead Capture & Full Audit CTA (Always accessible, even if daily limit reached) */}
        <div
          id="full-audit-cta"
          className="mt-14 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-orange/20 via-white/[0.03] to-brand-crimson/10 border border-brand-orange/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
                🎯 Ready For The Complete Picture?
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3">
                {auditData ? (
                  <>
                    Unlock All <span className="text-brand-orange">{issuesCount} Issues</span> &amp; Your Full Fix Roadmap
                  </>
                ) : (
                  <>
                    Want Sociodigit&apos;s <span className="text-brand-orange">Full 120-Point</span> Agency Audit?
                  </>
                )}
              </h3>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                This free tool only scratches the surface. Our technical SEO specialists in Bhubaneswar will manually audit your entire site, Core Web Vitals, schema markup, and competitor gaps.
              </p>
            </div>

            {leadSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Full Audit Request Received!</h4>
                <p className="text-neutral-300 text-sm max-w-md mx-auto mb-4">
                  Thank you! Our SEO strategy team at Sociodigit will review{" "}
                  <strong>{auditData?.hostname || urlInput || "your website"}</strong> and reach out within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setLeadSubmitted(false);
                    setLeadError(null);
                  }}
                  className="text-xs text-brand-amber hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-xl mx-auto">
                {leadError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2 justify-center">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{leadError}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="john@yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="flex-1 py-4 px-6 rounded-xl bg-brand-orange hover:bg-brand-crimson text-white font-bold text-sm md:text-base transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-orange/30 disabled:opacity-50"
                  >
                    {isSubmittingLead ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Full Agency Audit</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919886001422?text=${encodeURIComponent(
                      `Hi Sociodigit, I ran the free SEO preview on ${
                        auditData?.hostname || urlInput || "my website"
                      } and would like to discuss a full SEO & performance audit.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
                <p className="text-center text-xs text-neutral-400">
                  🔒 No spam guaranteed. Limited to serious businesses ready to scale organic traffic.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Informational SEO Pillars Section when no audit is run yet */}
        {!auditData && !isLoading && (
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Does This Preview Check?</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
                Get an instant glimpse of how Googlebot evaluates your page across 20 surface signals before engaging our team for a full-scale technical audit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 text-brand-orange">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Speed &amp; Asset Bottlenecks</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Measures server TTFB, HTML weight, render-blocking &lt;head&gt; scripts, and mobile viewport readiness.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">On-Page Meta &amp; Crawl Signals</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Inspects title/description truncation, canonicals, robots.txt, XML sitemaps, and top keyword alignment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Security &amp; Rich Snippets</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Checks HTTPS, enterprise security headers (HSTS/CSP), JSON-LD schema types, and social OpenGraph previews.
                </p>
              </div>
            </div>

            {/* Related Service Cross-Link */}
            <div className="mt-16 text-center">
              <Link
                href="/seo-agency-bhubaneswar"
                className="inline-flex items-center gap-2 text-brand-amber hover:text-white font-semibold text-sm transition-colors group"
              >
                <span>Looking for dedicated SEO services in Bhubaneswar? Explore our full capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
