import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const talks = [
  {
    id: 'G4WTEEwI6Qs',
    permalink: 'https://youtube.com/watch?v=G4WTEEwI6Qs',
    formattedDate: 'February 27th, 2023',
    title:
      'Cloudinary DevJams Live-Stream: Serving Optimized Docusaurus Images with Rehype and Cloudinary',
  },
  {
    id: '3W8vCEtRn68?start=220',
    permalink: 'https://www.youtube.com/watch?v=3W8vCEtRn68&t=220s',
    formattedDate: 'February 16th, 2023',
    title: 'LogRocket Meetup: Understanding API data-fetching methods in React',
  },
  {
    id: 'O58b4r21sz4?start=1735',
    permalink: 'https://www.youtube.com/watch?v=O58b4r21sz4&t=1735s',
    formattedDate: 'January 13th, 2023',
    title: 'TypeScript London: Me and Open Source - talk starts at 28:55',
  },
  {
    id: 'Kl9M7eut5Yo',
    permalink: 'https://youtu.be/Kl9M7eut5Yo',
    formattedDate: 'June 22nd, 2022',
    title:
      'LogRocket Meetup: How to start a blog using Docusaurus, GitHub Actions, and Azure Static Web Apps',
  },
  {
    id: '5MZoAcheyE4?start=240',
    permalink: 'https://youtu.be/5MZoAcheyE4?t=240',
    formattedDate: 'December 1st, 2021',
    title: 'LogRocket Meetup: TypeScript Alternatives – JSDoc JavaScript',
  },
  {
    id: 'zi1CHB-eVck?start=282',
    permalink: 'https://youtu.be/zi1CHB-eVck?start=282',
    formattedDate: 'October 27th, 2021',
    title: 'LogRocket Meetup: Structured data, SEO and React',
  },
  {
    id: 'LxZx3ycrxI0',
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
              {talks.map((talk) => (
                <div className="card-demo margin--md">
                  <div className="card shadow--tl">
                    <div className="card__header">
                      <h3 style={{ maxWidth: '560px' }}>
                        <Link to={talk.permalink}>{talk.title}</Link>
                      </h3>
                      <h4>{talk.formattedDate}</h4>
                    </div>
                    <div className="card__image padding--md">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube-nocookie.com/embed/${talk.id}`}
                        title={talk.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Talks;
