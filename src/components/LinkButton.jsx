import React from 'react';

const LinkButton = ({ href = '#', label }) => {
  return (
    <a
      href={href}
      className="group relative w-full"
      target="_blank"
      rel="noreferrer"
    >
      {/* glow */}
      <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-cyan-400/40 to-blue-500/40 blur opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative block w-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 text-center text-base sm:text-lg font-medium text-cyan-50 shadow-inner shadow-black/30 hover:shadow-[0_0_20px_rgba(0,191,255,0.35)] transition-all">
        {label}
      </span>
    </a>
  );
};

export default LinkButton;
