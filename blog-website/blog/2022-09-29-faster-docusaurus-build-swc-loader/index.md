---
title: 'Faster Docusaurus builds with swc-loader'
authors: johnnyreilly
tags: [Docusaurus, swc, webpack]
image: ./title-image.webp
hide_table_of_contents: false
---

Logs matter. In Azure, logs generally live in Application Insights, in the Transaction Search section. This post reverse engineers the Azure Application Insights Transactions URL, and details how to construct a link to take you directly there, using both TypeScript and C#.

chore: migrate Jest and website to SWC #6944
19 Mar 2022

@SidaChen63 https://github.com/facebook/docusaurus/pull/6944

https://github.com/swc-project/swc-loader
This package allows transpiling JavaScript files using swc and webpack.

https://swc.rs/

SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.

🏎 SWC is 20x faster than Babel on a single thread and 70x faster on four cores.

![title image reading "Reverse engineering the Azure Application Insights Transactions URL" with a screenshot of the Transactions screen in the Azure Portal](title-image.webp)

## Bring me the logs!

If you've ever supported a production system, you will know this to be true: logs matter. Logs help you understand what's gone wrong. (You're never looking at logs when something has gone right.) When it comes to Azure, logs tend to reside in Application Insights, specifically Transactions:
