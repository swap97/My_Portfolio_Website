import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Cpu, Globe } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 font-mono">
              Research & Build
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">
              Major <span className="text-transparent text-stroke">Projects</span>
            </h3>
          </div>
          <div className="hidden md:block">
             <div className="p-1 bg-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-white/40">
               PROJ_MANIFEST.v1
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 md:p-10 bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 group-hover:border-cyan-400/50 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {idx === 0 ? <Cpu size={20} /> : <Code2 size={20} />}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">0{idx + 1}</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.name}
                </h4>
                
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-3">
                      <div className="mt-2 w-1 h-1 bg-cyan-400 shrink-0" />
                      <span className="text-xs text-white/70 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Inference Strategy: Optimized</span>
                  {(project as any).url && (
                    <a 
                      href={(project as any).url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/40 hover:text-cyan-400 transition-colors text-[10px] uppercase tracking-widest font-bold group/link"
                    >
                      <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">Repository</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
