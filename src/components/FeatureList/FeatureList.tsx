import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeatureList.module.scss';

interface listProps {
  features: {
    id: number;
    iconUrl: string;
    heading: string;
    description: string;
  }[];
}

export default function FeatureList({ features }: listProps) {
  return (
    <ul className={styles.features}>
      {features.map((feature) => (
        <li key={feature.id}>
          <FeatureCard
            iconUrl={feature.iconUrl}
            heading={feature.heading}
            description={feature.description}
          />
        </li>
      ))}
    </ul>
  );
}
