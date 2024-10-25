import styles from './Button.module.scss';

interface buttonProps {
  type?: 'primary' | 'text';
  children: React.ReactNode;
}

export default function Button({ type = 'primary', children }: buttonProps) {
  return (
    <button className={`${styles.button} ${styles[`button--${type}`]}`}>
      {children}
    </button>
  );
}
