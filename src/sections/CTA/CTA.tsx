import MainContainer from '@/components/MainContainer/MainContainer';
import styles from './CTA.module.scss';
import Button from '@/components/Button/Button';
import RightArrow from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className={styles.cta}>
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
          <Image
            src={starImage}
            alt='Star Image'
            width={362}
            height={362}
            className={`${styles['cta__star-img']} ${styles['cta__img']}`}
          />
          <Image
            src={springImage}
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
