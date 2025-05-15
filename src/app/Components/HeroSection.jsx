'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import SloganSlider from './sloganSlider';

export default function HeroSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  const [gradientOpacity, setGradientOpacity] = useState({ left: 1, right: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorPosition({ x });

    const leftOpacity = Math.max(0, Math.min(1, 1 - x / (rect.width / 2)));
    const rightOpacity = Math.max(0, Math.min(1, (x - rect.width / 2) / (rect.width / 2)));
    setGradientOpacity({ left: leftOpacity, right: rightOpacity });
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setCursorPosition({ x: 0 });
      setGradientOpacity({ left: 1, right: 0 });
      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <section className="relative w-full h-auto min-h-[400px] sm:min-h-[450px] sm:h-[80vh] bg-black overflow-hidden flex items-start sm:items-center justify-center px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-48 text-white">
      {/* Background GIF */}
      <div className="absolute inset-0 -top-16 md:-top-8 z-0">
        <Image
          src="/logos/voice wave (2).gif"
          alt="Background Animation"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-60"
          style={{ position: 'absolute', top: '-30px' }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto pt-10  sm:pt-0  md:py-10 space-y-4 max-sm:space-y-6">
        <SloganSlider />

        <h1 className="text-3xl max-sm:text-[1.9rem] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-tight mb-4 sm:mb-4 font-[Questrial] relative z-30">
          Unlock the future With <span className="text-cyan-400">AI</span>
        </h1>

        <p className="text-sm max-sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 relative z-30 leading-relaxed">
          We turn ambitious concepts into dependable digital realities—seamlessly, swiftly,
          <br className="hidden md:block" />
          and with craftsmanship woven into every step.
        </p>

        {/* Custom Get Started Button */}
        <div className="mt-12 flex justify-center">
  <button
    className="relative rounded-full flex items-center w-full max-w-xs text-black mx-auto"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    <div
      style={{ opacity: gradientOpacity.left }}
      className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-[#66D9D9] to-transparent blur-sm rounded-full pointer-events-none duration-100"
    />
    <div
      style={{ opacity: gradientOpacity.left }}
      className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-[#66D9D9] to-transparent blur-sm rounded-full pointer-events-none duration-100"
    />
    <div
      style={{ opacity: gradientOpacity.right }}
      className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-[#66D9D9] blur-sm rounded-full pointer-events-none duration-100"
    />
    <div
      style={{ opacity: gradientOpacity.right }}
      className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-[#66D9D9] blur-sm rounded-full pointer-events-none duration-100"
    />

    <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 md:py-2.5 rounded-full overflow-hidden">
      <motion.div
        animate={{ left: `${cursorPosition.x - 102}px` }}
        transition={{ duration: 0.15 }}
        className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none"
      >
        <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#66D9D9_29%,_#66D9D9_48.5%,_#66D9D9_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
      </motion.div>
      <p className="text-lg font-semibold z-10">Get Started</p>
    </div>
  </button>
</div>

      </div>
    </section>
  );
}
