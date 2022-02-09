import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://lottie.org/" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <img
          src="/lottie-logo-image.webp"
          alt="Lottie Logo"
          className={styles.footerLogo}
        />
      </a>
    </footer>
  );
}
