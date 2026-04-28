// @ts-nocheck
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, FileText, ArrowRight } from 'lucide-react';
import HealthcareImage from '../../../assets/generated/healthcare_portal_render_1773750748161.png';

const Healthcare = () => {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-white text-slate-800">
      
      <div className="container-custom relative z-10">
        
        {/* Soft, Human-centric Hero */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-32 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left"
          >
            <div className="bg-blue-50 text-blue-600 px-3 md:px-4 py-1.5 rounded-full inline-flex items-center font-bold text-xs md:text-sm mb-4 md:mb-6">
              <HeartPulse className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Digital Health & Wellness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-4 md:mb-6 tracking-tight font-display">
              Technology that <span className="text-blue-600">cares.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              We design HIPAA-compliant patient experiences and robust clinical operational tools that put human wellbeing at the center of innovation.
            </p>
            <button className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-600/20 flex items-center mx-auto lg:mx-0">
              Explore Healthcare IT <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <img 
              src={(HealthcareImage as any).src || HealthcareImage} 
              alt="Sociodigit Healthcare Solutions Portal" 
              className="rounded-[2rem] md:rounded-[3rem] shadow-2xl object-cover w-full h-[350px] md:h-[500px]"
            />
          </motion.div>
        </div>

        {/* Soft Card Grid for Solutions */}
        <div className="mb-16 md:mb-24 px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 font-display">Solutions for the care continuum</h2>
            <p className="text-base md:text-lg text-slate-500">Secure, accessible, and interoperable systems designed for providers, patients, and insurers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Telehealth Platforms",
                desc: "Secure video consultation portals with integrated scheduling, e-prescribing, and remote patient monitoring capabilities.",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: FileText,
                title: "EMR / EHR Integrations",
                desc: "Seamless data exchange using HL7/FHIR standards to ensure clinical data is accurate and available at the point of care.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Activity,
                title: "Patient Engagement Apps",
                desc: "Intuitive, accessible mobile applications that empower patients to manage their health journey and communicate with care teams.",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${sol.color}`}>
                  <sol.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 font-display">{sol.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Healthcare;
