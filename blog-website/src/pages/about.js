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

  // details on structured data support:
  // https://developers.google.com/search/docs/data-types/article#non-amp
  // and https://schema.org/Person
  const personStructuredData = {
    '@context': 'http://www.schema.org',
    '@type': 'Person',
    name: 'John Reilly',
    alternateName: 'Johnny Reilly',
    description:
      'Open Source Software Engineer - TypeScript, Azure, React, Node.js, .NET',
    url: 'https://johnnyreilly.com',
    image: 'https://johnnyreilly.com/img/profile.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Twickenham',
      addressLocality: 'London',
      addressCountry: 'United Kingdom',
    },
    email: 'johnny_reilly@hotmail.com',
    birthPlace: 'Bristol',
    sameAs: [
      'https://fosstodon.org/@johnny_reilly',
      'https://twitter.com/johnny_reilly',
      'https://github.com/johnnyreilly',
      'https://stackoverflow.com/users/761388/john-reilly',
      'https://blog.logrocket.com/author/johnreilly/',
      'https://polywork.com/johnnyreilly',
      'https://uk.linkedin.com/in/johnnyreilly',
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>

        <meta
          property="og:image"
          content="https://johnnyreilly.com/api/image-with-text"
        />
      </Head>

      <Layout
        title={`About ${siteConfig.title}`}
        description={`What is ${siteConfig.title}`}
      >
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
            <div className="text--center">
              <img
                src={imgUrl}
                className={styles.profileImage}
                alt="johnnyreilly profile picture"
              />
            </div>
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          </div>
        </header>
        <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--6', styles.feature)}>
                  <h3>Who am I?</h3>
                  <p>
                    I'm an engineer, writer, hedge chopper, father, food
                    botherer, Christian and husband to the most wonderful
                    Geordie wife there ever was! I live in London / Twickenham.
                    I was born in Bristol and I was raised in Fleet.
                  </p>

                  <p>
                    I answer to "John", but online I'm "johnnyreilly",
                    "johnny_reilly" or similar. Mostly because way back when I
                    was getting online, someone else had nabbed "johnreilly"
                    first. In retrospect it turns out to be useful
                    differentiation from the actor John C. Reilly that very much{' '}
                    <em>isn't</em> me. (Look him up - he's great!)
                  </p>

                  <p>
                    I write the occasional{' '}
                    <a href="https://reillysontour.blogspot.com/">
                      travel blog(ish)
                    </a>{' '}
                    as well. You can{' '}
                    <a href="mailto:johnny_reilly@hotmail.com">email me here</a>
                    .
                  </p>

                  <h3>What is this?</h3>
                  <p>
                    This started life{' '}
                    <a
                      href="https://icanmakethiswork.blogspot.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      on Blogger with the title "I can make this work"
                    </a>{' '}
                    - which was a pun on{' '}
                    <a
                      href="http://en.wikipedia.org/wiki/ICANN"
                      target="_blank"
                    >
                      ICANN
                    </a>
                    . Not, if I'm honest, the finest joke in the world.{' '}
                    <a href="https://johnnyreilly.com/2014/12/05/whats-in-a-name">
                      It's lived under a couple of domains since then.
                    </a>{' '}
                    We're now pretty firmly on{' '}
                    <a href="https://johnnyreilly.com">johnnyreilly.com</a>.
                  </p>
                  <p>
                    These days it's mostly the blog of an open source software
                    engineer. A great deal of "here's how I solved X". Some
                    talks I've given as well. Essentially, whatever I feel like
                    putting out.
                  </p>
                </div>

                <div className={clsx('col col--6', styles.feature)}>
                  <h3>What do I do?</h3>
                  <p>
                    I blog and work on open source software. I've more than ten
                    years experience blogging and working on open source
                    software.{' '}
                    <a href="https://twitter.com/johnny_reilly/status/1541020953299128320">
                      Open source software I work on has been used by GitHub
                    </a>
                    ! Some open source software I have worked on:
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
                      <a href="/definitely-typed-the-movie">
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

                  <h3>Where has this blog featured?</h3>
                  <ul>
                    <li>
                      <a href="https://blog.cwa.me.uk/2023/01/06/the-morning-brew-3618/">
                        The Morning Brew
                      </a>
                    </li>
                    <li>
                      <a href="https://azureweekly.info/issue-399.html">
                        Azure Weekly
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.logrocket.com/author/johnreilly/">
                        LogRocket
                      </a>
                    </li>
                    <li>
                      <a href="https://devblogs.microsoft.com/devops/this-week-i-searched-far-and-wide-to-find-some-really-informative-posts-from-our-community-weve-got-posts-on-code-quality-python-azure-devops-pipelines-and-more/">
                        Azure DevOps Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/okonet/lint-staged">
                        Lint Staged
                      </a>
                    </li>
                  </ul>
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
