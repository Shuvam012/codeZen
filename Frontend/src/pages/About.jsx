import React from 'react';
import { Target, Zap, Shield, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            Established 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Built for the <span className="text-blue-600">Next Gen</span> of Developers.
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            CodeZen is a specialized assessment platform designed to bridge the gap between 
            theoretical knowledge and interview readiness.
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="max-w-6xl mx-auto -mt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col justify-end min-h-[400px] shadow-2xl shadow-blue-200">
            <h2 className="text-3xl font-black mb-4">Our Vision</h2>
            <p className="text-blue-100 font-medium leading-relaxed">
              To become the world's most trusted companion for developers, helping millions 
              land their dream roles at top-tier tech companies.
            </p>
          </div>
          <div className="bg-white rounded-[3rem] p-12 border border-slate-200 flex flex-col justify-end min-h-[400px]">
            <h2 className="text-3xl font-black text-slate-900 mb-4">The Platform</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              From automated grading to real-time leaderboards, every feature in CodeZen 
              is built to motivate and challenge.
            </p>
          </div>
        </div>

        {/* 3. Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PillarCard 
            icon={<Target size={28} />} 
            title="Accuracy" 
            text="High-quality, curated questions that reflect modern tech stacks." 
          />
          <PillarCard 
            icon={<Zap size={28} />} 
            title="Speed" 
            text="Optimized for fast learning and instant feedback cycles." 
          />
          <PillarCard 
            icon={<Shield size={28} />} 
            title="Trust" 
            text="Transparent scoring and zero-compromise data privacy." 
          />
          <PillarCard 
            icon={<Rocket size={28} />} 
            title="Growth" 
            text="Tools that scale with your skills, from Junior to Architect." 
          />
        </div>
      </section>
    </div>
  );
};

const PillarCard = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-black text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{text}</p>
  </div>
);

export default About;