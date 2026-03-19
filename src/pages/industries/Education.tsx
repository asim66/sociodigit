import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, GraduationCap, Users, Sparkles, ArrowRight } from 'lucide-react';

const Education = () => {
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
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> EdTech Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 md:mb-8 font-display">
              Empowering the <br className="md:hidden" /><span className="relative">
                <span className="relative z-10 text-white">next generation.</span>
                <span className="absolute bottom-1 left-0 w-full h-1/2 bg-amber-500 -z-10 -rotate-2"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-indigo-800/80 mb-8 md:mb-12 font-medium max-w-2xl mx-auto">
              We design immersive digital learning environments, LMS platforms, and student success portals that make education accessible and engaging.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 shadow-xl shadow-indigo-600/30 flex items-center mx-auto">
              Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-3 md:mb-4">The Student Journey</h2>
            <p className="text-lg md:text-xl text-indigo-800/70">End-to-end digital touchpoints for institutions.</p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-8 md:mt-0">
            {/* Timeline Line */}
            <div className="absolute top-[50%] left-0 w-full h-2 bg-indigo-200 -translate-y-1/2 rounded-full hidden lg:block"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6 md:pt-0">
              {[
                { step: "01", icon: Users, title: "Enrollment", desc: "Frictionless admissions flows and student onboarding portals." },
                { step: "02", icon: MonitorPlay, title: "Virtual Classrooms", desc: "Low-latency video streaming and interactive whiteboards." },
                { step: "03", icon: BookOpen, title: "LMS Systems", desc: "Modular curriculum delivery and automated grading algorithms." },
                { step: "04", icon: Sparkles, title: "Alumni Network", desc: "Community platforms fostering lifelong institutional connections." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
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

      </div>
    </div>
  );
};

export default Education;
