import MainContainer from '@/components/MainContainer/MainContainer';
import styles from './Testimonials.module.scss';
import Tag from '@/components/Tag/Tag';
import { testimonials } from '../../../data';
import TestimonialColumn from '@/components/TestimonialColumn/TestimonialColumn';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <MainContainer className={styles.testimonials__container}>
        <Tag text='Testimonials' />
        <h2 className={styles.testimonials__heading}>What our users say</h2>

        <div className={styles.testimonials__cards}>
          <TestimonialColumn
            duration={22}
            testimonials={testimonials.slice(0, 3)}
          />
          <div className={styles['testimonials__second-column']}>
            <TestimonialColumn
              duration={19}
              testimonials={testimonials.slice(3, 6)}
            />
          </div>
          <div className={styles['testimonials__third-column']}>
            <TestimonialColumn
              duration={18}
              testimonials={testimonials.slice(6, 9)}
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
