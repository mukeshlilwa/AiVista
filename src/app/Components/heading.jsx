'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedHeading = () => {
  const headingRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start earlier and fill faster
      const adjustedHeight = windowHeight * 1.4; // Start filling when heading is lower
      const rawProgress = 1 - rect.top / adjustedHeight;
      const normalizedProgress = Math.max(0, Math.min(1.3, rawProgress * 1.5)); // Fill faster
      setScrollProgress(normalizedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Style for scroll clipping
  const getClipStyle = () => {
    const clipWidth = scrollProgress * 100;
    return {
      clipPath: `inset(0 ${100 - clipWidth}% 0 0)`,
      WebkitClipPath: `inset(0 ${100 - clipWidth}% 0 0)`,
      transition: 'clip-path 0.3s ease-out',
      color: '#00A8A8', // fill color
    };
  };

  return (
    <div className="py-24 pt-2 px-4 bg-black">
      <div
        ref={headingRef}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* Heading */}
        <div className="relative mb-2">
          <h2 className="text-5xl md:text-7xl font-bold tracking-widest text-gray-800 uppercase font-[Questrial]">
            Services
          </h2>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-widest absolute top-0 left-0 uppercase font-[Questrial]"
            style={getClipStyle()}
          >
            Services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeading;
