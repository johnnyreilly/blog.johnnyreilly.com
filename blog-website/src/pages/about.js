import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

function About() {
  const imgUrl = useBaseUrl('img/profile.jpg');
  const context = useDocusaurusContext();
  const { siteConfig = { title: '', tagline: '' } } = context;

  // details on structured data support: https://developers.google.com/search/docs/data-types/article#non-amp
  // and https://schema.org/Person
  const personStructuredData = {
    '@context': 'http://www.schema.org',
    '@type': 'Person',
    name: 'John Reilly',
    alternateName: 'Johnny Reilly',
    description: 'MacGyver turned Dev',
    url: 'https://blog.johnnyreilly.com',
    image: 'https://blog.johnnyreilly.com/img/profile.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Twickenham',
      addressLocality: 'London',
      addressCountry: 'United Kingdom',
    },
    email: 'johnny_reilly@hotmail.com',
    birthPlace: 'Bristol',
    sameAs: [
      'https://twitter.com/johnny_reilly',
      'https://github.com/johnnyreilly',
      'https://mastodon.social/@johnny_reilly',
      'https://https://stackoverflow.com/users/761388/john-reilly',
      'https://blog.logrocket.com/author/johnreilly/',
      'https://polywork.com/johnnyreilly',
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
      </Head>

      <Layout
        title={`About ${siteConfig.title}`}
        description={`What is ${siteConfig.title}`}
      >
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <div className="text--center">
              <img
                src={imgUrl}
                className={styles.profileImage}
                alt="johnnyreilly profile picture"
              />
            </div>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </header>
        <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--6', styles.feature)}>
                  <h3>What do I do?</h3>
                  <p>
                    I blog and work on open source software.{' '}
                    <a href="https://twitter.com/johnny_reilly/status/1541020953299128320">
                      My OSS has been used by GitHub
                    </a>
                    ! Some OSS I have worked on:
                  </p>
                  <ul>
                    <li>
                      <a href="https://github.com/DefinitelyTyped">
                        Definitely Typed
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/TypeStrong/ts-loader">
                        ts-loader
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/TypeStrong/fork-ts-checker-webpack-plugin">
                        fork-ts-checker-webpack-plugin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/facebook/docusaurus">
                        Docusaurus
                      </a>
                    </li>
                  </ul>
                  <p>I wrote:</p>
                  <ul>
                    <li>
                      <a href="https://blog.johnnyreilly.com/2019/10/08/definitely-typed-movie">
                        The history of Definitely Typed
                      </a>
                    </li>
                    <li>
                      <a href="/definitive-guide-to-migrating-from-blogger-to-docusaurus">
                        The definitive guide to migrating from Blogger to
                        Docusaurus
                      </a>
                    </li>
                  </ul>
                  <p>
                    I was part of the merry band that started{' '}
                    <a href="https://typescriptcongress.com/">
                      TypeScript Congress
                    </a>{' '}
                    and was part of the initial Program Committee and an MC.
                  </p>
                  <p>
                    Some of my blogs are available on{' '}
                    <a href="https://blog.logrocket.com/author/johnreilly/">
                      LogRocket
                    </a>
                  </p>
                </div>

                <div className={clsx('col col--6', styles.feature)}>
                  <h3>What is this?</h3>
                  <p>
                    The meanderings and ramblings of a software engineer. If you
                    were wondering, the slightly egotistical-sounding title of
                    this blog started life as a pun on{' '}
                    <a
                      href="http://en.wikipedia.org/wiki/ICANN"
                      target="_blank"
                    >
                      ICANN
                    </a>
                    . Not, if I'm honest, the finest joke in the world but I
                    haven't yet thought of a better name and so here we are...
                  </p>

                  <h3>Who am I?</h3>
                  <p>
                    Long-time Londoner, born in Bristol and raised in Fleet.
                    Developer, writer, hedge chopper extraordinaire, father,
                    food botherer, Christian and husband to the most wonderful
                    Geordie wife there ever was!
                  </p>

                  <p>
                    I write the occasional{' '}
                    <a href="https://reillysontour.johnnyreilly.com/">
                      travel blog(ish)
                    </a>{' '}
                    as well.{' '}
                    <a href="https://www.kirstykissellfurnishings.com/">
                      My sister makes curtains and cushions!
                    </a>
                  </p>

                  <p>
                    You can{' '}
                    <a href="mailto:johnny_reilly@hotmail.com">email me</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default About;
