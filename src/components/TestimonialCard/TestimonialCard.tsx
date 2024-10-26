import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

interface cardProps {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

export default function TestimonialCard({
  text,
  imageSrc,
  name,
  username,
}: cardProps) {
  return (
    <article className={styles.card}>
      <p>{text}</p>
      <div className={styles.card__info}>
        <Image
          width={40}
          height={40}
          src={imageSrc}
          alt={`${username}'s image`}
          className={styles.card__img}
        />
        <div className={styles.card__names}>
          <span className={styles.card__name}>{name}</span>
          <span>{username}</span>
        </div>
      </div>
    </article>
  );
}
