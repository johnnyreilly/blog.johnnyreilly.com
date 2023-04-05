/**
 * @typedef { import('./types').FAQStructuredDataProps } FAQStructuredDataProps
 */

import React from 'react';

/**
 * A component that renders a FAQ structured data and markdown entries
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 * @param {FAQStructuredDataProps} props
 * @returns
 */
export default function FAQStructuredData(props) {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(props.faqs)}</script>

      <h2>FAQs</h2>
      {props.faqs.mainEntity.map((faq) => (
        <React.Fragment key={faq.name}>
          <h3>{faq.name}</h3>
          {faq.acceptedAnswer.text}
        </React.Fragment>
      ))}
    </>
  );
}
