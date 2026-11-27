"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, 
  Check, CheckCircle2, AlertTriangle, Lightbulb, HelpCircle, 
  MapPin, Phone, MessageSquare, Sparkles, ExternalLink, 
  ChevronRight, List, Shield, Zap
} from 'lucide-react';
import { BlogPost } from '../../../data/blogPosts';

interface BlogPostArticleProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostArticle({ post, relatedPosts }: BlogPostArticleProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  // Calculate read time if not provided
  const wordCount = post.content.join(' ').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 180)) + ' min read';

  // Extract all H2 headings for Table of Contents
  const headings = post.content
    .filter(block => block.startsWith('## '))
    .map(block => {
      const text = block.replace(/^## /, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return { text, id };
    });

  // Track scroll progress and active heading
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check which heading is in view
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.getBoundingClientRect().top <= 180) {
          setActiveHeadingId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Helper to render inline markdown (bold & links)
  function renderInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      if (match[2] && match[3]) {
        const linkText = match[2];
        const linkUrl = match[3];
        const isInternal = linkUrl.startsWith('/') || linkUrl.includes('sociodigit.in');
        const href = linkUrl.replace('https://sociodigit.in', '') || linkUrl;
        parts.push(
          <Link
            key={match.index}
            href={href.startsWith('/') ? href : linkUrl}
            className="text-secondary font-semibold hover:underline decoration-secondary/50 underline-offset-4"
            {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {linkText}
          </Link>
        );
      } else if (match[4]) {
        parts.push(
          <strong key={match.index} className="font-bold text-white tracking-wide">
            {match[4]}
          </strong>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  // Helper to render content blocks
  function renderBlock(block: string, idx: number) {
    // 1. Image
    const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      const alt = imgMatch[1];
      const src = imgMatch[2];
      return (
        <figure key={idx} className="my-10 overflow-hidden rounded-3xl border border-white/10 bg-surface/50 shadow-2xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover max-h-[500px]"
            loading="lazy"
          />
          {alt && (
            <figcaption className="p-3 text-center text-xs text-white/50 border-t border-white/5 bg-black/20">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    }

    // 2. Alert / Callout Box (> [!WARNING] or > ⚠️ or > 💡 or > **Key facts**)
    if (block.startsWith('> ') || block.includes('**Key facts**') || block.includes('**Key facts:**')) {
      const cleanBlock = block.replace(/^> /, '');
      const isWarning = cleanBlock.includes('Red Flag') || cleanBlock.includes('WARNING') || cleanBlock.includes('⚠️');
      const isTip = cleanBlock.includes('Pro-Tip') || cleanBlock.includes('💡') || cleanBlock.includes('NOTE');
      const isFacts = cleanBlock.includes('Key facts');

      return (
        <div 
          key={idx} 
          className={`my-8 p-6 md:p-8 rounded-3xl border transition-all ${
            isWarning 
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-200' 
              : isTip 
              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-200'
              : 'bg-gradient-to-br from-brand-orange/15 via-white/[0.03] to-transparent border-brand-orange/30 text-white'
          }`}
        >
          <div className="flex items-center space-x-2.5 mb-3 font-bold text-sm tracking-wider uppercase">
            {isWarning ? (
              <>
                <AlertTriangle size={18} className="text-rose-400 shrink-0" />
                <span className="text-rose-400">Critical Red Flag Alert</span>
              </>
            ) : isTip ? (
              <>
                <Lightbulb size={18} className="text-cyan-400 shrink-0" />
                <span className="text-cyan-400">Expert Strategy Tip</span>
              </>
            ) : isFacts ? (
              <>
                <Sparkles size={18} className="text-brand-orange shrink-0" />
                <span className="text-brand-orange">Key Takeaways & Quick Facts</span>
              </>
            ) : (
              <>
                <Sparkles size={18} className="text-brand-orange shrink-0" />
                <span className="text-brand-orange">Important Takeaway</span>
              </>
            )}
          </div>
          <div className="space-y-2 text-base md:text-lg leading-relaxed text-white/90">
            {cleanBlock.split('\n').map((line, li) => {
              const cleanLine = line.trim();
              if (cleanLine.startsWith('- ')) {
                return (
                  <div key={li} className="flex items-start gap-2.5 py-1">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                    <span>{renderInline(cleanLine.replace(/^- /, ''))}</span>
                  </div>
                );
              }
              if (cleanLine.startsWith('**Key facts') || cleanLine === '') return null;
              return <p key={li}>{renderInline(cleanLine)}</p>;
            })}
          </div>
        </div>
      );
    }

    // 3. Heading 2: ## ...
    if (block.startsWith('## ')) {
      const text = block.replace(/^## /, '').trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return (
        <h2 
          key={idx} 
          id={id}
          className="scroll-mt-32 text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-white mt-14 mb-6 pt-8 border-t border-white/10 flex items-center group"
        >
          <span>{renderInline(text)}</span>
        </h2>
      );
    }

    // 4. Heading 3: ### ...
    if (block.startsWith('### ')) {
      const text = block.replace(/^### /, '').trim();
      const isFaq = text.includes('?') || text.toLowerCase().startsWith('how') || text.toLowerCase().startsWith('what') || text.toLowerCase().startsWith('can') || text.toLowerCase().startsWith('do');
      return (
        <h3 
          key={idx} 
          className={`text-xl md:text-2xl font-display font-bold mt-8 mb-3 flex items-center gap-2 ${
            isFaq ? 'text-amber-300' : 'text-white/95'
          }`}
        >
          {isFaq && <HelpCircle size={18} className="text-amber-400 shrink-0" />}
          <span>{renderInline(text)}</span>
        </h3>
      );
    }

    // 5. Markdown Table: rows with | ... |
    if (block.includes('|') && block.split('\n').filter(r => r.trim().startsWith('|')).length > 1) {
      const rows = block.split('\n').map(r => r.trim()).filter(r => r.startsWith('|') && r.endsWith('|'));
      const headerRow = rows[0]?.split('|').map(c => c.trim()).filter(Boolean);
      const bodyRows = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
      return (
        <div key={idx} className="my-10 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
          <table className="w-full text-left text-sm md:text-base border-collapse">
            <thead className="bg-white/5 text-white font-mono uppercase text-xs border-b border-white/10">
              <tr>
                {headerRow?.map((h, i) => (
                  <th key={i} className="py-4 px-5 font-bold tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {bodyRows.map((r, ri) => (
                <tr key={ri} className="hover:bg-white/[0.03] transition-colors">
                  {r.map((cell, ci) => (
                    <td key={ci} className="py-3.5 px-5">
                      {ci === 0 ? (
                        <span className="font-semibold text-white">{renderInline(cell)}</span>
                      ) : (
                        renderInline(cell)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // 6. Unordered list of lines starting with -
    if (block.includes('\n- ') || block.startsWith('- ')) {
      const lines = block.split('\n');
      const headerLine = !lines[0].startsWith('- ') ? lines[0] : null;
      const items = lines.filter(l => l.trim().startsWith('- '));
      return (
        <div key={idx} className="my-6 space-y-3">
          {headerLine && (
            <p className="text-lg md:text-xl text-white/90 font-medium">
              {renderInline(headerLine)}
            </p>
          )}
          <div className="grid gap-2.5">
            {items.map((item, li) => (
              <div 
                key={li} 
                className="flex items-start text-base md:text-lg text-white/80 p-3 rounded-xl bg-white/[0.015] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                  <Check size={14} />
                </div>
                <div className="flex-1 leading-relaxed">
                  {renderInline(item.replace(/^- /, ''))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 7. Normal paragraph
    return (
      <p key={idx} className="text-lg md:text-xl text-white/80 leading-relaxed font-normal">
        {renderInline(block)}
      </p>
    );
  }

  return (
    <>
      {/* ── TOP READING PROGRESS BAR ── */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-secondary to-emerald-400 z-50 origin-left transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <article className="pt-28 pb-24 bg-space-blue text-white selection:bg-brand-orange selection:text-white min-h-screen">
        
        {/* ── HERO HEADER ── */}
        <section className="section-padding bg-gradient-to-b from-surface/60 to-transparent border-b border-white/5 relative overflow-hidden">
          <div className="container-custom max-w-5xl mx-auto relative z-10">
            
            {/* Top Bar Navigation & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-bold text-white/60 hover:text-brand-orange transition-colors"
              >
                <ArrowLeft size={14} className="mr-2" /> Back to Insights
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} className="text-brand-orange" />
                      <span>Share Guide</span>
                    </>
                  )}
                </button>

                <Link
                  href="/free-seo-audit"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors shadow-lg shadow-brand-orange/20"
                >
                  <Sparkles size={14} />
                  <span>Free SEO Audit</span>
                </Link>
              </div>
            </div>

            {/* Category & Read Time Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-block px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-xs font-bold uppercase tracking-widest text-secondary">
                {post.category}
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60">
                <Clock size={13} className="text-brand-orange" />
                <span>{readTime}</span>
              </div>
              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                <Shield size={12} />
                <span>2026 Verified Market Guide</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight tracking-tight text-white">
              {post.title}
            </h1>

            {/* Excerpt Subtitle */}
            <p className="text-lg md:text-2xl text-white/70 leading-relaxed mb-8 max-w-4xl">
              {post.excerpt}
            </p>

            {/* Author & Publishing Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 font-medium pt-6 border-t border-white/10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm mr-2.5 border border-secondary/30">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-white">{post.author.name}</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="text-xs text-white/50">{post.author.role}</span>
                </div>
              </div>
              <div className="flex items-center text-xs md:text-sm">
                <Calendar size={15} className="mr-2 text-brand-orange" />
                <span>{post.date}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── 2-COLUMN MAIN CONTENT & STICKY SIDEBAR ── */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* ── LEFT COLUMN: MAIN ARTICLE (8 cols) ── */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Render Article Blocks */}
                <div className="space-y-6">
                  {post.content.map((block, idx) => {
                    // Inject mid-article Free SEO Audit CTA after the 4th H2 section
                    const isMidpoint = idx === Math.floor(post.content.length / 2);
                    return (
                      <React.Fragment key={idx}>
                        {renderBlock(block, idx)}
                        {isMidpoint && (
                          <div className="my-12 p-8 rounded-3xl bg-gradient-to-r from-brand-orange/20 via-surface to-brand-orange/10 border border-brand-orange/40 text-center space-y-4 shadow-2xl">
                            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
                              <Sparkles size={14} />
                              <span>Free Instant Analysis</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                              Is Your Website Missing Out on Local Bhubaneswar Leads?
                            </h3>
                            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                              Run a free 60-second technical & local search audit on your domain. Uncover broken meta tags, slow Core Web Vitals, and missing Google Map signals.
                            </p>
                            <div className="pt-2 flex flex-wrap justify-center gap-3">
                              <Link
                                href="/free-seo-audit"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-orange/25"
                              >
                                <span>Audit My Website for Free</span>
                                <ArrowRight size={16} />
                              </Link>
                              <a
                                href="https://wa.me/919886001422?text=Hi%20Sociodigit%2C%20I%20want%20a%20local%20SEO%20consultation%20for%20my%20Bhubaneswar%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-sm transition-all border border-white/10"
                              >
                                <MessageSquare size={16} className="text-emerald-400" />
                                <span>WhatsApp Consultation</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Author Bio Box */}
                <div className="mt-16 p-8 glass rounded-3xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-secondary border border-secondary/30 flex items-center justify-center font-bold text-2xl shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-1 text-white">
                      Published by {post.author.name}
                    </h4>
                    <p className="text-brand-orange text-sm mb-3 font-semibold">
                      {post.author.role}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Engineering data-driven organic search architectures, Google Business Profile dominance, and conversion pipelines for forward-thinking businesses across Odisha and global markets.
                    </p>
                  </div>
                </div>

              </div>

              {/* ── RIGHT COLUMN: STICKY SIDEBAR (4 cols) ── */}
              <aside className="lg:col-span-4 space-y-8 sticky top-28">
                
                {/* Table of Contents Widget */}
                {headings.length > 0 && (
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 shadow-xl backdrop-blur-md">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-secondary mb-4 pb-3 border-b border-white/5">
                      <List size={16} />
                      <span>Table of Contents</span>
                    </div>
                    <nav className="space-y-2 text-xs max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                      {headings.map((h, i) => {
                        const isActive = activeHeadingId === h.id;
                        return (
                          <a
                            key={i}
                            href={`#${h.id}`}
                            className={`block py-1.5 px-3 rounded-lg transition-all leading-snug ${
                              isActive 
                                ? 'bg-secondary/15 text-secondary font-bold border-l-2 border-secondary' 
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {h.text}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Consultation / Conversion Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-orange/20 via-surface to-brand-orange/5 border border-brand-orange/30 shadow-2xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white leading-tight">
                    Dominate Local Searches in Bhubaneswar
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Our local SEO framework has delivered 18+ Top-3 Google Map rankings and +1,040% organic growth for Odisha brands.
                  </p>
                  <div className="space-y-2 pt-2">
                    <a
                      href="https://wa.me/919886001422?text=Hi%20Sociodigit%2C%20I%20want%20to%20discuss%20SEO%20services%20for%20my%20business%20in%20Bhubaneswar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare size={14} />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition-all border border-white/10"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Related High-Intent Hubs */}
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Explore Related Solutions</div>
                  <Link 
                    href="/seo-agency-bhubaneswar" 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-xs text-white/80 hover:text-secondary transition-all group"
                  >
                    <span>SEO Agency Bhubaneswar</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/digital-marketing-agency-bhubaneswar" 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-xs text-white/80 hover:text-secondary transition-all group"
                  >
                    <span>Digital Marketing Bhubaneswar</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/case-studies/kedia-dental-care" 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-xs text-white/80 hover:text-secondary transition-all group"
                  >
                    <span>Kedia Dental Care Case Study</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/free-seo-audit" 
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 text-xs text-white/80 hover:text-secondary transition-all group"
                  >
                    <span>Free Speed & SEO Audit Tool</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </aside>

            </div>

            {/* ── RELATED ARTICLES GRID ── */}
            <div className="mt-28 pt-16 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white">Related Insights</h3>
                  <p className="text-sm text-white/60">More engineering and search strategies from the Sociodigit team.</p>
                </div>
                <Link href="/blog" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
                  <span>View All Articles</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block p-6 glass rounded-2xl border border-white/5 hover:border-secondary/40 transition-all duration-300 shadow-xl"
                  >
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-lg mb-3 text-white group-hover:text-secondary transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

      </article>
    </>
  );
}
