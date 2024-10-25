import styles from './Tag.module.scss';

export default function Tag({ text }: { text: string }) {
  return <div className={styles.tag}>{text}</div>;
}
