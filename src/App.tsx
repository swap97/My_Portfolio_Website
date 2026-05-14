/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Experience, Achievements } from './components/Experience';
import { Skills, Education, Contact, Additional } from './components/Sections';
import { Projects } from './components/Projects';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <Navigation />
            <AnimatedBackground />
            
            <main className="relative z-10">
              <Hero />
              
              <div id="experience" className="scroll-mt-20">
                <Experience />
              </div>

              <div id="projects" className="scroll-mt-20">
                <Projects />
              </div>

              <div id="achievements" className="scroll-mt-20">
                <Achievements />
              </div>

              <div id="skills" className="scroll-mt-20">
                <Skills />
              </div>

              <div id="education" className="scroll-mt-20">
                <Education />
              </div>

              <Additional />

              <div id="contact" className="scroll-mt-20">
                <Contact />
              </div>
            </main>

            <footer className="py-12 border-t border-white/5 bg-black/40 backdrop-blur-sm text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                Designed & Engineered for Innovation
              </p>
            </footer>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
