import type { NextPage } from 'next';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! I'm Andrew, from Gippsland, and this is my blog. I want to
          tell you about my journey as a beekeper. Soon I'll be opening my
          e-shop in this same page
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <Link href="/blog/FirstEntry">
          <h2 className={utilStyles.card}>First entry &rarr;</h2>
        </Link>
      </section>
    </Layout>
  );
  //   return (
  //     <div className={styles.container}>
  //       <Head>
  //         <title>The Beekeeper's Blog</title>
  //         <meta name="description" content="The Beekeeper's Blog" />
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>

  //       <main className={styles.main}>
  //         <h1 className={styles.title}>The Beekeper's Blog</h1>
  //         <Image src="/images/bee.jpg" height={200} width={144} alt="Bee" />

  //         <p className={styles.description}>
  //           Hi there! I'm Andrew, from Gippsland, and this is my blog. I want to
  //           tell you about my journey as a beekeper. Soon I'll be opening my
  //           e-shop in this same page
  //         </p>

  //         <div className={styles.grid}>
  //           <Link href="/blog/FirstEntry" className={styles.card}>
  //             <h2>First entry &rarr;</h2>
  //           </Link>
  //           <p>How it all started.</p>
  //         </div>
  //       </main>

  //       <footer className={styles.footer}>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Powered by{' '}
  //           <span className={styles.logo}>
  //             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //           </span>
  //         </a>
  //       </footer>
  //     </div>
  //   );
  // };
};

export default Home;
