"use client";

import React, { useState, useEffect } from "react";
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
  MapPin,
  Settings
} from "lucide-react";

type StackType = "saas" | "ecommerce" | "ai_platform";

interface TechNode {
  name: string;
  role: string;
  icon: React.ReactNode;
}

const STACK_BLUEPRINTS: Record<StackType, { title: string; desc: string; nodes: TechNode[] }> = {
  saas: {
    title: "SaaS Platform Stack",
    desc: "Optimized for multi-tenant scalability, real-time sync, and millisecond routing.",
    nodes: [
      { name: "Next.js 15 SSR", role: "Frontend & Edge routing", icon: <Globe className="w-4 h-4 text-white/50" /> },
      { name: "FastAPI / Node", role: "Microservice APIs", icon: <Cpu className="w-4 h-4 text-white/50" /> },
      { name: "PostgreSQL (Neon)", role: "Serverless Database", icon: <Database className="w-4 h-4 text-white/50" /> },
      { name: "AWS ECS & Fargate", role: "Scalable Containers", icon: <Cloud className="w-4 h-4 text-white/50" /> }
    ]
  },
  ecommerce: {
    title: "Headless E-Commerce Stack",
    desc: "Engineered for maximum Core Web Vitals, dynamic cart transactions, and global SEO.",
    nodes: [
      { name: "Next.js Commerce", role: "Static Generation (ISR)", icon: <Globe className="w-4 h-4 text-white/50" /> },
      { name: "Stripe API & Webhooks", role: "Secure Checkout Core", icon: <Layers className="w-4 h-4 text-white/50" /> },
      { name: "Upstash Redis Cache", role: "Edge Session Store", icon: <Database className="w-4 h-4 text-white/50" /> },
      { name: "Cloudflare Workers", role: "Edge Personalization", icon: <Cloud className="w-4 h-4 text-white/50" /> }
    ]
  },
  ai_platform: {
    title: "Cognitive AI Engine Stack",
    desc: "Built for heavy compute pipeline workloads, real-time agent token streaming, and low inference lag.",
    nodes: [
      { name: "React Flow UI", role: "Visual Workflow Studio", icon: <Globe className="w-4 h-4 text-white/50" /> },
      { name: "Python / FastAPI", role: "LLM Orchestrator Engine", icon: <Cpu className="w-4 h-4 text-white/50" /> },
      { name: "Pinecone Vector DB", role: "Semantic Search / RAG Store", icon: <Database className="w-4 h-4 text-white/50" /> },
      { name: "AWS Bedrock / GPU cluster", role: "Model Inference Host", icon: <Cloud className="w-4 h-4 text-white/50" /> }
    ]
  }
};

const BionicOperationsHub = () => {
  // --- Widget 1: QA Runner ---
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
    e.stopPropagation();
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
      const base = metricsScale === "standard" ? 30 : 65;
      const variation = Math.floor(Math.random() * 10) - 5;
      const val = Math.max(10, base + variation);
      setLiveLatency(val);
      setChartData((prev) => [...prev.slice(1), val]);

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
    <section className="section-padding bg-transparent relative overflow-hidden border-y border-white/5">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4 block">
            Telemetry & Diagnostics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Engineered for <span className="gradient-text">Predictable</span> Operations
          </h2>
          <p className="text-lg text-white/60">
            Monitor real-time simulated telemetry logs, quality benchmarks, and multi-region server routing parameters.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,_auto)]">
          {/* CARD 1: Automated QA Runner */}
          <div className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden flex flex-col group cursor-default">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/5 text-white/80 rounded-xl flex items-center justify-center border border-white/10">
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
                  className="px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10 text-xs font-medium text-white/50 hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-orange"
                >
                  <RefreshCw className="w-3 h-3 inline mr-1 animate-spin-slow" /> Reset
                </button>
              )}
            </div>

            {/* Simulated Terminal Screen */}
            <div className="flex-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 font-mono text-sm relative z-10 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                {qaStatus === "idle" && (
                  <div className="h-full flex flex-col items-center justify-center py-10 text-center">
                    <p className="text-white/40 text-xs max-w-xs">
                      Launch headless browser checks to simulate Playwright and Lighthouse audit tasks.
                    </p>
                  </div>
                )}

                {qaStatus !== "idle" &&
                  qaLogs.map((log, index) => {
                    const isVisible = qaStep >= index;
                    const isRunning = qaStep === index;
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-300 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center space-x-2.5">
                            {isRunning ? (
                              <RefreshCw className="w-3.5 h-3.5 text-brand-orange animate-spin shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            )}
                            <span className={isRunning ? "text-brand-orange" : "text-white/80"}>
                              {log.text}
                            </span>
                          </div>
                          <span className="text-[10px] text-white/35 font-bold uppercase tracking-wider">
                            {isRunning ? "Running" : "Pass"}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                {qaStatus === "complete" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-white/80 text-xs flex items-center justify-between mt-6"
                  >
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-[9px] text-brand-orange mb-0.5">Automation Report</h4>
                      <p className="text-white/50 text-[10px]">
                        All browser check suites verified successfully. Edge Cache warmed.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-bold text-lg text-emerald-400 block">100%</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {qaStatus === "idle" && (
                <button
                  onClick={handleStartQa}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3.5 cursor-pointer mt-4"
                >
                  <Play size={14} fill="white" />
                  <span>Run Quality Checks</span>
                </button>
              )}
            </div>
          </div>

          {/* CARD 2: DevOps Metrics */}
          <div className="glass-card p-8 flex flex-col justify-between group cursor-default">
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/5 text-white/80 rounded-xl flex items-center justify-center border border-white/10">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">DevOps Live Monitor</h3>
                  <p className="text-xs text-white/40">Edge telemetry simulator</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.01] rounded-xl p-3 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block font-bold">API Latency</span>
                  <span className="text-2xl font-bold font-display tracking-tight text-white flex items-baseline">
                    {liveLatency}
                    <span className="text-xs font-sans text-white/40 ml-0.5">ms</span>
                  </span>
                </div>
                <div className="bg-white/[0.01] rounded-xl p-3 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block font-bold">Node Scale</span>
                  <button
                    onClick={toggleScale}
                    className="text-xs font-bold uppercase tracking-wider mt-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-all cursor-pointer focus-visible:outline-2"
                  >
                    {metricsScale === "standard" ? "Standard load" : "High scale"}
                  </button>
                </div>
              </div>

              {/* Dynamic SVG Graph */}
              <div className="h-24 bg-white/[0.01] rounded-xl border border-white/5 relative flex items-end p-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#E8421A"
                    strokeWidth="1.2"
                    points={chartData.map((val, idx) => `${idx * 16.6},${40 - (val / 100) * 40}`).join(" ")}
                  />
                </svg>
              </div>
            </div>

            {/* Syslog Output */}
            <div className="mt-6 relative z-10 bg-white/[0.01] rounded-xl p-4 border border-white/5 font-mono text-[9px] text-white/40 space-y-1">
              <span className="text-[8px] uppercase tracking-widest text-brand-orange/80 font-bold block mb-1">
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

          {/* CARD 3: AI Stack Configurator */}
          <div className="glass-card p-8 flex flex-col justify-between group cursor-default">
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/5 text-white/80 rounded-xl flex items-center justify-center border border-white/10">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Stack Configurator</h3>
                  <p className="text-xs text-white/40">Select architecture blueprints</p>
                </div>
              </div>

              <div className="flex space-x-1.5 mb-6 bg-white/[0.01] p-1.5 rounded-xl border border-white/5">
                {(["saas", "ecommerce", "ai_platform"] as StackType[]).map((type) => (
                  <button
                    key={type}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStack(type);
                    }}
                    className={`flex-1 text-[9px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-all cursor-pointer ${
                      selectedStack === type
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {type.replace("_", " ")}
                  </button>
                ))}
              </div>

              <h4 className="text-sm font-bold text-white mb-1.5">{STACK_BLUEPRINTS[selectedStack].title}</h4>
              <p className="text-[10px] text-white/50 leading-relaxed mb-4 font-sans">
                {STACK_BLUEPRINTS[selectedStack].desc}
              </p>

              <div className="space-y-2">
                {STACK_BLUEPRINTS[selectedStack].nodes.map((node, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 transition-colors text-[10px]"
                  >
                    <div className="flex items-center space-x-2">
                      {node.icon}
                      <span className="font-bold text-white/80 font-mono">{node.name}</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-wider text-white/30 font-bold">{node.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4: Global Edge Routing Mesh */}
          <div className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group cursor-default">
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/5 text-white/80 rounded-xl flex items-center justify-center border border-white/10">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Global Edge Grid</h3>
                  <p className="text-xs text-white/40">Multi-region deployment and packet routing map</p>
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-[220px] bg-white/[0.01] border border-white/5 rounded-2xl relative overflow-hidden p-4 flex items-center justify-center z-10 select-none">
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

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
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute inline-flex h-4 w-4 rounded-full bg-brand-orange opacity-40 ${
                          isActive ? "animate-pulse" : "opacity-0"
                        }`}
                      ></span>
                      <div
                        className={`relative w-2.5 h-2.5 rounded-full border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive ? "bg-brand-orange scale-110" : "bg-zinc-800 hover:bg-zinc-700"
                        }`}
                      >
                        <MapPin className="w-1.5 h-1.5 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Tooltip Overlay */}
              <AnimatePresence mode="wait">
                {activeNode && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-4 right-4 glass px-4 py-3 rounded-xl border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <div>
                        <h4 className="text-[10px] font-bold text-white">{activeNode} Node</h4>
                        <p className="text-[8px] text-white/40 uppercase tracking-widest font-mono">
                          Ingress: {edgeNodes.find((n) => n.name === activeNode)?.load}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] text-brand-orange font-bold uppercase tracking-wider font-mono block">
                        Latency
                      </span>
                      <span className="text-[10px] text-white/60 font-mono font-bold">
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
