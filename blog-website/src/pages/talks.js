import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const talks = [
  {
    id: 'IOnOsyQJYkc?start=200',
    permalink: 'https://youtu.be/IOnOsyQJYkc?t=200',
    date: '2025-01-30',
    formattedDate: 'January 30th, 2025',
    title: 'The Hitchhiker’s Guide to Open Source Software',
  },
  {
    id: 'U6s2pdxebSo',
    permalink: 'https://youtube.com/watch?v=U6s2pdxebSo',
    date: '2023-09-21',
    formattedDate: 'September 21st, 2023',
    title: 'TypeScript Origins: The Documentary - not just me, but I am in it!',
  },
  {
    id: 'G4WTEEwI6Qs',
    permalink: 'https://youtube.com/watch?v=G4WTEEwI6Qs',
    date: '2023-02-27',
    formattedDate: 'February 27th, 2023',
    title:
      'Cloudinary DevJams Live-Stream: Serving Optimized Docusaurus Images with Rehype and Cloudinary',
  },
  {
    id: '3W8vCEtRn68?start=220',
    permalink: 'https://www.youtube.com/watch?v=3W8vCEtRn68&t=220s',
    date: '2023-02-16',
    formattedDate: 'February 16th, 2023',
    title: 'LogRocket Meetup: Understanding API data-fetching methods in React',
  },
  {
    id: 'O58b4r21sz4?start=1735',
    permalink: 'https://www.youtube.com/watch?v=O58b4r21sz4&t=1735s',
    date: '2023-01-13',
    formattedDate: 'January 13th, 2023',
    title: 'TypeScript London: Me and Open Source - talk starts at 28:55',
  },
  {
    id: 'Kl9M7eut5Yo',
    permalink: 'https://youtu.be/Kl9M7eut5Yo',
    date: '2022-06-22',
    formattedDate: 'June 22nd, 2022',
    title:
      'LogRocket Meetup: How to start a blog using Docusaurus, GitHub Actions, and Azure Static Web Apps',
  },
  {
    id: '5MZoAcheyE4?start=240',
    permalink: 'https://youtu.be/5MZoAcheyE4?t=240',
    date: '2022-12-01',
    formattedDate: 'December 1st, 2021',
    title: 'LogRocket Meetup: TypeScript Alternatives – JSDoc JavaScript',
  },
  {
    id: 'zi1CHB-eVck?start=282',
    permalink: 'https://youtu.be/zi1CHB-eVck?start=282',
    date: '2021-10-27',
    formattedDate: 'October 27th, 2021',
    title: 'LogRocket Meetup: Structured data, SEO and React',
  },
  {
    id: 'LxZx3ycrxI0',
    permalink: 'https://youtu.be/LxZx3ycrxI0',
    date: '2021-09-30',
    formattedDate: 'September 30th, 2021',
    title: 'LogRocket Meetup: Write more readable code with TS 4.4',
  },
];

// eg https://img.youtube.com/vi/G4WTEEwI6Qs/default.jpg
const thumbnailResolutions = [
  'default.jpg',
  'hqdefault.jpg',
  'mqdefault.jpg',
  'sddefault.jpg',
  'maxresdefault.jpg',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: talks.map((talk, index) => ({
    '@type': 'VideoObject',
    position: index + 1,
    name: talk.title,
    url: talk.permalink,
    description: talk.title,

    thumbnailUrl: thumbnailResolutions.map(
      (resolution) => `https://img.youtube.com/vi/${talk.id}/${resolution}`,
    ),

    uploadDate: talk.date,
    // duration: 'PT1M54S',
    contentUrl: talk.permalink,
    embedUrl: `https://www.youtube-nocookie.com/embed/${talk.id}`,
    // interactionStatistic: {
    //   '@type': 'InteractionCounter',
    //   interactionType: { '@type': 'WatchAction' },
    //   userInteractionCount: 5647018,
    // },
  })),
};

function Talks() {
  return (
    <Layout title="Talks">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Talks</h1>
          <p className="hero__subtitle">
            I occasionally give talks and pop up on video. You can see some
            examples here.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {talks.map((talk) => (
                <div className="card-demo margin--md" key={talk.id}>
                  <div className="card shadow--tl">
                    <div className="card__header">
                      <h3 style={{ maxWidth: '560px' }}>
                        <Link to={talk.permalink}>{talk.title}</Link>
                      </h3>
                      <h4>{talk.formattedDate}</h4>
                    </div>
                    <div className="card__image padding--md">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${talk.id}`}
                        title={talk.title}
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
