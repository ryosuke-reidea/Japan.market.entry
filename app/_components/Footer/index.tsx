import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">Service</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">Company / Member</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>© RE-IDEA Co.,Ltd. All Rights Reserved 2024</p>
    </footer>
  );
}
