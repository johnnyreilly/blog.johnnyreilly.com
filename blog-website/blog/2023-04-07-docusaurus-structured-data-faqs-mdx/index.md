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
question:
'Why should I migrate from GitHub Pages to Azure Static Web Apps?',
answer:
"If you like the idea of using a single platform for hosting your static website and deploying previews, then Azure Static Web Apps is a great option. It's also free to use!",
},
{
question: 'What is Bicep and how can it be used for migration?',
answer:
"Bicep is a Domain Specific Language (DSL) for deploying Azure resources. It's a great way to define your infrastructure as code. You can use Bicep to deploy your Azure Static Web App. You can also deploy an Azure Static Web App using the Azure Portal or the Azure CLI.",
},
{
question:
'How do I enable staging environments / deployment previews in Azure Static Web Apps?',
answer:
"You don't need to do anything special to enable staging environments. They're enabled by default.",
},
];

I've written previously about [using Structured Data with React](../2021-10-15-structured-data-seo-and-react/index.md). This post goes a little further and talks about how to use Structured Data with Docusaurus and MDX. More specifically it looks at how to create a component that both renders FAQs into a page, and the same information as Structured Data.

![title image reading "Docusaurus: Structured Data FAQs with MDX" with a Docusaurus logo](title-image.png)

<!--truncate-->

## Why migrate?

blarg

<FAQStructuredData faqs={faqs} />
