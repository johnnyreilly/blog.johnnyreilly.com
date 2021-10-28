import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const talks = [
  {
    permalink: 'https://youtu.be/LxZx3ycrxI0',
    formattedDate: 'September 30th, 2021',
    title: 'LogRocket Meetup: Write more readable code with TS 4.4',
  },
  {
    permalink: 'https://youtu.be/zi1CHB-eVck?start=282',
    formattedDate: 'October 27th, 2021',
    title: 'LogRocket Meetup: Structured data, SEO and React',
  },
];

function Talks() {
  return (
    <Layout title="Talks">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Talks</h1>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--12', styles.feature)}>
                <h3>2021</h3>
                <ul>
                  {talks.map((talk) => (
                    <li key={talk.formattedDate}>
                      <Link to={talk.permalink}>
                        {talk.formattedDate} - {talk.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Talks;
