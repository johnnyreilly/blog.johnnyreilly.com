import BlogPostPage from '@theme-original/BlogPostPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostPageWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  /** @type {import('@docusaurus/plugin-content-blog').BlogPostMetadata} */ const blogMetaData =
    props.content.metadata;

  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb#json-ld
  const blogBreadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${blogMetaData.permalink}#breadcrumb`,
    name: 'Blog breadcrumb',
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
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogMetaData.title,
      },
    ],
  };

  const breadcrumbStructuredData = [blogBreadcrumbStructuredData];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <BlogPostPage {...props} />
    </>
  );
}
