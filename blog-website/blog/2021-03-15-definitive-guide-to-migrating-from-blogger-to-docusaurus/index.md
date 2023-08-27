---
slug: definitive-guide-to-migrating-from-blogger-to-docusaurus
title: 'The definitive guide to migrating from Blogger to Docusaurus'
authors: johnnyreilly
tags: [Blogger, Docusaurus, typescript]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to transfer a Blogger website to Docusaurus without losing content. Use a TypeScript console app to convert HTML to Markdown.'
---

This post documents how to migrate a blog from Blogger to Docusaurus.

![title image reading "The definitive guide to migrating from Blogger to Docusaurus" with the Blogger and Docusaurus logos](title-image.png)

<!--truncate-->

## Updated 5th November 2022

This post started out as an investigation into migrating from Blogger to Docusaurus. In the end I very much made the leap, and would recommend doing so to others. I've transformed this post into a "definitive guide" on how to migrate. I intend to maintain this on an ongoing basis for the benefit of the community.

Because I rather like what I originally wrote when I was in "investigation mode", I have largely left it in place. However, there are new sections which have been added in to augment what's there.

## Introduction

[Docusaurus](https://v2.docusaurus.io/) is, amongst other things, a Markdown powered blogging platform. My blog has lived happily on [Blogger](https://www.blogger.com/) for the past decade. I'm considering moving, but losing my historic content as part of the move was never an option. This post goes through what it would look like to move from Blogger to Docusaurus _without_ losing your content.

It is imperative that the world never forgets what I was doing with jQuery in 2012.

## Blog as code

Everything is better when it's code. Infrastructure as code. Awesome right? So naturally "blog as code" must be better than just a blog. More seriously, [Markdown](https://en.wikipedia.org/wiki/Markdown) is a tremendous documentation format. Simple, straightforward and, like Goldilocks, "just right". For a long time I've written everything as Markdown. My years of toil down the Open Source mines have preconditioned me to be very MD-disposed.

I started out writing this blog a long time ago as pure HTML. Not the smoothest of writing formats. At some point I got into the habit of spinning up a new repo in GitHub for a new blogpost, writing it in Markdown and piping it through a variety of tools to convert it into HTML for publication on Blogger. As time passed I felt I'd be a lot happier if I wasn't creating a repo each time. What if I did all my blogging in a single repo and used that as the code that represented my blog?

Just having that thought laid the seeds for what was to follow:

1. An investigation into importing my content from Blogger into a GitHub repo
2. An experimental port to Docusaurus

We're going to go this now. First, let's create ourselves a Docusaurus site for our blog:

```
npx create-docusaurus@latest blog-website classic
```

This creates a standard Docusaurus site in the `blog-website` directory. In there we'll find a `docusaurus.config.js` file. There's much that can be configured here. It's worth remembering that Docusaurus is a tool for building documentation sites that also happens to feature a blog component. We're going to use it as a blog only. So we'll deactivate the docs component and configure the blog component to be the home page of our site, following the [Docusaurus documentation](https://docusaurus.io/docs/blog#blog-only-mode):

```js
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Deactivate docs
        blog: {
          blogTitle: 'I CAN MAKE THIS WORK',
          blogDescription: 'The blog of johnnyreilly',
          blogSidebarCount: 5,
          postsPerPage: 1,
          path: './blog',
          routeBasePath: '/', // Make blog the home page
          showReadingTime: true,
          editUrl:
            'https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // ...
};
```

## Downloading your Blogger content

In order that we can migrate, we must obtain the blog content. This is a mass of HTML that lived inside Blogger's database. (One assumes they have a database; I haven't actually checked.) There's a `Back up content` option inside Blogger's settings to allow this:

![Download content from Blogger](screenshot-blogger-back-up-content.webp)

It provides you with an XML file with a dispiritingly small size. Ten years blogging? You'll get change out of 4Mb it turns out.

## From HTML in XML to Markdown

We now want to take that XML and:

- Extract each blog post (and it's associated metadata; title / tags and whatnot)
- Convert the HTML content of each blog post from HTML to Markdown, and save it as a Markdown file
- Download the images used in the blogpost so they can be stored in the repo as well

To do this we're going to whip up a smallish TypeScript console app. Let's initialise it with the packages we're going to need:

```
mkdir from-blogger-to-docusaurus
cd from-blogger-to-docusaurus
npx typescript --init
yarn init -y
yarn add @types/he@^1.1.2 @types/jsdom@^20.0.0 @types/node@^18.11.9 @types/showdown@^2.0.0 axios@^1.1.3 fast-xml-parser@^3.21.1 he@^1.2.0 jsdom@^20.0.2 showdown@^2.1.0 ts-node@^10.9.1 typescript@^4.8.4
```

We're using:

- [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser) to parse XML
- [`he`](https://github.com/mathiasbynens/he), [`jsdom`](https://github.com/jsdom/jsdom) and [`showdown`](https://github.com/showdownjs/showdown) to convert HTML to Markdown
- [`axios`](https://github.com/axios/axios) to download images
- [`typescript`](https://github.com/microsoft/TypeScript) to code in and [`ts-node`](https://github.com/TypeStrong/ts-node) to make our TypeScript Node.js console app.

Now we have all the packages we need, it's time to write our script.

```ts
import fs from 'fs';
import path from 'path';
import showdown from 'showdown';
import he from 'he';
import jsdom from 'jsdom';
import axios from 'axios';
import fastXmlParser from 'fast-xml-parser';

const bloggerXmlPath = './blog-03-17-2021.xml';
const docusaurusDirectory = '../blog-website';
const notMarkdownable: string[] = [];

const author = 'johnnyreilly';
const author_name = 'John Reilly';
const author_url = 'https://twitter.com/johnny_reilly';
const author_image_url = 'https://johnnyreilly.com/img/profile.jpg';

async function makePostsFromXML() {
  const blogDir = path.resolve(docusaurusDirectory, 'blog');

  await deleteExistingFiles(blogDir);

  await makeAuthorsYml(blogDir);

  const posts = await getPosts();

  for (const post of posts) {
    await makePostIntoMarkDownAndDownloadImages(post);
  }
  if (notMarkdownable.length)
    console.log(
      'These blog posts could not be turned into MarkDown - go find out why!',
      notMarkdownable
    );
}

async function deleteExistingFiles(directory: string) {
  const filesAndFolders = await fs.promises.readdir(directory);
  for (const file of filesAndFolders) {
    try {
      await fs.promises.unlink(path.join(directory, file));
    } catch (e) {
      await fs.promises.rm(path.join(directory, file), {
        recursive: true,
        force: true,
      });
    }
  }
}

/**
 * Make an authors.yml file
 *
 * johnnyreilly:
 *   name: John Reilly
 *   url: https://twitter.com/johnny_reilly
 *   image_url: https://johnnyreilly.com/img/profile.jpg
 */
async function makeAuthorsYml(directory: string) {
  const authorsYml = `${author}:
  name: ${author_name}
  url: ${author_url}
  image_url: ${author_image_url}
`;

  await fs.promises.writeFile(
    path.join(directory, 'authors.yml'),
    authorsYml,
    'utf-8'
  );
}

async function getPosts(): Promise<Post[]> {
  const xml = await fs.promises.readFile(bloggerXmlPath, 'utf-8');

  const options = {
    attributeNamePrefix: '@_',
    attrNodeName: 'attr', //default is 'false'
    textNodeName: '#text',
    ignoreAttributes: false,
    ignoreNameSpace: false,
    allowBooleanAttributes: true,
    parseNodeValue: true,
    parseAttributeValue: true,
    trimValues: true,
    cdataTagName: '__cdata', //default is 'false'
    cdataPositionChar: '\\c',
    parseTrueNumberOnly: false,
    arrayMode: true, //"strict"
    attrValueProcessor: (val: string, attrName: string) =>
      he.decode(val, { isAttributeValue: true }), //default is a=>a
    tagValueProcessor: (val: string, tagName: string) => he.decode(val), //default is a=>a
  };

  const traversalObj = fastXmlParser.getTraversalObj(xml, options);
  const blog = fastXmlParser.convertToJson(traversalObj, options);

  const postsRaw = blog.feed[0].entry.filter(
    (entry: any) =>
      entry.category.some(
        (category: any) =>
          category.attr['@_term'] ===
          'http://schemas.google.com/blogger/2008/kind#post'
      ) &&
      entry.link.some(
        (link: any) =>
          link.attr['@_href'] && link.attr['@_type'] === 'text/html'
      ) &&
      entry.published < '2021-03-07'
  );

  const posts: Post[] = postsRaw.map((entry: any) => {
    return {
      title: entry.title[0]['#text'],
      content: entry.content[0]['#text'],
      published: entry.published,
      link: entry.link.find(
        (link: any) =>
          link.attr['@_href'] && link.attr['@_type'] === 'text/html'
      )
        ? entry.link.find(
            (link: any) =>
              link.attr['@_href'] && link.attr['@_type'] === 'text/html'
          ).attr['@_href']
        : undefined,
      tags:
        Array.isArray(entry.category) &&
        entry.category.some(
          (category: any) =>
            category.attr['@_scheme'] === 'http://www.blogger.com/atom/ns#'
        )
          ? entry.category
              .filter(
                (category: any) =>
                  category.attr['@_scheme'] ===
                    'http://www.blogger.com/atom/ns#' &&
                  category.attr['@_term'] !== 'constructor'
              ) // 'constructor' will make docusaurus choke
              .map((category: any) => category.attr['@_term'])
          : [],
    };
  });

  for (const post of posts) {
    const { content, ...others } = post;
    console.log(others, content.length);
    if (!content || !others.title || !others.published)
      throw new Error('No content');
  }

  return posts.filter((post) => post.link);
}

async function makePostIntoMarkDownAndDownloadImages(post: Post) {
  const converter = new showdown.Converter({
    ghCodeBlocks: true,
  });
  const linkSections = post.link.split('/');
  const linkSlug = linkSections[linkSections.length - 1];
  const blogdirname =
    post.published.substring(0, 10) + '-' + linkSlug.replace('.html', '');

  const blogdirPath = path.resolve(docusaurusDirectory, 'blog', blogdirname);

  if (!fs.existsSync(blogdirPath)) {
    fs.mkdirSync(blogdirPath);
  }

  const contentProcessed = post.content
    // remove stray <br /> tags
    .replace(/<br\s*\/?>/gi, '\n')
    // translate <code class="lang-cs" into <code class="language-cs"> to be showdown friendly
    .replace(/code class="lang-/gi, 'code class="language-')
    // convert <!-- into <!
```
