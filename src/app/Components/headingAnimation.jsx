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
      className="w-full bg-black overflow-hidden flex justify-center"
    >
      <motion.span
        initial={{ y: '50%', opacity: 1 }}   // bottom half outside container
        whileInView={{ y: '0%', opacity: 1 }} // slide up after container grows
        transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }} // Trigger after container
        viewport={{ once: false, amount: 0.5 }}
        className="text-8xl font-semibold leading-[40px] text-white text-center font-[Questrial] p-4"
      >
        Services
      </motion.span>
    </motion.div>
  )
}

export default HeadingAnimation
