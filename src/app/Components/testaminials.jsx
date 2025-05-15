"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "From start to finish, the team was professional, creative, and dedicated. Highly recommend their services. Exceptional quality, timely delivery, and outstanding support – we couldn’t have asked for more!",
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Exceptional quality, timely delivery, and outstanding support – we couldn’t have asked for more! Exceptional quality, timely delivery, and outstanding support – we couldn’t have asked for more and many more!",
    name: "Jane Smith",
    role: "Founder, StartUpX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // used for framer-motion remount

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAnimateKey((prev) => prev + 1);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAnimateKey((prev) => prev + 1);
  };

  const { quote, name, role, image } = testimonials[current];

  return (
    <section className="py-12 px-4 md:px-12 xl:px-40 2xl:px-60 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">WHAT PEOPLE ARE SAYING</h2>
        <p className="text-sm text-gray-400 mb-1">
          Hear from our valued users about their experiences and how our solutions have made a difference in their lives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 xl:gap-20 items-center">
        {/* Left Column */}
        <div className="max-w-xl">
          {/* Animated Cyan Line with Framer Motion */}
          <div className="relative w-20 sm:w-32 mb-4 h-1 overflow-hidden bg-gray-400">
            <motion.div
              key={animateKey}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-[#00FFFF]"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-medium mb-3">
            From Our <br />
            <span className="text-[#00FFFF] font-semibold">Community</span>
          </h1>
          <p className="mb-6 text-sm sm:text-base text-gray-300">
            Empowering connections and sharing success stories from our community.
          </p>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="max-w-xl">
          <svg
            className="w-10 h-10 text-[#00FFFF] mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A4.99 4.99 0 0 0 2 11v5a1 1 0 0 0 1 1h5v-6H4.83A3.001 3.001 0 0 1 7.17 6zm10 0A4.99 4.99 0 0 0 12 11v5a1 1 0 0 0 1 1h5v-6h-3.17A3.001 3.001 0 0 1 17.17 6z" />
          </svg>

          <p className="text-white text-base sm:text-lg mb-6 leading-relaxed">{quote}</p>

          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={name}
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover ring-2 ring-[#00FFFF]"
            />
            <div>
              <p className="font-semibold text-white text-sm sm:text-base">{name}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
