import SearchField from "react-search-field";
import Head from "next/head";
import Image from "next/image";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

export default function Header({ updateSearchTerm }) {
  return (
    <>
      <Head>
        <title>Lottie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Search Care Homes - Lottie"></meta>
      </Head>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src="/lottie-logo-image.webp"
              alt="Lottie Logo"
              width="100"
              height="100"
            ></Image>
          </div>
          <SearchField placeholder="Search item" onChange={updateSearchTerm} />
        </div>

        <Navigation />
      </header>
    </>
  );
}
