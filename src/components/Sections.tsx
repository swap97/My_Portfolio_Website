import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, GraduationCap, Award, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 font-mono">
          Technical Stack
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-20">
          Skills & Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {resumeData.skills.map((group, i) => (
            <div key={i}>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 mb-8 font-bold border-b border-white/5 pb-4">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 rounded-none bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-widest hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 font-mono">
          Academic Timeline
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-20">
          Education
        </h3>

        <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10 ml-4 md:ml-0 md:before:left-1/2 md:before:-translate-x-1/2">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-17px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-none bg-[#050505] border-2 border-cyan-400/20 flex items-center justify-center z-10 transition-colors group-hover:border-cyan-400">
                <GraduationCap size={16} className="text-cyan-400" />
              </div>

              <div className="w-full md:w-[45%] bg-white/[0.03] border border-white/10 p-8 rounded-none backdrop-blur-sm hover:border-cyan-400/30 transition-all group">
                <span className="text-[10px] font-mono text-cyan-400 mb-2 block tracking-[0.2em] font-bold uppercase">{edu.startDate} — {edu.endDate}</span>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{edu.studyType}</h4>
                <p className="text-white/60 mb-4 text-xs font-mono uppercase tracking-widest">{edu.area}</p>
                <div className="flex items-center space-x-2 text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  <span>{edu.institution}</span>
                </div>
              </div>
              <div className="hidden md:block w-0 md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-none p-12 md:p-24 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 font-mono">
            New Project?
          </h2>
          <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-12 uppercase leading-none">
            Let's build <br className="hidden md:block" /> <span className="text-transparent text-stroke">intelligent</span> systems.
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${resumeData.basics.email}`}
              className="w-full md:w-auto px-12 py-5 rounded-none bg-white text-black font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-cyan-400 transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
            >
              <Mail size={16} />
              <span>Contact via Email</span>
            </a>
            <a 
              href={resumeData.basics.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-12 py-5 rounded-none border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-white/5 transition-all"
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between text-white/40 text-[10px] uppercase tracking-[0.3em] font-mono gap-4">
            <span>© 2024 Swapnil Anand Lade</span>
            <div className="flex items-center space-x-8">
              <span>Artificial Intelligence Specialist</span>
              <span>Based in Panvel, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Additional: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-none p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Award className="text-white/40" size={20} />
              <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold font-mono">Certifications</h4>
            </div>
            <div className="space-y-4">
              {resumeData.certificates.map((cert, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <span className="text-sm text-white/60 group-hover:text-cyan-400 transition-colors">{cert.name}</span>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-none p-8">
            <div className="flex items-center space-x-4 mb-8">
              <BookOpen className="text-white/40" size={20} />
              <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold font-mono">Academic Highlights</h4>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                <h5 className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold font-mono">Core Languages</h5>
                <div className="flex flex-wrap gap-4">
                  {["English (Working)", "Marathi (Native)", "Hindi (Native)"].map((lang, i) => (
                    <span key={i} className="text-xs text-white/60 font-medium px-3 py-1 bg-white/5 border border-white/10">{lang}</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed pt-4 border-t border-white/5">
                Constantly staying updated with the latest advancements in AI/ML through online courses, research papers, and industry news.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
