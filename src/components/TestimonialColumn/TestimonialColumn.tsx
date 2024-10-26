import TestimonialCard from '../TestimonialCard/TestimonialCard';
import styles from './TestimonialColumn.module.scss';

interface columnProps {
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  className?: string;
}

export default function TestimonialColumn({
  testimonials = [],
  className,
}: columnProps) {
  return (
    <ul className={`${styles.column} ${className}`}>
      {testimonials.map((testimonial, index) => (
        <li key={index}>
          <TestimonialCard {...testimonial} />
        </li>
      ))}
    </ul>
  );
}
