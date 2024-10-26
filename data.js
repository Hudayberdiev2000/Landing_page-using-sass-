export const features = [
  {
    id: 1,
    iconUrl: '/assets/feature-icon1.svg',
    heading: 'Integration ecosystem',
    description: 'Track your progress and motivate your efforts everyday.',
  },
  {
    id: 2,
    iconUrl: '/assets/feature-icon2.svg',
    heading: 'Goal setting and tracking',
    description: 'Set and track goals with manageable task breakdowns.',
  },
  {
    id: 3,
    iconUrl: '/assets/feature-icon3.svg',
    heading: 'Secure data encryption',
    description: 'Ensure your data’s safety with top-tier encryption.',
  },
  {
    id: 4,
    iconUrl: '/assets/feature-icon4.svg',
    heading: 'Customizable notifications',
    description: 'Get alerts on tasks and deadlines that matter most.',
  },
];

export const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];
