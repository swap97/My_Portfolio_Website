import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-none border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">
              Available for AI/ML Opportunities
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-[0.85] uppercase mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {resumeData.basics.name.split(' ')[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-transparent text-stroke"
              >
                {resumeData.basics.name.split(' ').slice(1).join(' ')}
              </motion.span>
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light">
            AI Graduate specializing in <span className="text-white">Neural Networks</span> and machine learning.
          </p>

          <div className="flex flex-wrap gap-6 mb-20">
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] rounded-none hover:bg-cyan-400 transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
            >
              View Experience
            </button>
            <button
              onClick={() => window.print()}
              className="px-10 py-5 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] rounded-none hover:bg-white/5 transition-colors"
            >
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/5">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">92%+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold mt-2">Model Accuracy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold mt-2">Certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">2.3yr</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold mt-2">Professional EXP</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
