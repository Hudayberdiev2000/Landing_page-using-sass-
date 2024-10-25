import RightArrow from '../../assets/arrow-right.svg';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.banner__text}>
        This page is included in a free SaaS Website Kit.
      </p>
      <div className={styles.banner__action}>
        <span>View the complete Kit</span>
        <RightArrow className={styles.banner__icon} />
      </div>
    </div>
  );
}
