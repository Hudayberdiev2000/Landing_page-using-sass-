import Image from 'next/image';
import styles from './NeedCard.module.scss';

interface cardProps {
  imgUrl: string;
  heading: string;
  description: string;
}

export default function NeedCard({ imgUrl, heading, description }: cardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={imgUrl}
        alt='Card Image'
        height={329}
        width={329}
        className={styles.card__img}
      />
      <h3 className={styles.card__heading}>{heading}</h3>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
}
