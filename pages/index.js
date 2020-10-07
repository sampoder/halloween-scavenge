import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halloween Scavenger Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: '3em'}}>Halloween Scavenger Hunt</h1>

        <p className={styles.description}>
          You shouldn't be here, this site has specific pages for each clue that have unique (don't even try guessing 😜) URLs.
        </p>

        <div className={styles.grid}>
          <a
            href="mailto:23samuel.p@gwa.edu.sg"
            className={styles.card + ' ' + styles.card2}
          >
            <h3>
              Need help? Email here.
            </h3>
            <p>
              Email Sam Poder for support if you need it.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
