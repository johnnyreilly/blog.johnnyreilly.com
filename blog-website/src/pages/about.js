import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";
import styles from "./styles.module.css";

const features = [
  {
    title: "What is this?",
    description: (
      <>
        <p>
          The meanderings and ramblings of a software engineer. If you were
          wondering, the slightly egotistical-sounding title of this blog
          started life as a pun on{" "}
          <a href="http://en.wikipedia.org/wiki/ICANN" target="_blank">
            ICANN
          </a>
          . Not, if I'm honest, the finest joke in the world but I haven't yet
          thought of a better name and so here we are...
        </p>
      </>
    ),
  },
  {
    title: "What do I do?",
    description: (
      <>
        <p>I work on a number of open source projects including:</p>
        <ul>
          <li>
            <a href="https://github.com/DefinitelyTyped">Definitely Typed</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/ts-loader">ts-loader</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/fork-ts-checker-webpack-plugin">
              fork-ts-checker-webpack-plugin
            </a>
          </li>
        </ul>
        <p>
          I also wrote the{" "}
          <a href="https://blog.johnnyreilly.com/2019/10/08/definitely-typed-movie">
            history of Definitely Typed
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Who am I?",
    description: (
      <>
        <p>
          Long-time Londoner, born in Bristol and raised in Fleet. Developer,
          writer, hedge chopper extraordinaire, father, food botherer, Christian
          and husband to the most wonderful Geordie wife there ever was!
        </p>

        <p>
          I write the occasional{" "}
          <a href="https://reillysontour.johnnyreilly.com/">travel blog(ish)</a>{" "}
          as well.
        </p>

        <p>
          You can <a href="mailto:johnny_reilly@hotmail.com">email me</a>.
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function About() {
  const imgUrl = useBaseUrl("img/profile.jpg");
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // details on structured data support: https://developers.google.com/search/docs/data-types/article#non-amp
  // and https://schema.org/Person
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blog.johnnyreilly.com",
    email: "johnny_reilly@hotmail.com",
    image: "https://blog.johnnyreilly.com/img/profile.jpg",
    jobTitle: "MacGyver turned Dev",
    name: "John Reilly",
    alternateName: "Johnny Reilly",
    url: "https://blog.johnnyreilly.com",
    sameAs: [
      "https://twitter.com/johnny_reilly",
      "https://github.com/johnnyreilly",
      "https://https://stackoverflow.com/users/761388/john-reilly",
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
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  );
}

export default About;
