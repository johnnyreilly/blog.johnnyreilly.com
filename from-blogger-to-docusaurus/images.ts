import fs from 'fs';
import path from 'path';
import axios from 'axios';

const docusaurusDirectory = '../blog-website';
const docusaurusBlogDirectory = '../blog-website/blog';
const imagesToDownloadRegex = /!\[.*\]\((http.*blogspot.*)\)/gi;
const wonkyUrlsRegex = /\[(.*)\]\(<(.*)>\)/gi;

async function importImages() {
  const posts = await getPosts();

  for (const [blogPostName, blogPostContent] of posts) {
    await makePostIntoMarkDownAndDownloadImages(blogPostName, blogPostContent);
    // await fixWonkyUrls(blogPostName, blogPostContent);
  }
}

async function getPosts(): Promise<Map<string, string>> {
  const blogPosts = await fs.promises.readdir(docusaurusBlogDirectory);
  const blogPostsByName = new Map<string, string>();

  for (const blogPostName of blogPosts) {
    const blogPostContent = await fs.promises.readFile(
      path.join(docusaurusBlogDirectory, blogPostName),
      'utf-8'
    );

    blogPostsByName.set(blogPostName, blogPostContent);
  }

  return blogPostsByName;
}

async function makePostIntoMarkDownAndDownloadImages(
  blogPostName: string,
  blogPostContent: string
) {
  const matches = blogPostContent.matchAll(imagesToDownloadRegex);
  const imageUrls = [];
  for (const match of matches) {
    const [_fullMatch, imageUrl] = match;
    imageUrls.push(imageUrl);
  }

  if (imageUrls.length === 0) return;

  const imageDirectory = blogPostName.replace('.md', '');
  for (const url of imageUrls) {
    try {
      const localUrl = await downloadImage(url, imageDirectory);

      blogPostContent = blogPostContent.replace(
        url,
        '../static/blog/' + localUrl
      );

      //   console.log(`${blogPostName}: ${blogPostContent.length} chars`);
    } catch (e) {
      console.error(`Failed to download ${url}`);
    }
  }

  await fs.promises.writeFile(
    path.resolve(docusaurusDirectory, 'blog', blogPostName),
    blogPostContent
  );
}

async function fixWonkyUrls(blogPostName: string, blogPostContent: string) {
  const matches = blogPostContent.matchAll(wonkyUrlsRegex);
  const textAndUrls: { fullMatch: string; text: string; url: string }[] = [];
  for (const match of matches) {
    const [fullMatch, text, url] = match;
    textAndUrls.push({ fullMatch, text, url });
  }

  if (textAndUrls.length === 0) return;

  for (const { fullMatch, text, url } of textAndUrls) {
    blogPostContent = blogPostContent.replace(fullMatch, `[${text}](${url})`);
  }

  await fs.promises.writeFile(
    path.resolve(docusaurusDirectory, 'blog', blogPostName),
    blogPostContent
  );
}

async function downloadImage(url: string, directory: string) {
  console.log(`Downloading ${url}`);
  const pathParts = new URL(url).pathname.split('/');
  const filename = pathParts[pathParts.length - 1];
  const directoryTo = path.resolve(
    docusaurusDirectory,
    'static',
    'blog',
    directory
  );
  const pathTo = path.resolve(
    docusaurusDirectory,
    'static',
    'blog',
    directory,
    filename
  );

  if (!fs.existsSync(directoryTo)) {
    fs.mkdirSync(directoryTo);
  }

  const writer = fs.createWriteStream(pathTo);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise<string>((resolve, reject) => {
    writer.on('finish', () => resolve(directory + '/' + filename));
    writer.on('error', reject);
  });
}

// do it!
importImages();
