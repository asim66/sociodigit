import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const perks = [
    { icon: <Heart />, title: "Health & Wellness", desc: "Comprehensive health insurance and mental health support for you and your family." },
    { icon: <Zap />, title: "Growth Budget", desc: "Annual budget for courses, conferences, and books to keep your skills sharp." },
    { icon: <Users />, title: "Remote-First", desc: "Work from anywhere in the world. We believe in results, not office hours." },
    { icon: <Code />, title: "Modern Stack", desc: "Work with the latest technologies and contribute to open-source projects." }
  ];

  const jobs = [
    { title: "Senior Full Stack Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
    { title: "DevOps Architect", team: "Infrastructure", location: "Remote", type: "Full-time" },
    { title: "QA Automation Lead", team: "Quality", location: "Remote", type: "Full-time" },
    { title: "Product Designer (UI/UX)", team: "Design", location: "Remote", type: "Full-time" },
    { title: "SEO Strategist", team: "Marketing", location: "Remote", type: "Full-time" }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-surface/50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-8">
              Join the <span className="gradient-text">Mission</span>.
            </h1>
            <p className="text-2xl text-primary/60 leading-relaxed">
              We're looking for passionate engineers, designers, and thinkers to help us build the future of digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Culture</h2>
              <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8">Engineering First, People Always</h3>
              <p className="text-lg text-primary/60 mb-12 leading-relaxed">
                At Sociodigit, we've built a culture where technical excellence is celebrated and personal growth is prioritized. We're a remote-first team that values autonomy, transparency, and high-impact work.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {perks.map((perk, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                      {perk.icon}
                    </div>
                    <h4 className="font-bold mb-2">{perk.title}</h4>
                    <p className="text-sm text-primary/60">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/careers/600/800" 
                alt="Our Culture" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Open Roles</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold">Help Us Build the Future</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="glass p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                <div>
                  <h4 className="text-2xl font-bold mb-2">{job.title}</h4>
                  <div className="flex items-center space-x-6 text-sm font-bold text-primary/40 group-hover:text-white/60 uppercase tracking-widest">
                    <span className="flex items-center"><Briefcase size={14} className="mr-2" /> {job.team}</span>
                    <span className="flex items-center"><MapPin size={14} className="mr-2" /> {job.location}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-2" /> {job.type}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Process</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold">How We Hire</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Application", desc: "Send us your profile and portfolio. We review every single application." },
              { title: "Initial Screen", desc: "A 30-minute chat to learn about your experience and expectations." },
              { title: "Technical Review", desc: "A practical challenge or deep-dive into your past work." },
              { title: "Final Interview", desc: "Meet the team and discuss how you'll make an impact at Sociodigit." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl font-display font-bold shadow-lg shadow-secondary/25">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-primary/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
