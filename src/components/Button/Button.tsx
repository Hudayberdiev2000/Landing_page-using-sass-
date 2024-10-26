import styles from './Button.module.scss';

interface buttonProps {
  type?: 'primary' | 'text' | 'inverse';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  type = 'primary',
  children,
  fullWidth,
}: buttonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${type}`]} ${styles[`button--${fullWidth ? 'full-width' : null}`]}`}
    >
      {children}
    </button>
  );
}
