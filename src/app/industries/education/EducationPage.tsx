// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, MonitorPlay, GraduationCap, Users, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, 
  Code2, Database, Laptop, Lock, HelpCircle 
} from 'lucide-react';
import Link from 'next/link';

const edtechCapabilities = [
  {
    title: "Custom LMS & Course Delivery",
    desc: "Scalable learning management systems engineered for universities, K-12 networks, and enterprise upskilling programs.",
    features: [
      "Modular SCORM & xAPI content packaging",
      "Automated assessment & grading engines",
      "Real-time student progress telemetry",
      "Interactive video lessons with adaptive bitrate"
    ]
  },
  {
    title: "Live Virtual Classrooms",
    desc: "Ultra-low-latency real-time collaboration platforms with integrated whiteboarding and breakout capabilities.",
    features: [
      "WebRTC video with low bandwidth fallback",
      "Interactive multi-user canvas & whiteboarding",
      "Live polling, Q&A, and attendance tracking",
      "Cloud recording & automated AI transcription"
    ]
  },
  {
    title: "Student Information Systems (SIS)",
    desc: "Centralized administrative portals unifying admissions, course registration, tuition billing, and gradebooks.",
    features: [
      "Automated admissions & onboarding funnels",
      "Tuition payment gateway integrations",
      "Multi-campus role-based access control",
      "State & national compliance reporting"
    ]
  },
  {
    title: "AI-Powered Learning Assistants",
    desc: "Personalized AI tutors and automated feedback systems integrated securely into student workflows.",
    features: [
      "Context-aware AI tutor chatbots",
      "Automated essay & code review assistants",
      "Adaptive learning pathways per student",
      "Plagiarism & AI content detection tools"
    ]
  }
];

const edtechFaqs = [
  {
    q: "How do you ensure FERPA and student data privacy compliance?",
    a: "We engineer all EdTech platforms following strict FERPA, GDPR, and COPPA data protection standards. All student records are encrypted in transit and at rest with role-based access controls and audited data retention policies."
  },
  {
    q: "Can you integrate our new portal with existing LMS platforms like Canvas or Moodle?",
    a: "Yes. We build custom LTI (Learning Tools Interoperability) integrations, REST APIs, and Single Sign-On (SSO via Google Workspace, Microsoft Entra ID, and SAML) to connect seamlessly with legacy academic systems."
  },
  {
    q: "How does the platform handle high concurrency during live lectures and exams?",
    a: "Our cloud architecture leverages auto-scaling container clusters on AWS or GCP with Redis caching and CDN edge distribution, effortlessly supporting tens of thousands of simultaneous students without latency spikes."
  }
];

const Education = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-indigo-50 text-indigo-950 relative overflow-hidden">
      {/* Playful geometric bg elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-60 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        {/* Academic Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold mb-6 md:mb-8 text-sm md:text-base">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> EdTech & Digital Learning Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 md:mb-8 font-display">
              Empowering the <br className="md:hidden" />
              <span className="relative">
                <span className="relative z-10 text-white">next generation.</span>
                <span className="absolute bottom-1 left-0 w-full h-1/2 bg-amber-500 -z-10 -rotate-2"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-indigo-800/80 mb-8 md:mb-12 font-medium max-w-2xl mx-auto">
              We engineer immersive digital learning environments, custom LMS platforms, and student success portals that make education scalable, interactive, and globally accessible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-indigo-600/30 flex items-center">
                <span>Discuss Your EdTech Project</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services/software-development" className="bg-white hover:bg-indigo-100/50 text-indigo-900 border border-indigo-200 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-colors flex items-center">
                Explore Custom Software
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="mb-20 md:mb-32 px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-3 md:mb-4">The Complete Academic Lifecycle</h2>
            <p className="text-lg md:text-xl text-indigo-800/70">Connecting every digital touchpoint from discovery to graduation.</p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-8 md:mt-0">
            <div className="absolute top-[50%] left-0 w-full h-2 bg-indigo-200 -translate-y-1/2 rounded-full hidden lg:block"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6 md:pt-0">
              {[
                { step: "01", icon: Users, title: "Admissions & SIS", desc: "Frictionless online applications, ID verification, and enrollment portals." },
                { step: "02", icon: MonitorPlay, title: "Virtual Classrooms", desc: "Sub-second WebRTC video streaming, live breakout rooms, and polls." },
                { step: "03", icon: BookOpen, title: "LMS Systems", desc: "Personalized curriculum delivery, quizzes, and automated grading." },
                { step: "04", icon: Sparkles, title: "Alumni & Careers", desc: "Career discovery hubs and lifelong institutional alumni networking." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-indigo-100/50 relative border border-indigo-50 z-10 hover:-translate-y-2 transition-transform"
                >
                  <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-amber-400 text-indigo-950 rounded-full flex items-center justify-center font-black text-lg md:text-xl shadow-lg border-4 border-indigo-50">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mt-2 md:mt-4 mx-auto">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-center mb-2 md:mb-3 text-indigo-950">{item.title}</h3>
                  <p className="text-center text-indigo-800/70 font-medium leading-relaxed text-sm md:text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-indigo-950 mb-4">Core EdTech Engineering Capabilities</h2>
            <p className="text-lg text-indigo-800/80">From custom software architecture to secure data infrastructure, we build academic software that scales.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {edtechCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg shadow-indigo-100/40 border border-indigo-100/80 hover:border-indigo-300 transition-all">
                <h3 className="text-2xl font-bold text-indigo-950 mb-3">{cap.title}</h3>
                <p className="text-indigo-800/70 mb-6 leading-relaxed">{cap.desc}</p>
                <ul className="space-y-2.5">
                  {cap.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm font-medium text-indigo-900/80">
                      <CheckCircle2 size={16} className="text-indigo-600 mr-2.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-indigo-950 mb-3">Frequently Asked Questions</h2>
            <p className="text-indigo-800/70">Key details on architecture, privacy standards, and integration timelines.</p>
          </div>

          <div className="space-y-4">
            {edtechFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-indigo-950 hover:text-indigo-600 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight size={20} className={`transform transition-transform ${openFaq === idx ? 'rotate-90 text-indigo-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-indigo-800/80 leading-relaxed text-sm md:text-base border-t border-indigo-50 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-indigo-900 text-white p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Modernize Your Learning Platform?</h3>
            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              Partner with Sociodigit's engineering team to build scalable, accessible, and high-performance EdTech platforms tailored to your institutional goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold px-8 py-4 rounded-full transition-transform hover:scale-105">
                Book Free EdTech Consultation
              </Link>
              <Link href="/services/qa-automation" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-colors">
                Explore QA & Testing Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
