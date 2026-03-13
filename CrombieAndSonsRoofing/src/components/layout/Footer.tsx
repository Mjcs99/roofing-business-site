import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h3 className={styles.title}>Crombie & Sons Roofing</h3>
          <p className={styles.text}>
            Reliable roofing services you can trust. Quality craftsmanship and
            honest service for every project.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Contact</h4>
          <p className={styles.text}>📞 (403) 597-2710</p>
          <p className={styles.text}>✉️ crombieandsonsroofing@outlook.com</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Service Area</h4>
          <p className={styles.text}>Red Deer & Surrounding Areas</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Follow Us</h4>
          <a
            href="https://www.facebook.com/crombieandsons"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaFacebookF />
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Crombie & Sons Roofing. All rights reserved.
      </div>
    </footer>
  );
}