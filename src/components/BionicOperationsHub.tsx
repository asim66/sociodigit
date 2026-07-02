"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Terminal,
  Play,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Database,
  Cloud,
  Layers,
  Globe,
  Activity,
  ChevronRight,
  Server,
  AlertCircle,
  MapPin,
  TrendingUp,
  Settings,
  CpuIcon
} from "lucide-react";

// Types for AI configuration blueprints
type StackType = "saas" | "ecommerce" | "ai_platform";

interface TechNode {
  name: string;
  role: string;
  icon: React.ReactNode;
  color: string;
}

const STACK_BLUEPRINTS: Record<StackType, { title: string; desc: string; nodes: TechNode[] }> = {
  saas: {
    title: "SaaS Platform Stack",
    desc: "Optimized for multi-tenant scalability, real-time sync, and millisecond routing.",
    nodes: [
      { name: "Next.js 15 SSR", role: "Frontend & Edge routing", icon: <Globe className="w-5 h-5" />, color: "border-emerald-500/30 text-emerald-400 text-xs" },
      { name: "FastAPI / Node", role: "Microservice APIs", icon: <Cpu className="w-5 h-5" />, color: "border-brand-orange/30 text-brand-orange text-xs" },
      { name: "PostgreSQL (Neon)", role: "Serverless Database", icon: <Database className="w-5 h-5" />, color: "border-blue-500/30 text-blue-400 text-xs" },
      { name: "AWS ECS & Fargate", role: "Scalable Containers", icon: <Cloud className="w-5 h-5" />, color: "border-purple-500/30 text-purple-400 text-xs" }
    ]
  },
  ecommerce: {
    title: "Headless E-Commerce Stack",
    desc: "Engineered for maximum Core Web Vitals, dynamic cart transactions, and global SEO.",
    nodes: [
      { name: "Next.js Commerce", role: "Static Generation (ISR)", icon: <Globe className="w-5 h-5" />, color: "border-emerald-500/30 text-emerald-400 text-xs" },
      { name: "Stripe API & Webhooks", role: "Secure Checkout Core", icon: <Layers className="w-5 h-5" />, color: "border-brand-orange/30 text-brand-orange text-xs" },
      { name: "Upstash Redis Cache", role: "Edge Session Store", icon: <Database className="w-5 h-5" />, color: "border-blue-500/30 text-blue-400 text-xs" },
      { name: "Cloudflare Workers", role: "Edge Personalization", icon: <Cloud className="w-5 h-5" />, color: "border-purple-500/30 text-purple-400 text-xs" }
    ]
  },
  ai_platform: {
    title: "Cognitive AI Engine Stack",
    desc: "Built for heavy compute pipeline workloads, real-time agent token streaming, and low inference lag.",
    nodes: [
      { name: "React Flow UI", role: "Visual Workflow Studio", icon: <Globe className="w-5 h-5" />, color: "border-emerald-500/30 text-emerald-400 text-xs" },
      { name: "Python / FastAPI", role: "LLM Orchestrator Engine", icon: <Cpu className="w-5 h-5" />, color: "border-brand-orange/30 text-brand-orange text-xs" },
      { name: "Pinecone Vector DB", role: "Semantic Search / RAG Store", icon: <Database className="w-5 h-5" />, color: "border-blue-500/30 text-blue-400 text-xs" },
      { name: "AWS Bedrock / GPU cluster", role: "Model Inference Host", icon: <Cloud className="w-5 h-5" />, color: "border-purple-500/30 text-purple-400 text-xs" }
    ]
  }
};

const BionicOperationsHub = () => {
  // --- Widget 1: Interactive QA Runner ---
  const [qaStatus, setQaStatus] = useState<"idle" | "running" | "complete">("idle");
  const [qaStep, setQaStep] = useState<number>(-1);
  const qaLogs = [
    { text: "Initializing headless playwright client...", desc: "Spawning chromium sub-process" },
    { text: "Analyzing performance budgets...", desc: "Speed Index target < 0.8s" },
    { text: "Pinging cloud db endpoints...", desc: "Neon Serverless handshake established" },
    { text: "SEO structural health check...", desc: "Checking metadata & JSON-LD syntax" }
  ];

  useEffect(() => {
    if (qaStatus === "running") {
      setQaStep(0);
      const interval = setInterval(() => {
        setQaStep((prev) => {
          if (prev >= qaLogs.length - 1) {
            clearInterval(interval);
            setQaStatus("complete");
            return prev + 1;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [qaStatus]);

  const handleStartQa = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering card navigation
    if (qaStatus === "running") return;
    setQaStatus("running");
    setQaStep(-1);
  };

  const handleResetQa = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQaStatus("idle");
    setQaStep(-1);
  };

  // --- Widget 2: DevOps Live Monitor ---
  const [metricsScale, setMetricsScale] = useState<"standard" | "high">("standard");
  const [liveLatency, setLiveLatency] = useState<number>(34);
  const [chartData, setChartData] = useState<number[]>([28, 35, 30, 42, 38, 31, 34]);
  const [rollingLogs, setRollingLogs] = useState<string[]>([
    "Cloudflare worker cache HIT: /page",
    "PostgreSQL active pool size: 14/100",
    "Health check heartbeat OK (2ms)"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuation
      const base = metricsScale === "standard" ? 30 : 65;
      const variation = Math.floor(Math.random() * 15) - 7;
      const val = Math.max(10, base + variation);
      setLiveLatency(val);
      setChartData((prev) => [...prev.slice(1), val]);

      // Add log
      const logOptions = [
        `Incoming HTTP requests: +${metricsScale === "standard" ? "42" : "310"}req/s`,
        `Ingress traffic routed through Edge Node`,
        `Replica CPU utilization: ${metricsScale === "standard" ? "12%" : "48%"}`,
        `Vercel deployment check OK`,
        `PostgreSQL transaction committed`
      ];
      const newLog = logOptions[Math.floor(Math.random() * logOptions.length)];
      setRollingLogs((prev) => [newLog, prev[0], prev[1]]);
    }, 1500);

    return () => clearInterval(interval);
  }, [metricsScale]);

  const toggleScale = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMetricsScale((prev) => (prev === "standard" ? "high" : "standard"));
  };

  // --- Widget 3: AI Architecture Selector ---
  const [selectedStack, setSelectedStack] = useState<StackType>("saas");

  // --- Widget 4: Edge Routing Nodes ---
  const [activeNode, setActiveNode] = useState<string | null>("Tokyo");
  const edgeNodes = [
    { name: "Tokyo", lat: "12ms", x: "78%", y: "40%", load: "1,200 req/s" },
    { name: "London", lat: "22ms", x: "42%", y: "28%", load: "850 req/s" },
    { name: "San Francisco", lat: "18ms", x: "15%", y: "32%", load: "2,400 req/s" },
    { name: "Sydney", lat: "38ms", x: "85%", y: "82%", load: "450 req/s" },
    { name: "Frankfurt", lat: "19ms", x: "48%", y: "30%", load: "1,600 req/s" }
  ];

  return (
    <section className="section-padding bg-black/5 relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4 block">
            Bionic Operations Hub
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Interactive <span className="gradient-text">Performance</span> Playground
          </h2>
          <p className="text-lg text-white/60">
            Interact with our simulated quality assurance and deployment engines below. See how our microservice architecture scales in real time.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,_auto)]">
          {/* CARD 1: Automated QA Runner (Col Span 2) */}
          <div className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden flex flex-col group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">QA Automation Test Runner</h3>
                  <p className="text-xs text-white/40">Headless browser automation simulation</p>
                </div>
              </div>

              {qaStatus !== "idle" && (
                <button
                  onClick={handleResetQa}
                  className="px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-xs font-bold text-white/60 hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-orange"
                >
                  <RefreshCw className="w-3.5 h-3.5 inline mr-1 animate-spin-slow" /> Reset
                </button>
              )}
            </div>

            {/* Simulated Terminal Screen */}
            <div className="flex-1 bg-black/50 border border-white/5 rounded-2xl p-6 font-mono text-sm relative z-10 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 p-3 flex space-x-1.5 opacity-60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-4">
                {qaStatus === "idle" && (
                  <div className="h-full flex flex-col items-center justify-center py-10 text-center">
                    <AlertCircle className="w-8 h-8 text-white/20 mb-3 animate-pulse" />
                    <p className="text-white/40 text-xs max-w-xs">
                      Launch headless browser checks to simulate Playwright and Lighthouse audit tasks.
                    </p>
                  </div>
                )}

                {/* Staggered execution lines */}
                {qaStatus !== "idle" &&
                  qaLogs.map((log, index) => {
                    const isVisible = qaStep >= index;
                    const isRunning = qaStep === index;
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-300 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center space-x-2.5">
                            {isRunning ? (
                              <RefreshCw className="w-4 h-4 text-brand-orange animate-spin shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            <span className={isRunning ? "text-brand-orange font-bold" : "text-white/80"}>
                              {log.text}
                            </span>
                          </div>
                          <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider shrink-0">
                            {isRunning ? "Testing" : "Passed"}
                          </span>
                        </div>
                        <p className="text-[10px] text-white/45 pl-6 mt-0.5">{log.desc}</p>
                      </div>
                    );
                  })}

                {/* Completion summary */}
                {qaStatus === "complete" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between mt-6"
                  >
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-[10px] mb-0.5">Automation Report Summary</h4>
                      <p className="text-white/60 text-[10px]">
                        4 suites verified. Compile target reached. Edge Cache warmed successfully.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-black text-lg block">100%</span>
                      <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block">Integrity</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {qaStatus === "idle" && (
                <button
                  onClick={handleStartQa}
                  className="w-full btn-primary flex items-center justify-center space-x-2.5 py-3.5 cursor-pointer mt-4"
                >
                  <Play size={16} fill="white" />
                  <span>Run Quality Checks</span>
                </button>
              )}
            </div>
          </div>

          {/* CARD 2: DevOps Metrics (Col Span 1) */}
          <div className="glass-card p-8 flex flex-col justify-between group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">DevOps Live Monitor</h3>
                  <p className="text-xs text-white/40">Edge telemetry simulator</p>
                </div>
              </div>

              {/* Static latency metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/2 rounded-xl p-3 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block font-bold">API Latency</span>
                  <span className="text-2xl font-bold font-display tracking-tight text-white flex items-baseline">
                    {liveLatency}
                    <span className="text-xs font-sans text-white/40 ml-0.5">ms</span>
                  </span>
                </div>
                <div className="bg-white/2 rounded-xl p-3 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block font-bold">Node Scale</span>
                  <button
                    onClick={toggleScale}
                    className="text-xs font-bold uppercase tracking-wider mt-1 px-2.5 py-1 rounded bg-brand-orange/10 hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-all cursor-pointer focus-visible:outline-2"
                  >
                    {metricsScale === "standard" ? "Standard load" : "High scale"}
                  </button>
                </div>
              </div>

              {/* Dynamic SVG Graph */}
              <div className="h-24 bg-white/2 rounded-xl border border-white/5 relative flex items-end p-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#E8421A"
                    strokeWidth="1.5"
                    points={chartData.map((val, idx) => `${idx * 16.6},${40 - (val / 100) * 40}`).join(" ")}
                  />
                </svg>
              </div>
            </div>

            {/* Rolling server logs */}
            <div className="mt-6 relative z-10 bg-black/35 rounded-xl p-4 border border-white/5 font-mono text-[9px] text-white/40 space-y-1">
              <span className="text-[8px] uppercase tracking-widest text-brand-orange/70 font-bold block mb-1">
                Syslog Output
              </span>
              {rollingLogs.map((log, idx) => (
                <div key={idx} className="truncate">
                  {idx === 0 ? <span className="text-brand-orange mr-1">&gt;</span> : <span className="mr-1"> </span>}
                  <span className={idx === 0 ? "text-white/60" : "text-white/30"}>{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 3: AI Stack Selector (Col Span 1) */}
          <div className="glass-card p-8 flex flex-col justify-between group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Stack Configurator</h3>
                  <p className="text-xs text-white/40">Select architecture blueprints</p>
                </div>
              </div>

              {/* Selector buttons */}
              <div className="flex space-x-1.5 mb-6 bg-white/2 p-1.5 rounded-xl border border-white/5">
                {(["saas", "ecommerce", "ai_platform"] as StackType[]).map((type) => (
                  <button
                    key={type}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStack(type);
                    }}
                    className={`flex-1 text-[9px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-all cursor-pointer ${
                      selectedStack === type
                        ? "bg-brand-orange text-white shadow-lg"
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {type.replace("_", " ")}
                  </button>
                ))}
              </div>

              {/* Blueprint details */}
              <h4 className="text-sm font-bold text-white mb-1.5">{STACK_BLUEPRINTS[selectedStack].title}</h4>
              <p className="text-[10px] text-white/50 leading-relaxed mb-4">
                {STACK_BLUEPRINTS[selectedStack].desc}
              </p>

              {/* Blueprint node graph */}
              <div className="space-y-2">
                {STACK_BLUEPRINTS[selectedStack].nodes.map((node, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 rounded-lg border bg-white/2 hover:bg-white/5 transition-colors ${node.color}`}
                  >
                    <div className="flex items-center space-x-2">
                      {node.icon}
                      <span className="font-bold text-white font-mono text-[10px]">{node.name}</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-wider text-white/35 font-bold">{node.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4: Global Edge Routing Mesh (Col Span 2) */}
          <div className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Global Edge Grid</h3>
                  <p className="text-xs text-white/40">Multi-region deployment and packet routing map</p>
                </div>
              </div>
            </div>

            {/* World Mesh representation */}
            <div className="flex-1 min-h-[220px] bg-black/20 border border-white/5 rounded-2xl relative overflow-hidden p-4 flex items-center justify-center z-10 select-none">
              {/* Mesh background grid lines */}
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

              {/* Server Nodes */}
              {edgeNodes.map((node) => {
                const isActive = activeNode === node.name;
                return (
                  <div
                    key={node.name}
                    style={{ left: node.x, top: node.y }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveNode(node.name);
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer pulse */}
                      <span
                        className={`absolute inline-flex h-8 w-8 rounded-full bg-brand-orange opacity-40 transition-transform ${
                          isActive ? "scale-125 animate-ping" : "scale-100"
                        }`}
                      ></span>
                      {/* Node core */}
                      <div
                        className={`relative w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive ? "bg-brand-orange scale-125" : "bg-zinc-800 hover:bg-zinc-700"
                        }`}
                      >
                        <MapPin className="w-2 h-2 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Tooltip Overlay inside widget */}
              <AnimatePresence mode="wait">
                {activeNode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-4 left-4 right-4 glass px-4 py-3 rounded-xl border border-white/10 flex items-center justify-between backdrop-blur-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{activeNode} Edge Server</h4>
                        <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">
                          Active Ingress: {edgeNodes.find((n) => n.name === activeNode)?.load}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider font-mono block">
                        Latency response
                      </span>
                      <span className="text-xs text-white/70 font-mono font-bold">
                        {edgeNodes.find((n) => n.name === activeNode)?.lat}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BionicOperationsHub;
