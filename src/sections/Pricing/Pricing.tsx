import MainContainer from '@/components/MainContainer/MainContainer';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import styles from './Pricing.module.scss';
import PricingCard from '@/components/PricingCard/PricingCard';
import { pricingTiers } from '../../../data';

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <MainContainer className={styles.pricing__container}>
        <SectionHeader
          tagLabel='Boost your productivity'
          heading='A more effective way to track progress'
          description='Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.'
        />

        <ul className={styles.pricing__cards}>
          {pricingTiers.map((pricing, index) => (
            <li key={index}>
              <PricingCard {...pricing} />
            </li>
          ))}
        </ul>
      </MainContainer>
    </section>
  );
}
