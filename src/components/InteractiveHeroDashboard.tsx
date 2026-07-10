"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Cloud,
  Activity,
  FileCode,
  Terminal,
  Cpu,
  Server,
  Database,
  ArrowRight,
  Check
} from "lucide-react";

type TabType = "editor" | "infra" | "metrics";

const InteractiveHeroDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>("editor");
  const [editorFile, setEditorFile] = useState<"App.tsx" | "globals.css">("App.tsx");

  // DevOps simulated ping items
  const [infraStep, setInfraStep] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setInfraStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Analytics simulated logs
  const [logs, setLogs] = useState<Array<{ method: string; route: string; status: number; lat: string }>>([
    { method: "GET", route: "/", status: 200, lat: "14ms" },
    { method: "POST", route: "/api/consulting", status: 201, lat: "28ms" },
    { method: "GET", route: "/blog", status: 200, lat: "18ms" }
  ]);

  useEffect(() => {
    if (activeTab !== "metrics") return;
    const interval = setInterval(() => {
      const routes = ["/services", "/contact", "/api/scale", "/industries/saas", "/"];
      const methods = ["GET", "GET", "POST", "GET", "GET"];
      const statuses = [200, 200, 201, 200, 200];
      const selectedIdx = Math.floor(Math.random() * routes.length);
      const latency = `${Math.floor(Math.random() * 20) + 10}ms`;

      setLogs((prev) => [
        { method: methods[selectedIdx], route: routes[selectedIdx], status: statuses[selectedIdx], lat: latency },
        prev[0],
        prev[1]
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="glass rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 relative w-full h-[400px] flex flex-col justify-between shadow-2xl select-none">
      {/* Top Bar / Tabs */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
        {/* Mock window buttons */}
        <div className="flex space-x-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
        </div>

        {/* Tab Selectors */}
        <div className="flex space-x-1 bg-white/5 p-1 rounded-xl border border-white/5">
          {[
            { id: "editor", label: "Editor", icon: <Code className="w-3.5 h-3.5" /> },
            { id: "infra", label: "Infrastructure", icon: <Cloud className="w-3.5 h-3.5" /> },
            { id: "metrics", label: "Analytics", icon: <Activity className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white/10 text-white border border-white/5"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-hidden relative font-mono text-xs">
        <AnimatePresence mode="wait">
          {/* TAB 1: CODE EDITOR */}
          {activeTab === "editor" && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="h-full flex flex-col"
            >
              {/* File tabs */}
              <div className="flex space-x-1.5 mb-4 border-b border-white/5 pb-2">
                <button
                  onClick={() => setEditorFile("App.tsx")}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer ${
                    editorFile === "App.tsx" ? "bg-white/5 text-white" : "text-white/40"
                  }`}
                >
                  <FileCode className="w-3 h-3 text-brand-orange" />
                  <span>App.tsx</span>
                </button>
                <button
                  onClick={() => setEditorFile("globals.css")}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer ${
                    editorFile === "globals.css" ? "bg-white/5 text-white" : "text-white/40"
                  }`}
                >
                  <FileCode className="w-3 h-3 text-blue-400" />
                  <span>globals.css</span>
                </button>
              </div>

              {/* Code Panel */}
              <div className="flex-1 bg-black/20 rounded-xl p-4 overflow-y-auto leading-relaxed border border-white/5 select-text selection:bg-brand-orange/20">
                {editorFile === "App.tsx" ? (
                  <pre className="text-white/50">
                    <code>
                      <span className="text-brand-orange">import</span> React <span className="text-brand-orange">from</span> <span className="text-emerald-400">&apos;react&apos;</span>;{"\n"}
                      <span className="text-brand-orange">import</span> {"{"} motion {"}"} <span className="text-brand-orange">from</span> <span className="text-emerald-400">&apos;motion/react&apos;</span>;{"\n\n"}
                      <span className="text-brand-orange">export default function</span> <span className="text-blue-400">SociodigitApp</span>() {"{"}{"\n"}
                      {"  "}return ({"\n"}
                      {"    "}&lt;<span className="text-blue-400">motion.div</span> animate={"{{"} opacity: <span className="text-purple-400">1</span> {"}}"}&gt;{"\n"}
                      {"      "}&lt;<span className="text-blue-400">h1</span>&gt;Engineering the Future&lt;/<span className="text-blue-400">h1</span>&gt;{"\n"}
                      {"    "}&lt;/<span className="text-blue-400">motion.div</span>&gt;{"\n"}
                      {"  "});{"\n"}
                      {"}"}
                    </code>
                  </pre>
                ) : (
                  <pre className="text-white/50">
                    <code>
                      <span className="text-purple-400">@theme</span> {"{"}{"\n"}
                      {"  "}--color-brand-orange: <span className="text-brand-orange">#E8421A</span>;{"\n"}
                      {"  "}--color-space-blue: <span className="text-blue-400">#050505</span>;{"\n"}
                      {"  "}--font-sans: <span className="text-emerald-400">&quot;Outfit&quot;</span>, sans-serif;{"\n"}
                      {"}"}{"\n\n"}
                      <span className="text-blue-400">.glass-card</span> {"{"}{"\n"}
                      {"  "}background: <span className="text-brand-orange">rgba(255, 255, 255, 0.03)</span>;{"\n"}
                      {"  "}border: <span className="text-purple-400">1px</span> solid <span className="text-brand-orange">rgba(255, 255, 255, 0.08)</span>;{"\n"}
                      {"  "}border-radius: <span className="text-purple-400">2rem</span>;{"\n"}
                      {"}"}
                    </code>
                  </pre>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 2: CLOUD INFRASTRUCTURE */}
          {activeTab === "infra" && (
            <motion.div
              key="infra"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="h-full flex flex-col justify-between py-2"
            >
              <div className="mb-4">
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">Global Server Network</span>
                <p className="text-[11px] text-white/50 mt-1 leading-normal font-sans">
                  Edge routing dynamically checks nodes for latency metrics and pushes packages to target containers.
                </p>
              </div>

              {/* Node diagram */}
              <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl p-4 flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

                {/* Node 1: Client */}
                <div className="flex flex-col items-center z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    infraStep === 0 ? "border-brand-orange bg-brand-orange/10 scale-105 text-white" : "border-white/10 text-white/40"
                  }`}>
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] mt-2 text-white/60 font-bold uppercase tracking-wide">Client</span>
                </div>

                <ArrowRight className={`w-4 h-4 text-white/10 ${infraStep === 0 ? "text-brand-orange animate-pulse" : ""}`} />

                {/* Node 2: Cloudflare Edge */}
                <div className="flex flex-col items-center z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    infraStep === 1 ? "border-brand-orange bg-brand-orange/10 scale-105 text-white" : "border-white/10 text-white/40"
                  }`}>
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] mt-2 text-white/60 font-bold uppercase tracking-wide">Edge Host</span>
                </div>

                <ArrowRight className={`w-4 h-4 text-white/10 ${infraStep === 1 ? "text-brand-orange animate-pulse" : ""}`} />

                {/* Node 3: Database */}
                <div className="flex flex-col items-center z-10">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    infraStep === 2 || infraStep === 3 ? "border-brand-orange bg-brand-orange/10 scale-105 text-white" : "border-white/10 text-white/40"
                  }`}>
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] mt-2 text-white/60 font-bold uppercase tracking-wide">Neon DB</span>
                </div>
              </div>

              {/* Ping metric stats */}
              <div className="mt-4 flex items-center justify-between text-[10px] text-white/40 border-t border-white/5 pt-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-sans">All Edge clusters functional</span>
                </div>
                <div className="font-mono text-white/60">
                  Avg Latency: <span className="text-brand-orange font-bold">14ms</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ANALYTICS METRICS */}
          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="mb-4">
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">Ingress Stream Logs</span>
              </div>

              {/* Logs Container */}
              <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl p-4 overflow-y-hidden flex flex-col space-y-2 justify-center shadow-inner">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2 rounded-xl border border-white/5 bg-white/[0.01] text-[10px] ${
                      idx === 0 ? "border-brand-orange/30 text-white" : "opacity-40 text-white/70"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 font-mono">
                      <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded text-[8px]">
                        {log.status}
                      </span>
                      <span className="font-bold text-white/80">{log.method}</span>
                      <span className="text-white/50">{log.route}</span>
                    </div>
                    <span className="font-mono text-white/40">{log.lat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveHeroDashboard;
