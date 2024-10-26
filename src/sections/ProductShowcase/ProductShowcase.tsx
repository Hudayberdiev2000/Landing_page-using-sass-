'use client';

import MainContainer from '@/components/MainContainer/MainContainer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import styles from './ProductShowcase.module.scss';
import FeatureList from '@/components/FeatureList/FeatureList';
import tubeImage from '@/assets/tube.png';
import pyramidImage from '@/assets/pyramid.png';
import { features } from '../../../data';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className={styles.showcase}>
      <MainContainer>
        <SectionHeader
          tagLabel='Boost your productivity'
          heading='A more effective way to track progress'
          description='Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.'
        />
        <div className={styles.showcase__images}>
          <Image
            src={productImage}
            alt='Product Image'
            className={styles['showcase__product-image']}
          />
          <motion.img
            style={{ translateY }}
            src={tubeImage.src}
            alt='Tube Image'
            width={248}
            height={248}
            className={styles['showcase__tube-image']}
          />
          <motion.img
            style={{ translateY }}
            src={pyramidImage.src}
            alt='Pyramid Image'
            width={262}
            height={262}
            className={styles['showcase__pyramid-image']}
          />
        </div>
        <FeatureList features={features} />
      </MainContainer>
    </section>
  );
}
