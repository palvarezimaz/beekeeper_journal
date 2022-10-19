import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

const FirstEntry: NextPage = () => {
  let currentDate: Date = new Date();
  let date: string = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1>First post!</h1>
          <p className={styles.description}>
            It all started with Covid. I had to change my job, everything was
            closed.. a neighbour couldn't keep his bees anymore, and so the
            story starts
          </p>
          <p>{date}</p>
        </main>
      </Layout>
    </div>
  );
};

export default FirstEntry;
