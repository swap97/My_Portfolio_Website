import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Home, Briefcase, Code2, Trophy, Code, GraduationCap, Mail, Sun, Moon } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Code2, label: 'Projects', href: '#projects' },
    { icon: Trophy, label: 'Impact', href: '#achievements' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[90]"
        style={{ scaleX }}
      />

      {/* Floating Bottom Nav for Mobile, Sidebar/HUD for Desktop */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] md:bottom-auto md:top-1/2 md:right-8 md:left-auto md:-translate-y-1/2 md:translate-x-0">
        <div className="flex md:flex-col items-center justify-center p-2 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none shadow-2xl">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="p-3 md:p-4 text-white/40 hover:text-cyan-400 transition-all hover:scale-110 group relative"
            >
              <item.icon size={20} />
              <span className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded-none opacity-0 invisible md:group-hover:visible md:group-hover:opacity-100 transition-all uppercase tracking-wider">
                {item.label}
              </span>
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 md:p-4 text-white/40 hover:text-cyan-400 transition-all hover:scale-110 group relative"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};
