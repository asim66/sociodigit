// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS } from '../../data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI', 'SEO', 'SaaS', 'DevOps', 'QA Automation', 'Cloud', 'Strategy'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

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
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[16/10] bg-surface border border-primary/5">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      width="600"
                      height="400"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest text-secondary">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-primary/40 font-bold mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2 text-secondary" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-2 text-secondary" />
                      {post.author.name}
                    </div>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-primary/60 mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center font-bold text-secondary">
                    <span>Read Article</span>
                    <ChevronRight size={20} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
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
