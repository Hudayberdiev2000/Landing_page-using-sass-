import Image from 'next/image';
import styles from './Footer.module.scss';
import logoImage from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import Link from 'next/link';
import MainContainer from '@/components/MainContainer/MainContainer';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <MainContainer className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Image
            src={logoImage}
            alt='Logo image'
            height={40}
            width={40}
            className={styles['footer__logo-img']}
          />
        </div>
        <ul className={styles.footer__pages}>
          <li>
            <Link href='#' className={styles.footer__page}>
              About
            </Link>
          </li>
          <li>
            <Link href='#' className={styles.footer__page}>
              Features
            </Link>
          </li>
          <li>
            <Link href='#' className={styles.footer__page}>
              Customers
            </Link>
          </li>
          <li>
            <Link href='#' className={styles.footer__page}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href='#' className={styles.footer__page}>
              Help
            </Link>
          </li>
          <li>
            <Link href='#' className={styles.footer__page}>
              Careers
            </Link>
          </li>
        </ul>

        <ul className={styles['footer__social-medias']}>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </ul>

        <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </MainContainer>
    </footer>
  );
}
