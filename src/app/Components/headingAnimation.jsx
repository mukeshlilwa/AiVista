'use client'

import React from 'react'
import { motion } from 'framer-motion'

const HeadingAnimation = () => {
  return (
    <motion.div
      initial={{ height: 20 }}
      whileInView={{ height: 100 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} // Delay height change
      viewport={{ once: false, amount: 0.5 }}
      className="w-full bg-black overflow-hidden flex justify-center items-center min-h-[40px] sm:min-h-[60px] lg:min-h-[100px]"
    >
      <motion.span
        initial={{ y: '50%', opacity: 1 }}   // Start half visible from bottom
        whileInView={{ y: '0%', opacity: 1 }} // Slide up into full view
        transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight sm:leading-[50px] lg:leading-[60px] text-white text-center font-[Questrial] p-4"
      >
        Services
      </motion.span>
    </motion.div>
  )
}

export default HeadingAnimation
