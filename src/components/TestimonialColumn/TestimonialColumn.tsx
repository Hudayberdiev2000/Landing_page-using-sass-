'use client';

import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import styles from './TestimonialColumn.module.scss';
import { motion } from 'framer-motion';

interface columnProps {
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  className?: string;
  duration?: number;
}

export default function TestimonialColumn({
  testimonials = [],
  className,
  duration = 10,
}: columnProps) {
  return (
    <motion.ul
      animate={{ translateY: '-50%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: duration,
        ease: 'linear',
      }}
      className={`${styles.column} ${className}`}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </motion.ul>
  );
}
