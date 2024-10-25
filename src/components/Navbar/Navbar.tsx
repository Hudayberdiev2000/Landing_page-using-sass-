import Image from 'next/image';
import MainContainer from '../MainContainer/MainContainer';
import styles from './Navbar.module.scss';
import logoImage from '@/assets/logosaas.png';
import Link from 'next/link';
import Button from '../Button/Button';
import MenuIcon from '@/assets/menu.svg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <MainContainer className={styles.navbar__container}>
        <Image
          src={logoImage}
          width={40}
          height={40}
          alt='Logo Image'
          priority
        />
        <MenuIcon className={styles['navbar__menu-icon']} />

        <ul className={styles.navbar__menu}>
          <li>
            <Link className={styles.navbar__link} href='#'>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navbar__link} href='#'>
              Features
            </Link>
          </li>
          <li>
            <Link className={styles.navbar__link} href='#'>
              Customers
            </Link>
          </li>
          <li>
            <Link className={styles.navbar__link} href='#'>
              Updates
            </Link>
          </li>
          <li>
            <Link className={styles.navbar__link} href='#'>
              Help
            </Link>
          </li>
          <li>
            <Button>Get for free</Button>
          </li>
        </ul>
      </MainContainer>
    </nav>
  );
}
