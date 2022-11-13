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
const author_image_url = 'https://blog.johnnyreilly.com/img/profile.jpg';

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
 *   image_url: https://blog.johnnyreilly.com/img/profile.jpg
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
    // convert <!-- into <!---
    .replace(/<!--/gi, '\n<!---\n')
    .replace(/-->/gi, '\n--->\n');
  const images: string[] = [];
  const dom = new jsdom.JSDOM(contentProcessed);
  let markdown = '';
  try {
    markdown = converter
      .makeMarkdown(contentProcessed, dom.window.document)
      // bigger titles
      .replace(/#### /g, '## ')

      // <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/l7JDTHpsXM26k" width="100%" height="100%" style="position:absolute" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe></div>

      // The mechanism below extracts the underlying iframe
      .replace(/<div.*(<iframe.*">).*<\/div>/g, (replacer) => {
        const dom = new jsdom.JSDOM(replacer);
        const iframe = dom?.window?.document?.querySelector('iframe');
        return iframe?.outerHTML ?? '';
      })

      // The mechanism below strips class and style attributes from iframes - react hates them
      .replace(/<iframe.*<\/iframe>/g, (replacer) => {
        const dom = new jsdom.JSDOM(replacer);
        const iframe = dom?.window?.document?.querySelector('iframe');
        iframe?.removeAttribute('class');
        iframe?.removeAttribute('style');
        return iframe?.outerHTML ?? '';
      })

      // capitalise appropriately
      .replace(/frameborder/g, 'frameBorder')
      .replace(/allowfullscreen/g, 'allowFullScreen')
      .replace(/charset/g, 'charSet')

      // Deals with these:
      // [![null](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s640/hello_world_idb_keyval.png> =640x484)](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s1600/hello_world_idb_keyval.png>)We successfully wrote something into IndexedDB, read it back and printed that value to the console. Amazing!
      .replace(
        /\[!\[null\]\(<(.*?)\].*?>\)/g,
        (match) =>
          `![](${match.slice(match.indexOf('<') + 1, match.indexOf('>'))})\n\n`
      )

      // Blogger tends to put images in HTML that looks like this:
      // <div class="separator" style="clear: both;"><a href="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s783/traffic-to-app-service.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="traffic to app service" border="0" width="600" data-original-height="753" data-original-width="783" src="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s600/traffic-to-app-service.png"></a></div>

      // The mechanism below extracts the underlying image path and it's alt text
      .replace(
        /(<div.*>)*\w*(<a .*>)*(<img .*">)(<\/a>)*.*(<\/div>)*/g,
        (replacer) => {
          const div = new jsdom.JSDOM(replacer);
          const img = div?.window?.document?.querySelector('img');
          const alt = img?.getAttribute('alt') ?? '';
          const src = img?.getAttribute('src') ?? '';

          if (src) images.push(src);

          return `![${alt}](${src})`;
        }
      );
  } catch (e) {
    console.log(post.link);
    console.log(e);
    notMarkdownable.push(post.link);
    return;
  }

  for (const url of images) {
    try {
      const localUrl = await downloadImage(url, blogdirPath);
      markdown = markdown.replace(url, localUrl);
    } catch (e) {
      console.error(`Failed to download ${url}`);
    }
  }

  const content = `---
title: "${post.title}"
authors: ${author}
tags: [${post.tags.join(', ')}]
hide_table_of_contents: false
---
${markdown}
`;

  await fs.promises.writeFile(
    path.resolve(docusaurusDirectory, 'blog', blogdirPath, 'index.md'),
    content
  );
}

async function downloadImage(url: string, directory: string) {
  console.log(`Downloading ${url}`);
  const pathParts = new URL(url).pathname.split('/');
  const filename = decodeURIComponent(pathParts[pathParts.length - 1]);

  const pathTo = path.join(directory, filename);

  const writer = fs.createWriteStream(pathTo);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise<string>((resolve, reject) => {
    writer.on('finish', () => resolve(filename));
    writer.on('error', reject);
  });
}

interface Post {
  title: string;
  content: string;
  published: string;
  link: string;
  tags: string[];
}

// do it!
makePostsFromXML();
