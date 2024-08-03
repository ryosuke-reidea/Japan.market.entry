import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  reverse?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, imageSrc, alt, reverse = false }) => (
  <div className={`${styles.feature} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.featureContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className={styles.featureImage}>
      <Image className={styles.businessImg} src={imageSrc} alt={alt} width={1024} height={1024} />
    </div>
  </div>
);

interface MarketItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const MarketItem: React.FC<MarketItemProps> = ({ title, description, imageSrc }) => (
  <div className={styles.marketItem}>
    <Image src={imageSrc} alt={title} width={300} height={200} className={styles.marketImage} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

interface ChallengeItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({ title, description, imageSrc }) => (
  <div className={styles.challengeItem}>
    <Image src={imageSrc} alt={title} width={300} height={200} className={styles.challengeImage} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log("hello")
  console.log(data)

  const services: ServiceItemProps[] = [
    {
      title: 'Consulting: Product Selection for the Japanese Market',
      description: 'We assist in identifying products that best suit the Japanese market, ensuring a higher chance of success upon entry.',
      imageSrc: '/consulting1.png',
      alt: 'Product Selection'
    },
    {
      title: 'Test Marketing in Real Japanese Market: Comprehensive Crowdfunding Support',
      description: 'We provide extensive support for launching crowdfunding campaigns, enabling real-time market feedback and product validation.',
      imageSrc: '/クラファン.png',
      alt: 'Crowdfunding Support'
    },
    {
      title: 'Creating Japanese Landing Page: Product-Specific Promotion',
      description: 'We create specialized Japanese landing pages for each product, effectively promoting your offerings to the Japanese audience.',
      imageSrc: '/LP集.png',
      alt: 'Japanese Landing Page'
    },
    {
      title: 'Creating Japanese Corporate Website: Targeted for the Japanese market',
      description: 'We develop customized Japanese corporate websites, tailored to represent your company effectively in the Japanese market.',
      imageSrc: '/mockup.png',
      alt: 'Japanese Corporate Website'
    }
  ];

  const marketItems: MarketItemProps[] = [
    {
      title: 'Economic Scale',
      description: 'Japan is the world\'s third-largest economy, with a GDP of approximately 4.2 trillion USD in 2022. This vast market size offers significant opportunities for foreign businesses across various sectors.',
      imageSrc: '/economic-scale.jpg'
    },
    {
      title: 'High Purchasing Power',
      description: 'Japan\'s GDP per capita is around 39,000 USD (as of 2022), indicating strong consumer purchasing power. This high disposable income makes Japan an attractive market for premium products and services.',
      imageSrc: '/purchase.png'
    },
    {
      title: 'Demand for Overseas Product ',
      description: 'Japan is the world\'s 4th largest importer, with 70% of consumers willing to buy foreign brands. This openness, coupled with growing e-commerce, offers significant opportunities for overseas companies in various sectors.',
      imageSrc: '/海外商品.png'
    }
  ];

  const challengeItems: ChallengeItemProps[] = [
    {
      title: 'Language Barrier',
      description: 'Japanese language proficiency is crucial for business operations, marketing, and customer service. This can be a significant hurdle for foreign companies.',
      imageSrc: '/日本語.png'
    },
    {
      title: 'Unique Business Culture',
      description: 'Japan has a distinct business etiquette and decision-making process. Understanding and adapting to these cultural nuances is essential for success.',
      imageSrc: '/文化.png'
    },
    {
      title: 'Market Entry Strategy',
      description: 'Entering the Japanese market requires thorough research, competitor analysis, and localized marketing strategies. Setting competitive pricing are also crucial for success.',
      imageSrc: '/データ.png'
    },
    {
      title: 'Regulatory Complexities',
      description: 'Navigating Japan\'s regulatory environment can be challenging, with specific requirements for various industries and product categories.',
      imageSrc: '/規制.png'
    }
  ];

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>All-In-One support for Japan Market Entry</h1>
          <p className={styles.description}>
            Test marketing in the Japanese market and creating a Japanese website
          </p>
        </div>
        <Image className={styles.bgimg} src="/採用.png" alt="" width={3600} height={1200} priority />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>Contact</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/contact">Move</ButtonLink>
        </div>
      </section>

      <div className={styles.japaneseMarket}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitleEn}>Japanese Market</h2>
          <p className={styles.sectionTitleJa}>How Attractive?</p>
          <div className={styles.marketContainer}>
            {marketItems.map((item, index) => (
              <MarketItem key={index} {...item} />
            ))}
          </div>
          <p className={styles.sectionDescription}>
            These factors combine to make Japan an attractive market for foreign companies, especially those offering high-value products, innovative technologies, or premium services.
          </p>
        </section>
      </div>

      <div className={styles.challenges}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitleEn}>Difficulties</h2>
          <p className={styles.sectionTitleJa}>Key Points for Japan Market Entry</p>
          <div className={styles.challengeContainer}>
            {challengeItems.map((item, index) => (
              <ChallengeItem key={index} {...item} />
            ))}
          </div>
          <p className={styles.sectionDescription}>
            While the Japanese market offers significant opportunities, it also presents unique challenges. Understanding and addressing these key points is crucial for successful market entry and long-term success in Japan.
          </p>
        </section>
      </div>

      <div className={styles.services}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <div>
              <h2 className={styles.sectionTitleEn}>Service</h2>
              <p className={styles.sectionTitleJa}>We will support your challenge</p>
              <div className={styles.features}>
                {services.map((service, index) => (
                  <ServiceItem key={index} {...service} reverse={index % 2 !== 0} />
                ))}
              </div>
              <ButtonLink href="/business">More</ButtonLink>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.aboutUs}>
        <section className={styles.section}>
          <div className={styles.horizontalEqual}>
            <div className={styles.featureContent}>
              <h2 className={styles.sectionTitleEn}>About us</h2>
              <p className={styles.sectionTitleJa}>What we do</p>
              <p className={styles.sectionDescription}>
                We provide comprehensive support for overseas companies entering the Japanese market.
                <br />
                Our services include test marketing through crowdfunding and the creation of a Japanese-language website, all aimed at facilitating sales and market establishment in Japan. Our experienced team is dedicated to ensuring your success.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.businessImg}
                src="/img-team.png"
                alt=""
                width={400}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </div>

      <div className={styles.contact}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.businessImg}
              src="/tower.jpg"
              alt=""
              width={300}
              height={300}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>Contact</h2>
              <p className={styles.sectionTitleJa}>Free Consultation</p>
              <br/>
              <p className={styles.sectionDescription}>
                Ready to explore the Japanese market?
              </p>
              <p>
                We offer a range of services, including crowdfunding support and Japanese website creation, to help your business succeed in Japan.
              </p>
              <p>Let us guide you through the process and ensure your success.</p>
              <ButtonLink href="/contact">Contact</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}