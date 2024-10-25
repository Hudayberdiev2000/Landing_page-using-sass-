import MainContainer from '@/components/MainContainer/MainContainer';
import styles from './Hero.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import cogImage from '../../assets/cog.png';
import Tag from '@/components/Tag/Tag';
import cylinderImage from '../../assets/cylinder.png';
import noodleImage from '../../assets/noodle.png';
import RightArrow from '@/assets/arrow-right.svg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <MainContainer className={styles.hero__container}>
        <div className={styles['hero__text-box']}>
          <div>
            <Tag text='Version 2.0 is here' />
          </div>
          <h1 className={styles.hero__heading}>Pathway to productivity</h1>
          <p className={styles.hero__description}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className={styles.hero__buttons}>
            <Button>Get for free</Button>
            <Button type='text'>
              <span>Learn more</span>
              <RightArrow style={{ width: '20px' }} />
            </Button>
          </div>
        </div>

        <div className={styles['hero__img-wrapper']}>
          <Image
            className={styles['hero__cog-img']}
            src={cogImage}
            alt='Cog Image'
          />
          <Image
            height={220}
            width={220}
            src={cylinderImage}
            alt='Cylinder Image'
            className={styles['hero__cylinder-img']}
          />

          <Image
            src={noodleImage}
            width={230}
            height={230}
            alt='Noodle Image'
            className={styles['hero__noodle-img']}
          />
        </div>
      </MainContainer>
    </section>
  );
}
