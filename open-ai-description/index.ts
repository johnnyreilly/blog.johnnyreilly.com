import fs from 'fs';
import path from 'path';
import { produceSummary } from './summarizer';

const docusaurusDirectory = '../blog-website';

async function getBlogDirsOrderedDescending() {
  const rootBlogPath = path.resolve(docusaurusDirectory, 'blog');
  const blogDirs = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file));

  blogDirs.sort().reverse();

  return blogDirs;
}

interface BlogPost {
  path: string;
  content: string;
}

interface BlogPostWithDescription extends BlogPost {
  description: string;
}

async function generatePostsWithDescription() {
  const blogDirs = await getBlogDirsOrderedDescending();

  const postsWithoutDescription: BlogPost[] = [];

  for (const blogDir of blogDirs) {
    console.log(`Processing ${blogDir}`);

    const indexMdPath = path.join(blogDir, 'index.md');
    const blogPostContent = await fs.promises.readFile(indexMdPath, 'utf-8');

    const frontMatter = blogPostContent.split('---')[1];
    const hasDescription = frontMatter.includes('\ndescription: ');
    if (!hasDescription) {
      postsWithoutDescription.push({
        path: indexMdPath,
        content: blogPostContent,
      });
    }
  }

  console.log(
    `Found ${postsWithoutDescription.length} posts without description`,
  );

  const postsWithDescription: BlogPostWithDescription[] = [];

  for (const post of postsWithoutDescription) {
    const [, frontmatter, article] = post.content.split('---');

    console.log(
      `** Generating description for ${post.path
        .replace('/index.md', '')
        .split('/')
        .pop()}`,
    );
    const description = await produceSummary(article);

    if (description) {
      postsWithDescription.push({ ...post, description });
      console.log(`** description: ${description}`);

      await fs.promises.writeFile(
        post.path,
        `---${frontmatter}description: '${description.replaceAll("'", '')}'
---${article}`,
      );
    } else {
      console.log(`** no description generated`);
    }

    // break;
  }

  return postsWithDescription;
}

async function main() {
  const startedAt = new Date();

  const postsWithDescription: BlogPostWithDescription[] =
    await generatePostsWithDescription();

  const finishedAt = new Date();
  const duration = (finishedAt.getTime() - startedAt.getTime()) / 1000;
  console.log(
    `${postsWithDescription.length} summaries generated in ${duration} seconds`,
  );
}

await main();
