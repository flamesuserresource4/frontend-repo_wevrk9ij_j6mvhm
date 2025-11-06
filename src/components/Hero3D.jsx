import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[360px] sm:h-[440px] md:h-[520px] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient/overlay to match dark theme and ensure text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/40 to-[#030712]" />

      {/* Title overlay (fades in) */}
      <motion.div
        className="relative z-10 h-full flex items-end justify-center pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,191,255,0.35)]">
            Flames Blue
          </h1>
          <p className="mt-2 text-sm sm:text-base text-cyan-200/80">
            A modern, vibrant, futuristic identity
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
