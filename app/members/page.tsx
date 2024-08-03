import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getMembersList({
    draftKey: searchParams.dk,
  });

  return (
    <div className={styles.container}>
      <section className={styles.aboutUs}>
        <h2 className={styles.sectionTitle}>Company</h2>
        <dl className={styles.infoGrid}>
        <p className={styles.mission}>
          Empowering Global Businesses in the Japanese Market
        </p>
          <div>
            <dt>Company Name</dt>
            <dd>RE-IDEA Co., Ltd.</dd>
          </div>
          <div>
            <dt>Establishment</dt>
            <dd>May 2024</dd>
          </div>
          <div>
            <dt>Post Code</dt>
            <dd>〒151-0051<br />1-30-10-4F Sendagaya,Shibuya-ku,Tokyo</dd>
          </div>
          <div>
            <dt>Representative</dt>
            <dd>Ryosuke Nakai</dd>
          </div>
        </dl>
      </section>

      <section className={styles.members}>
        <h2 className={styles.sectionTitle}>Member</h2>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません。</p>
        ) : (
          <ul className={styles.membersList}>
            {data.contents.map((member) => (
              <li key={member.id} className={styles.memberItem}>
                <Image
                  src={member.image?.url as string}
                  alt=""
                  width={member.image?.width}
                  height={member.image?.height}
                  className={styles.memberImage}
                />
                <dl className={styles.memberInfo}>
                  <dt className={styles.memberName}>{member.name}</dt>
                  <dd className={styles.memberPosition}>{member.position}</dd>
                  <dd className={styles.memberProfile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}