import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
    >
      <img
        src="https://placehold.co/150x150/E0F2F1/004D40?text=Profile"
        alt="Profile"
        className="h-28 w-28 sm:h-32 sm:w-32 rounded-full ring-2 ring-cyan-400/60 shadow-[0_0_40px_rgba(0,191,255,0.35)]"
      />
      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
        Your Name Here
      </h2>
      <p className="mt-1 text-cyan-200/80 text-sm sm:text-base">
        Developer | Creator | Tech Enthusiast
      </p>
    </motion.div>
  );
};

export default Profile;
