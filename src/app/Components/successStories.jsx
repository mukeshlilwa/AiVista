"use client";
import React from "react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        {/* First Paragraph */}
        <p className="text-gray-300 text-center">Valued</p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center">Success Stories</h1>

        {/* Second Paragraph */}
        <p className="text-gray-400 text-center">
          We take pride in delivering excellent results for our clients. Explore how we've helped them succeed.
        </p>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[...Array(9)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center py-4 "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={`/images/ss${index + 1}.png`}
                alt={`Success Story ${index + 1}`}
                className="w-auto h-15 "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
