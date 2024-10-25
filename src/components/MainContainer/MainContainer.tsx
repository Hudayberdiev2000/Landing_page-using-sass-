import styles from './MainContainer.module.scss';

interface containerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainContainer({ children, className }: containerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
