import React from 'react';
import Hero3D from './components/Hero3D';
import Profile from './components/Profile';
import LinksList from './components/LinksList';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f1a] text-white font-inter relative overflow-hidden">
      {/* Animated background: subtle particle-like gradient pulse */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* 3D hero */}
      <Hero3D />

      {/* Main card */}
      <main className="relative z-10 -mt-10 pb-16 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 px-6 sm:px-10 py-8"
        >
          <Profile />
          <LinksList />

          {/* Footer note */}
          <p className="mt-8 text-center text-xs text-cyan-200/60">
            Crafted in Flames Blue — sleek, modern, and vibrant.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
