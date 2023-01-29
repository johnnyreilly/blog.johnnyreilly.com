import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostPageWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  /** @type {import('@docusaurus/plugin-content-blog').BlogPostMetadata} */ const blogMetaData =
    props.content.metadata;

  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#json-ld
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Archive',
        item: `${siteConfig.url}/archive`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogMetaData.title,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <BlogPostPage {...props} />
    </>
  );
}
