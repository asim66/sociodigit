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
  Copy,
  Check,
  Smartphone,
  Globe,
  ImageIcon,
  Send,
  Zap
} from "lucide-react";

interface AuditCheck {
  id: string;
  category: "speed" | "seo" | "content" | "tech";
  title: string;
  description: string;
  status: "pass" | "warning" | "fail";
  score: number;
  recommendation?: string;
}

interface AuditResult {
  url: string;
  finalUrl: string;
  hostname: string;
  auditedAt: string;
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
    h1Count: number;
    h1Texts: string[];
    h2Count: number;
    h3Count: number;
    totalImages: number;
    imagesWithoutAltCount: number;
    sampleImagesWithoutAlt: string[];
    internalLinksCount: number;
    externalLinksCount: number;
    wordCount: number;
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
    hsts: boolean;
    server: string;
  };
  checks: AuditCheck[];
}

export default function SeoAuditPage() {
  const [urlInput, setUrlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [auditData, setAuditData] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "seo" | "speed" | "content" | "tech">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "issues" | "pass">("all");
  const [copiedLink, setCopiedLink] = useState(false);

  // Lead capture state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);

  const loadingSteps = [
    "Establishing secure connection to server...",
    "Measuring server response latency (TTFB)...",
    "Parsing HTML, Title, Description & Headings...",
    "Auditing image alt tags & media assets...",
    "Evaluating OpenGraph, Schema & Security...",
    "Calculating SEO & Performance scores..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 700);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleRunAudit = async (target?: string) => {
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

    // In local dev, query local audit microserver on 3001; in production query Cloudflare edge endpoint /api/audit
    const primaryEndpoint = isLocalDev
      ? `http://${window.location.hostname}:3001/api/audit?url=${encodeURIComponent(cleanUrl)}`
      : `/api/audit?url=${encodeURIComponent(cleanUrl)}`;

    try {
      let response: Response | null = null;
      try {
        response = await fetch(primaryEndpoint);
      } catch {
        // If port 3001 was not reached, try standard /api/audit
        try {
          response = await fetch(`/api/audit?url=${encodeURIComponent(cleanUrl)}`);
        } catch {
          response = null;
        }
      }

      if (response && response.ok) {
        const data = await response.json();
        setAuditData(data);
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
      setErrorMsg(err.message || "Failed to complete audit. Please check your network connection.");
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
      formData.append("subject", `🔍 Free SEO Audit Request: ${auditData?.hostname || urlInput}`);
      formData.append("from_name", "Sociodigit SEO Audit Portal");
      formData.append("name", leadName || "Prospect");
      formData.append("email", leadEmail);
      formData.append("phone", leadPhone || "Not provided");
      formData.append("website", auditData?.finalUrl || urlInput);
      formData.append("score", auditData?.overallScore ? `${auditData.overallScore}/100` : "N/A");
      formData.append(
        "message",
        `User audited ${auditData?.finalUrl || urlInput} and requested consultation. Overall Score: ${
          auditData?.overallScore ?? "N/A"
        }/100.`
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

  const filteredChecks = (auditData?.checks || []).filter((c) => {
    if (activeTab !== "all" && c.category !== activeTab) return false;
    if (filterStatus === "issues") return c.status === "fail" || c.status === "warning";
    if (filterStatus === "pass") return c.status === "pass";
    return true;
  });

  const issuesCount = (auditData?.checks || []).filter((c) => c.status === "fail" || c.status === "warning").length;

  return (
    <div className="min-h-screen bg-space-blue text-white selection:bg-brand-orange/30 pt-28 pb-24">
      {/* Background radial glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px]" />
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom">
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-brand-amber mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span>Instant SEO & Website Speed Health Diagnostic</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Free Website <span className="gradient-text">SEO & Speed Audit</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Test your website for Core Web Vitals, on-page SEO errors, missing meta tags, and mobile readiness in seconds.
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
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-crimson text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg shadow-brand-orange/20"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Auditing...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Free Audit</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Sample Links */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 flex-wrap">
              <span>Try a sample:</span>
              <button
                type="button"
                onClick={() => {
                  setUrlInput("sociodigit.in");
                  handleRunAudit("sociodigit.in");
                }}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
              >
                sociodigit.in
              </button>
              <button
                type="button"
                onClick={() => {
                  setUrlInput("stripe.com");
                  handleRunAudit("stripe.com");
                }}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
              >
                stripe.com
              </button>
              <button
                type="button"
                onClick={() => {
                  setUrlInput("airbnb.com");
                  handleRunAudit("airbnb.com");
                }}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
              >
                airbnb.com
              </button>
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
            <h3 className="text-xl font-bold mb-2">Analyzing Website Diagnostics</h3>
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
          <div id="audit-results" className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700 scroll-mt-24">
            {/* Top Overview Scorecard */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Overall Score Circle */}
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="relative w-36 h-36 flex items-center justify-center">
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
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 uppercase tracking-wider">
                        Overall Score
                      </span>
                      <span className="text-xs text-neutral-400">
                        {new Date(auditData.auditedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 break-all">{auditData.hostname}</h2>
                    <p className="text-sm text-neutral-400 flex items-center gap-1 justify-center sm:justify-start">
                      <span className="truncate max-w-xs">{auditData.finalUrl}</span>
                      <a href={auditData.finalUrl} target="_blank" rel="noreferrer" className="text-brand-orange hover:underline">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </p>
                  </div>
                </div>

                {/* 4 Category Score Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  {Object.entries(auditData.categories).map(([key, cat]) => (
                    <div
                      key={key}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center min-w-[120px]"
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
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
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
                  <div className="text-xs text-neutral-400 mb-1">Missing Alt Tags</div>
                  <div className={`text-base font-bold ${auditData.meta.imagesWithoutAltCount > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                    {auditData.meta.imagesWithoutAltCount} / {auditData.meta.totalImages}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">H1 Headings</div>
                  <div className={`text-base font-bold ${auditData.meta.h1Count === 1 ? "text-emerald-400" : "text-amber-400"}`}>
                    {auditData.meta.h1Count} tag(s)
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 p-3 rounded-xl bg-white/[0.02]">
                  <div className="text-xs text-neutral-400 mb-1">SSL Security</div>
                  <div className="text-base font-bold text-emerald-400 flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4" />
                    {auditData.tech.isHttps ? "Active (HTTPS)" : "Insecure (HTTP)"}
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
              </div>

              {/* Social OpenGraph Preview Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-blue-400" />
                    <span>Social Media Card Preview</span>
                  </h3>
                  <span className="text-xs text-neutral-400">WhatsApp / LinkedIn / Twitter</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                  {auditData.meta.ogImage ? (
                    <div className="h-36 w-full relative bg-neutral-900 overflow-hidden">
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
                    <div className="h-28 w-full bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-500 gap-2">
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
            </div>

            {/* Detailed Checklist Tabs & Filters */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                {/* Category Navigation */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === "all" ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    All Checks ({auditData.checks.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("seo")}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === "seo" ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    On-Page SEO
                  </button>
                  <button
                    onClick={() => setActiveTab("speed")}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === "speed" ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    Speed & Performance
                  </button>
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === "content" ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    Content & Media
                  </button>
                  <button
                    onClick={() => setActiveTab("tech")}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === "tech" ? "bg-brand-orange text-white" : "bg-white/5 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    Technical & Security
                  </button>
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
                      filterStatus === "issues" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Issues ({issuesCount})
                  </button>
                  <button
                    onClick={() => setFilterStatus("pass")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      filterStatus === "pass" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "text-neutral-400 hover:text-white"
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
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h4 className="font-bold text-base text-white">{item.title}</h4>
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

                        <p className="text-sm text-neutral-300 mb-2 leading-relaxed">{item.description}</p>

                        {item.recommendation && (
                          <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 flex items-start gap-2">
                            <span className="font-semibold text-brand-amber shrink-0">💡 Fix:</span>
                            <span className="leading-relaxed">{item.recommendation}</span>
                          </div>
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

            {/* High-Converting Lead Capture & Fix Plan CTA */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-orange/20 via-white/[0.03] to-brand-crimson/10 border border-brand-orange/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
                    🎯 Turn Findings Into Real Rankings
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">
                    Want Sociodigit to Fix These <span className="text-brand-orange">{issuesCount} Issues</span>?
                  </h3>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                    Our technical SEO specialists in Bhubaneswar will conduct an in-depth audit of your Core Web Vitals, schema markup, and competitor keywords with an actionable roadmap.
                  </p>
                </div>

                {leadSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-white mb-2">Audit Consultation Request Received!</h4>
                    <p className="text-neutral-300 text-sm max-w-md mx-auto mb-4">
                      Thank you! Our SEO strategy team at Sociodigit will review <strong>{auditData.hostname}</strong> and reach out to you within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setLeadSubmitted(false);
                        setLeadError(null);
                      }}
                      className="text-xs text-brand-amber hover:underline cursor-pointer"
                    >
                      Submit another consultation request
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

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-crimson text-white font-bold text-base transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-orange/30 disabled:opacity-50"
                    >
                      {isSubmittingLead ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Claim Free Strategy Session & Full Fix Plan</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-neutral-400">
                      🔒 No spam guaranteed. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Informational SEO Pillars Section when no audit is run yet */}
        {!auditData && !isLoading && (
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Does This Audit Check?</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
                Our diagnostic engine scans your page the same way Googlebot inspects websites for search ranking eligibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 text-brand-orange">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Speed & Core Web Vitals</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Evaluates server response time (TTFB), HTML document size, and mobile viewport configuration to diagnose loading lag.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">On-Page Meta & Schema</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Inspects title tag length, meta description snippet truncation, canonical tags, and structured JSON-LD schema markup.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Media & Security Health</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Scans image alt attributes, heading hierarchies (H1/H2/H3), SSL encryption, and social OpenGraph cards for WhatsApp & LinkedIn.
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

