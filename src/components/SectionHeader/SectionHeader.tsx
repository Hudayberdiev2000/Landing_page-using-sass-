import Tag from '../Tag/Tag';
import styles from './SectionHeader.module.scss';

interface headerProps {
  tagLabel: string;
  heading: string;
  description: string;
}

export default function SectionHeader({
  tagLabel,
  heading,
  description,
}: headerProps) {
  return (
    <header className={styles.header}>
      <Tag text={tagLabel} />
      <h2 className={styles.header__heading}>{heading}</h2>
      <p className={styles.header__description}>{description}</p>
    </header>
  );
}
