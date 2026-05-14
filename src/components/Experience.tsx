import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, Activity, Trophy } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 font-mono">
              Professional Journey
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Experience
            </h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-6 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 font-mono">Total Impact</span>
              <span className="text-2xl font-bold text-white tracking-tight">2+ Years</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-white/40 font-mono">Status</span>
              <span className="text-sm font-medium text-green-400">Ready for hire</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {resumeData.work.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group overflow-hidden rounded-none border transition-all duration-500 relative ${
                expandedIdx === idx 
                ? 'bg-white/5 border-white/20' 
                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {expandedIdx === idx && (
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 z-20" />
              )}
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start md:items-center space-x-6">
                  <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase size={22} className={expandedIdx === idx ? 'text-cyan-400' : ''} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{work.position}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-white/40 text-xs font-mono uppercase tracking-widest">
                      <span className="flex items-center space-x-1">
                        <span className="text-cyan-400 font-bold">{work.company}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>2022 — 2024</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{work.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`p-2 bg-white/5 rounded-none text-[10px] font-mono border border-white/10 ${expandedIdx === idx ? 'text-cyan-400 border-cyan-400/20' : 'text-white/20'}`}>
                  EXP_0{idx + 1}
                </div>
              </button>

              <AnimatePresence>
                {expandedIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 md:px-12 md:pb-12 border-t border-white/5 pt-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                          <h5 className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 mb-6 font-bold">Role Description & Highlights</h5>
                          <div className="space-y-4">
                            {work.highlights.map((bullet, i) => (
                              <div key={i} className="flex items-start space-x-4">
                                <div className="mt-2 w-1 h-1 bg-cyan-400 shrink-0" />
                                <p className="text-white/70 text-sm leading-relaxed">{bullet}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-none p-6 border border-white/5">
                          <h5 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">Core Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Communication", "Teamwork", "Management"].map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 font-mono text-center">
          Measuring Impact
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter text-center mb-20">
          Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-20 border-y border-white/5 divide-y md:divide-y-0 md:divide-x border-white/5">
          {[
            { label: "Research Focus", val: "Deep Learning" },
            { label: "Cloud Ecosystems", val: "Azure & GCP" },
            { label: "Education", val: "MS in AI (UK)" }
          ].map((stat, i) => (
            <div key={i} className="py-8 md:py-12 md:px-12 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono mb-2">{stat.label}</span>
              <span className="text-xl font-bold text-white tracking-tight">{stat.val}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                <Activity size={80} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6">
                  <Trophy size={20} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
