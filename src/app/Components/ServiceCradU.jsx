'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated Heading with Line Behind
const AnimatedHeading = () => (
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.8 }}
    className="text-white text-6xl md:text-9xl font-bold text-center mb-16 font-[Questrial]"
    
  >
    Services
  </motion.h2>
);


const services = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/icon1.png',
  },
  {
    title: 'Web Development Services',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/card2.svg',
  },
  {
    title: 'UI/UX Design Services',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/card3.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/card4.svg',
  },
  {
    title: 'Data Science & Analytics',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/card5.svg',
  },
  {
    title: 'Cloud Computing Services',
    description: 'Tailored software solutions crafted to fit your unique business needs.',
    icon: '/images/card6.png',
  },
];

const iconColors = [
  'bg-yellow-300 shadow-yellow-300/50',
  'bg-pink-400 shadow-pink-400/50',
  'bg-green-400 shadow-green-400/50',
  'bg-purple-400 shadow-purple-400/50',
  'bg-blue-400 shadow-blue-400/50',
  'bg-red-400 shadow-red-400/50',
];

export default function ServicesSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [gradientOpacity, setGradientOpacity] = useState({ left: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleServices = isMobile ? services.slice(0, 4) : services;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorPosition({ x, y: 0 });

    const width = rect.width;
    const leftOpacity = 1 - x / width;
    const rightOpacity = x / width;

    setGradientOpacity({
      left: leftOpacity,
      right: rightOpacity,
    });
  };

  const handleMouseLeave = () => {
    setGradientOpacity({ left: 0, right: 0 });
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-4 md:px-12 py-20">
      {/* Background Decor */}
      <Image
        src="/images/Ellipse 23.png"
        alt="Circle Decor"
        width={150}
        height={150}
        className="absolute bottom-0 right-0 opacity-20"
      />

      {/* Heading */}
      <AnimatedHeading />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {visibleServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 pb-6 pt-16 shadow-xl hover:shadow-[0_0_30px_#00A8A8] transition-all group"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg relative ${iconColors[index]}`}
              >
                <div className="absolute inset-1 bg-black/60 rounded-full z-0" />
                <Image
                  src={service.icon}
                  alt="icon"
                  width={34}
                  height={34}
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white text-center">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300 mb-6 text-center">
              {service.description}
            </p>

            <div className="mt-4 text-center">
              <p className="text-white text-sm cursor-pointer hover:text-[#00A8A8] transition-colors">
                Read More
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Get Started Button */}
      <div className="mt-16 flex justify-center">
        <button
          className="relative rounded-full flex items-center w-full max-w-xs text-black mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{ opacity: gradientOpacity.left }}
            className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-[#00A8A8] to-transparent blur-sm rounded-full pointer-events-none duration-100"
          />
          <div
            style={{ opacity: gradientOpacity.left }}
            className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-[#00A8A8] to-transparent blur-sm rounded-full pointer-events-none duration-100"
          />
          <div
            style={{ opacity: gradientOpacity.right }}
            className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-[#00A8A8] blur-sm rounded-full pointer-events-none duration-100"
          />
          <div
            style={{ opacity: gradientOpacity.right }}
            className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-[#00A8A8] blur-sm rounded-full pointer-events-none duration-100"
          />

          <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 md:py-2.5 rounded-full overflow-hidden">
            <motion.div
              animate={{ left: `${cursorPosition.x - 102}px` }}
              transition={{ duration: 0.15 }}
              className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none"
            >
              <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#00A8A8_29%,_#00A8A8_48.5%,_#00A8A8_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
            </motion.div>
            <p className="text-lg font-semibold z-10">Get Started</p>
          </div>
        </button>
      </div>
    </section>
  );
}
