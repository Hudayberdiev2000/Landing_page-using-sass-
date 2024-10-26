import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import styles from './Header.module.scss';

export default function HeroSection() {
  return (
    <header className={styles.header}>
      <Banner />
      <Navbar />
    </header>
  );
}
