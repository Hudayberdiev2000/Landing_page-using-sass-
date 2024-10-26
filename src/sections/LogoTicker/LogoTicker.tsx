'use client';

import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import { motion } from 'framer-motion';

import MainContainer from '@/components/MainContainer/MainContainer';
import Image from 'next/image';
import styles from './LogoTicker.module.scss';

export default function LogoTicker() {
  return (
    <section className={styles.ticker}>
      <MainContainer className={styles.ticker__container}>
        <div className={styles['ticker__logos-wrapper']}>
          <motion.div
            animate={{ translateX: '-50%' }}
            transition={{
              repeatType: 'loop',
              repeat: Infinity,
              ease: 'linear',
              duration: 20,
            }}
            className={styles.ticker__logos}
          >
            <Image src={acmeLogo} alt='Acme Logo' />
            <Image src={quantumLogo} alt='Quantum Logo' />
            <Image src={echoLogo} alt='Echo Valley Logo' />
            <Image src={celestialLogo} alt='Celestial Logo' />
            <Image src={pulseLogo} alt='Pulse Logo' />
            <Image src={apexLogo} alt='Apex Logo' />
          </motion.div>
        </div>
      </MainContainer>
    </section>
  );
}
