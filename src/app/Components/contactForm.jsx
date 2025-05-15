'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const QuoteForm = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <div className="w-full overflow-x-hidden bg-black">
      <div className="w-full px-4 sm:px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Image Section (static) */}
          <div className="hidden lg:block relative w-full h-full overflow-hidden border border-gray-700/50 rounded-l-xl lg:rounded-r-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <Image
              src="/images/Stylish Professional Engrossed in Technology.png"
              alt="Professional services"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute bottom-8 left-0 right-0 text-center z-20 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-2xl">
                Innovate With Precision
              </h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-md mx-auto leading-relaxed drop-shadow-md">
                Leverage our expertise to transform your ideas into exceptional digital solutions
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative" ref={containerRef}>
            <div className="relative bg-[#121212] p-6 md:p-10 h-full shadow-xl overflow-hidden rounded-r-xl lg:rounded-l-none">
              <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#7AE8FF] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />

              <div className="relative z-10 max-w-lg mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Stay Updated
                </h2>

                <form className="space-y-4">
                  {[
                    <div key="name" className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        placeholder="Your First Name*"
                        required
                        className="flex-1 px-4 py-3 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="text"
                        placeholder="Your Last Name*"
                        required
                        className="flex-1 px-4 py-3 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>,

                    <input
                      key="email"
                      type="email"
                      placeholder="Email Address*"
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />,

                    <div key="phone-postal" className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number*"
                        required
                        className="flex-1 px-4 py-3 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="text"
                        placeholder="Postal Code*"
                        required
                        className="flex-1 px-4 py-3 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>,

                    <textarea
                      key="message"
                      placeholder="Your Message*"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md resize-none bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />,

                    <div key="button" className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-200"
                      >
                        Get A Quote
                      </button>
                    </div>,
                  ].map((field, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      variants={fieldVariants}
                    >
                      {field}
                    </motion.div>
                  ))}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
