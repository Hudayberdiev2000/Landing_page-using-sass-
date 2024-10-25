import styles from './FeatureCard.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import RightArrow from '@/assets/arrow-right.svg';

interface cardProps {
  iconUrl: string;
  heading: string;
  description: string;
}

export default function FeatureCard({
  iconUrl,
  heading,
  description,
}: cardProps) {
  return (
    <article className={styles.feature}>
      <Image src={iconUrl} alt='Card Icon' width={24} height={24} />
      <h3 className={styles.feature__heading}>{heading}</h3>
      <p>{description}</p>
      <Button type='text'>
        <span>Learn more</span>
        <RightArrow style={{ width: '20px' }} />
      </Button>
    </article>
  );
}
