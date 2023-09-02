import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogListPageWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  // https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://johnnyreilly.com/',
    description: siteConfig.tagline,

    // not sure about these
    // copyrightHolder: {
    //   '@id': 'https://johnnyreilly.com/about',
    // },
    // publisher: {
    //   '@id': 'https://johnnyreilly.com/about',
    // },

    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://johnnyreilly.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <BlogListPage {...props} />
    </>
  );
}
