---
slug: docusaurus-structured-data-faqs-mdx
title: 'Docusaurus: Structured Data FAQs with MDX'
authors: johnnyreilly
tags: [Docusaurus, Structured Data]
image: ./title-image.png
description: 'This demos how to make an MDX component that renders FAQs into a page, and the same information as Structured Data. It also shows how to use it with Docusaurus.'
hide_table_of_contents: false
---

import FAQStructuredData from "../../src/theme/MDXComponents/FAQStructuredData";

export const faqs = [
{
question: "How do I use the FAQ Structured Data component?",
answer:
"Simply create an import statement for the component and then use it in your MDX file. You'll need to pass in an array of FAQs. This array can be inline, you can declare it as a variable, or you can import it from another file.",
},
{
question: "How do I use the FAQ Structured Data component in a blog post?",
answer:
"The usage is the same as in a regular MDX file. But the import statement will sit after the frontmatter of the blog post.",
},
{
question:
"Can I use the FAQ Structured Data component in a regular MD file?",
answer: "Yes! It just works™️.",
},
];

I've written previously about [using Structured Data with React](../2021-10-15-structured-data-seo-and-react/index.md). This post goes a little further and talks about how to use Structured Data with Docusaurus and MDX. More specifically it looks at how to create a component that both renders FAQs into a page, and the same information as Structured Data.

![title image reading "Docusaurus: Structured Data FAQs with MDX" with a Docusaurus logo](title-image.png)

<!--truncate-->

## FAQs and Structured Data

I've working with [Growtika](https://growtika.com/) to repair my SEO after [damagining it last year](../2023-01-15-how-i-ruined-my-seo/index.md). One of the experiments we ran was to add [FAQs to a post](../2023-02-01-migrating-from-github-pages-to-azure-static-web-apps/index.md), and with that, the equivalent FAQ Structured Data. The idea was that we could see if this would help with the SEO for that post.

In the doing of that, I created a component that could be used to render FAQs into a page, and the same information as Structured Data. I thought it would be useful to share that component with the world.

## The component

I created a directory called `FAQStructuredData` in the ``src/theme/MDXComponents` directory. This directory is where I keep my custom MDX components. I then created an `index.js` file in that directory. This is the file that contains the component:

```jsx title="src/theme/MDXComponents/FAQStructuredData/index.js"
/**
 * @typedef { import('./types').FAQStructuredDataProps } FAQStructuredDataProps
 * @typedef { import('./types').FAQStructuredData } FAQStructuredData
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
  /** @type {FAQStructuredData} */ const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>

      <h2>FAQs</h2>
      {faqStructuredData.mainEntity.map((faq) => (
        <React.Fragment key={faq.name}>
          <h3>{faq.name}</h3>
          {faq.acceptedAnswer.text}
        </React.Fragment>
      ))}
    </>
  );
}
```

```ts title="src/theme/MDXComponents/FAQStructuredData/types.d.ts"
export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQStructuredDataProps {
  faqs: FAQ[];
}

export interface FAQStructuredData {
  '@context': string;
  '@type': string;
  mainEntity: FAQQuestionStructuredData[];
}

export interface FAQQuestionStructuredData {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}
```

Some things to note about this component:

- The code is written in JavaScript, but it's using [TypeScript types via JSDoc](../2021-11-22-typescript-vs-jsdoc-javascript/index.md). I don't believe you can write MDX components in TypeScript (please someone let me know if it turns out this is possible). But static typing is still useful, and still possible thanks to JSDoc.
- On that, we have a `types.d.ts` file that contains the types for the component. Using TypeScript directly is still possible alongside JSDoc, as long as there is no runtime code in the file, and a definition file (which the `types.d.ts` file is), has no runtime code. We can simply use it to store types that we import into the component.
- The component expects an `faqs` prop. This is an array of FAQs. Each FAQ is an object with a `question` and `answer` property. The component then renders the FAQs as markdown, and the same information as JSON-LD Structured Data. We're using the Google guidelines for [FAQ Structured Data](https://developers.google.com/search/docs/appearance/structured-data/faqpage#examples).

## Using the component

Now the component is created, we can use it in our MDX files. We can import it like so:

```mdx
---
slug: docusaurus-structured-data-faqs-mdx
title: 'Docusaurus: Structured Data FAQs with MDX'
authors: johnnyreilly
tags: [Docusaurus, Structured Data]
image: ./title-image.png
description: 'This demos how to make an MDX component that renders FAQs into a page, and the same information as Structured Data. It also shows how to use it with Docusaurus.'
hide_table_of_contents: false
---

import FAQStructuredData from '../../src/theme/MDXComponents/FAQStructuredData';

export const faqs = [
  {
    question: 'How do I use the FAQ Structured Data component?',
    answer:
      "Simply create an import statement for the component and then use it in your MDX file. You'll need to pass in an array of FAQs. This array can be inline, you can declare it as a variable, or you can import it from another file.",
  },
  {
    question: 'How do I use the FAQ Structured Data component in a blog post?',
    answer:
      'The usage is the same as in a regular MDX file. But the import statement will sit after the frontmatter of the blog post.',
  },
  {
    question:
      'Can I use the FAQ Structured Data component in a regular MD file?',
    answer: 'Yes! It just works™️.',
  },
];

;
```

<FAQStructuredData faqs={faqs} />
