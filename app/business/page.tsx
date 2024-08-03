import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, isExternal = false }) => {
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Link href={href} {...linkProps} className={styles.buttonLink}>
      {children}
    </Link>
  );
};

interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  features: string[];
  targetCustomers: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, imageSrc, alt, features, targetCustomers }) => (
  <div className={styles.serviceItem}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.imageContainer}>
      <Image src={imageSrc} alt={alt} width={600} height={400} className={styles.image} />
    </div>
    <div className={styles.details}>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.subtitle}>Service Features</h3>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3 className={styles.subtitle}>Customers Who Need This Service</h3>
      <ul className={styles.targetCustomers}>
        {targetCustomers.map((customer, index) => (
          <li key={index}>{customer}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function BusinessPage() {
  const services: ServiceItemProps[] = [
    {
      title: 'Consulting & Real-World Test Marketing in Japan',
      description: 'We offer a unique service that combines market entry consulting with practical test marketing using crowdfunding campaigns.',
      imageSrc: '/クラファン.png',
      alt: 'Consulting and Crowdfunding',
      features: [
        'Analysis and selection of products suitable for the Japanese market',
        'Competitor analysis and market positioning strategy development',
        'Practical market testing through crowdfunding campaigns',
        'Real-time market response analysis and feedback collection',
        'Product adjustment advice based on Japanese consumer preferences'
      ],
      targetCustomers: [
        'Foreign companies considering entering the Japanese market',
        'Businesses wanting to gauge market reaction before launching products in Japan',
        'Companies needing effective Japanese market strategy planning',
        'Enterprises looking to raise awareness in Japan through crowdfunding',
        'Businesses aiming to customize products for Japanese consumer needs'
      ]
    },
    {
      title: 'Creating Japanese Landing Pages: Product-Specific Promotion',
      description: 'We create specialized Japanese landing pages for each product, effectively approaching the Japanese customer base.',
      imageSrc: '/LP集.png',
      alt: 'Japanese Landing Page',
      features: [
        'Precise translation and cultural adaptation by native Japanese speakers',
        'UI/UX design aligned with Japanese web design trends',
        'SEO optimization for Japanese search engines',
        'Continuous improvement through A/B testing',
        'Implementation of mobile-first design'
      ],
      targetCustomers: [
        'Foreign companies wanting to promote products to the Japanese market',
        'Businesses looking to localize existing English sites for Japan',
        'D2C (Direct to Consumer) brands aiming to directly approach Japanese consumers',
        'Companies seeking to increase sales in Japan through digital marketing',
        'Businesses planning to expand e-commerce operations in Japan'
      ]
    },
    {
      title: 'Creating Japanese Corporate Websites: Targeted for the Japanese Market',
      description: 'We develop customized corporate websites specifically for the Japanese market, effectively representing your company in Japan.',
      imageSrc: '/mockup.png',
      alt: 'Japanese Corporate Website',
      features: [
        'Content strategy adapted to Japanese corporate culture',
        'Mobile-first design and performance optimization',
        'Creation of privacy policies and terms of use compliant with Japanese regulations',
        'Multilingual content management (Japanese and English)',
        'Design of inquiry forms aligned with Japanese business practices'
      ],
      targetCustomers: [
        'Foreign companies planning to expand into Japan',
        'Businesses establishing Japanese subsidiaries and wanting to enhance local presence',
        'Companies needing a trustworthy website for Japanese partners and customers',
        'Multinational corporations requiring Japan-specific sites separate from global sites',
        'Foreign-affiliated companies looking to strengthen recruitment activities in Japan'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Services</h1>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
      <div className={styles.footer}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <p className={styles.text}>
          If you have any questions, feel free to contact us.
          <br />
          You can ask us about Japan Market Entry in this free consultation.
        </p>
        <div className={styles.buttonContainer}>
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>
      </div>
    </div>
  );
}