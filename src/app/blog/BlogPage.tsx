// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import Link from 'next/link';
import AiSeoImage from '../../assets/generated/ai_in_seo_blog_bg_1773808946553.png';
import IsSeoDeadImage from '../../assets/generated/is_seo_dead_blog_bg_1773808964236.png';
import TooMuchAiImage from '../../assets/generated/too_much_ai_risk_blog_bg_1773808981399.png';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI', 'SEO', 'SaaS', 'DevOps', 'QA Automation', 'Cloud', 'Strategy'];

  const posts = [
    {
      title: "AI in SEO: The New Frontier of Organic Growth",
      category: "AI",
      author: "Alex Rivers",
      date: "Mar 18, 2026",
      image: (AiSeoImage as any).src || AiSeoImage,
      excerpt: "Discover how generative AI is shifting the search landscape and how you can leverage it to outrank the competition in the era of SGE."
    },
    {
      title: "Is SEO Dead? Debunking the Myths in the Age of AI",
      category: "SEO",
      author: "Michael Doe",
      date: "Mar 16, 2026",
      image: (IsSeoDeadImage as any).src || IsSeoDeadImage,
      excerpt: "Search is evolving faster than ever. We explore why SEO isn't dying—it's just becoming more sophisticated and human-centric."
    },
    {
      title: "Too Much AI Can Ruin Your Business: The Human Balance",
      category: "Strategy",
      author: "Emma Watson",
      date: "Mar 15, 2026",
      image: (TooMuchAiImage as any).src || TooMuchAiImage,
      excerpt: "Why over-automating your customer experience and core content can lead to brand erosion and decreased user trust."
    },
    {
      title: "DevOps Best Practices for Scaling Startups in 2026",
      category: "DevOps",
      author: "Alex Rivers",
      date: "Mar 12, 2026",
      image: "https://picsum.photos/seed/blog-1/600/400",
      excerpt: "Learn how to build a resilient infrastructure that grows with your user base without breaking the bank."
    },
    {
      title: "Why Playwright is the Future of Automation Testing",
      category: "QA Automation",
      author: "Sarah Chen",
      date: "Mar 10, 2026",
      image: "https://picsum.photos/seed/blog-2/600/400",
      excerpt: "A deep dive into why modern engineering teams are switching to Playwright for their end-to-end testing."
    },
    {
      title: "How Startups Build Scalable SaaS Platforms from Day One",
      category: "SaaS",
      author: "Michael Doe",
      date: "Mar 08, 2026",
      image: "https://picsum.photos/seed/blog-3/600/400",
      excerpt: "Architecture patterns and technology choices that ensure your SaaS can handle the first million users."
    },
    {
      title: "SEO Strategies for Startups: Beyond Keywords",
      category: "SEO",
      author: "Emma Watson",
      date: "Mar 05, 2026",
      image: "https://picsum.photos/seed/blog-4/600/400",
      excerpt: "How to build organic authority and drive high-intent traffic without a massive advertising budget."
    },
    {
      title: "Cloud Architecture Guide: AWS vs GCP vs Azure",
      category: "Cloud",
      author: "David Smith",
      date: "Mar 02, 2026",
      image: "https://picsum.photos/seed/blog-5/600/400",
      excerpt: "A comprehensive comparison of the top cloud providers to help you choose the right one for your product."
    },
    {
      title: "The Role of AI in Modern Software Engineering",
      category: "SaaS",
      author: "Alex Rivers",
      date: "Feb 28, 2026",
      image: "https://picsum.photos/seed/blog-6/600/400",
      excerpt: "How AI tools are changing the way we write, test, and deploy code in 2026."
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-8">
              Our <span className="gradient-text">Insights</span>.
            </h1>
            <p className="text-2xl text-primary/60 leading-relaxed">
              Expert perspectives on software engineering, cloud architecture, and digital growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-secondary text-white shadow-lg shadow-secondary/25' : 'bg-surface text-primary/60 hover:bg-primary/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[16/10]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-primary/40 font-bold mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-2" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-primary/60 mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center font-bold text-secondary">
                  <span>Read Article</span>
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-32 glass p-12 lg:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Stay Ahead of the Curve</h2>
                <p className="text-lg text-primary/60">
                  Get the latest tech insights, engineering guides, and growth strategies delivered to your inbox every week.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-grow px-8 py-4 rounded-2xl bg-white border border-primary/10 focus:border-secondary outline-none transition-all"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
