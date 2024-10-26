'use client';

import MainContainer from '@/components/MainContainer/MainContainer';
import styles from './CTA.module.scss';
import Button from '@/components/Button/Button';
import RightArrow from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className={styles.cta}>
      <MainContainer>
        <div className={styles.cta__container}>
          <h2 className={styles.cta__heading}>Sign up for free today</h2>
          <p className={styles.cta__text}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className={styles.cta__buttons}>
            <Button>Get for free</Button>
            <Button type='text'>
              <span>Learn more</span>
              <RightArrow height={20} />
            </Button>
          </div>
          <motion.img
            style={{ translateY }}
            src={starImage.src}
            alt='Star Image'
            width={362}
            height={362}
            className={`${styles['cta__star-img']} ${styles['cta__img']}`}
          />
          <motion.img
            src={springImage.src}
            style={{ translateY }}
            alt='Spring Image'
            width={362}
            height={362}
            className={`${styles['cta__spring-img']} ${styles['cta__img']}`}
          />
        </div>
      </MainContainer>
    </section>
  );
}
