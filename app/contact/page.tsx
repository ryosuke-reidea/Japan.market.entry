import styles from './page.module.css';
import ContactForm from '@/app/_components/ContactForm';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        If you have any question, feel free to contact us.
        <br />
        You can ask us about the Japan Market Entry in this free consultation.
      </p>
      <ContactForm />
    </div>
  );
}
