import MainContainer from '@/components/MainContainer/MainContainer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import styles from './ProductShowcase.module.scss';
import FeatureList from '@/components/FeatureList/FeatureList';
import tubeImage from '@/assets/tube.png';
import pyramidImage from '@/assets/pyramid.png';
import { features } from '../../../data';

export default function ProductShowcase() {
  return (
    <section className={styles.showcase}>
      <MainContainer>
        <SectionHeader
          tagLabel='Boost your productivity'
          heading='A more effective way to track progress'
          description='Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.'
        />
        <div className={styles.showcase__images}>
          <Image
            src={productImage}
            alt='Product Image'
            className={styles['showcase__product-image']}
          />
          <Image
            src={tubeImage}
            alt='Tube Image'
            width={248}
            height={248}
            className={styles['showcase__tube-image']}
          />
          <Image
            src={pyramidImage}
            alt='Pyramid Image'
            width={262}
            height={262}
            className={styles['showcase__pyramid-image']}
          />
        </div>
        <FeatureList features={features} />
      </MainContainer>
    </section>
  );
}
