import type { NextPage } from 'next';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name: string = 'Andrew';
export const siteTitle: string = "The Beekeeper's blog";

type LayoutProps = {
  children?: ReactNode;
  home?: ReactNode;
};

const Layout: NextPage = (props: LayoutProps) => {
  // ({ children, home }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A Beekeeper's blog" />
      </Head>
      <header className={styles.header}>
        {props.home ? (
          <>
            <Image
              priority
              src="/images/bee.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="A bee"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/bee.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="A bee"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{props.children}</main>
      {!props.home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
