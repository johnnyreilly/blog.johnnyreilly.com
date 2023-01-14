import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const talks = [
  {
    permalink: 'https://www.youtube.com/watch?v=O58b4r21sz4&t=1735s',
    formattedDate: 'January 13th, 2023',
    title: 'TypeScript London: Me and Open Source',
  },
  {
    permalink: 'https://youtu.be/Kl9M7eut5Yo',
    formattedDate: 'June 22nd, 2022',
    title: 'LogRocket Meetup: How to start a blog using Docusaurus, GitHub Actions, and Azure Static Web Apps'    
  },
  {
    permalink: 'https://youtu.be/5MZoAcheyE4?t=240',
    formattedDate: 'December 1st, 2021',
    title: 'LogRocket Meetup: TypeScript Alternatives – JSDoc JavaScript',
  },
  {
    permalink: 'https://youtu.be/zi1CHB-eVck?start=282',
    formattedDate: 'October 27th, 2021',
    title: 'LogRocket Meetup: Structured data, SEO and React',
  },
  {
    permalink: 'https://youtu.be/LxZx3ycrxI0',
    formattedDate: 'September 30th, 2021',
    title: 'LogRocket Meetup: Write more readable code with TS 4.4',
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
