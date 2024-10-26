import Button from '../Button/Button';
import CheckIcon from '@/assets/check.svg';
import styles from './PricingCard.module.scss';

interface cardProps {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export default function PricingCard({
  title,
  monthlyPrice,
  buttonText,
  popular,
  inverse,
  features,
}: cardProps) {
  return (
    <article
      className={`${styles.card} ${styles[`card--${inverse ? 'inverse' : ''}`]}`}
    >
      <div className={styles.card__header}>
        <div className={styles.card__title}>{title}</div>
        {popular && <div className={styles.card__popular}>Most Popular</div>}
      </div>
      <div>
        <span className={styles.card__price}>${monthlyPrice}</span>
        <span className={styles.card__title}>/monthly</span>
      </div>

      <Button fullWidth type={`${inverse ? 'inverse' : 'primary'}`}>
        {buttonText}
      </Button>

      <ul className={styles.card__features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.card__feature}>
            <CheckIcon height={24} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
