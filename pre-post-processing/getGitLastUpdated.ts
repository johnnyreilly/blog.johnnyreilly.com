import path from 'path';
import fs from 'fs';
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const dateBlogUrlRegEx = /(\d\d\d\d\/\d\d\/\d\d)\/(.+)/;
const slugBlogUrlRegEx = /slug: (.*)\n/;

let slugToPath: Map<string, string> | undefined;
function getSlugToPath() {
  if (slugToPath) return slugToPath;

  const directories = fs
    .readdirSync(`../blog-website/blog/`, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const pathAndSlug = directories.map((dir) => {
    let blogPath = `blog-website/blog/${dir}/index.md`;

    let blogMd: string;
    try {
      blogMd = fs.readFileSync(`../${blogPath}`, 'utf8');
    } catch (e) {
      blogPath = `blog-website/blog/${dir}/index.mdx`;
      blogMd = fs.readFileSync(`../${blogPath}`, 'utf8');
    }

    const match = blogMd.match(slugBlogUrlRegEx);

    const slug = match && match[1] ? match[1] : '';

    return { slug, blogPath, dir };
  });

  const missingSlugs = pathAndSlug.filter(({ slug }) => !slug);

  if (missingSlugs.length > 0) {
    console.log('missing slugs', missingSlugs);
    throw new Error('missing slugs');
  }

  const slugsThatDontMatchPath = pathAndSlug.filter(
    ({ slug, dir }) => slug !== dir.substring(11),
  );

  if (slugsThatDontMatchPath.length > 0) {
    console.log('slugsThatDontMatchPath', slugsThatDontMatchPath);
    throw new Error('slugsThatDontMatchPath');
  }

  slugToPath = new Map(
    pathAndSlug
      .filter(({ slug }) => Boolean(slug))
      .map(({ slug, blogPath }) => [slug, blogPath]),
  );

  return slugToPath;
}

export function getBlogPathFromUrl(
  rootUrl: string,
  /** eg https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants */
  url: string,
): string | undefined {
  // eg url.loc: https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants
  const pathWithoutRootUrl = url.replace(rootUrl + '/', ''); // eg 2012/01/07/standing-on-shoulders-of-giants

  // eg lighthouse-meet-github-actions
  const slugToPath = getSlugToPath();
  const blogPath = slugToPath.get(pathWithoutRootUrl);
  if (blogPath) {
    return blogPath;
  }

  const match = pathWithoutRootUrl.match(dateBlogUrlRegEx);

  if (match && match[1] && match[2]) {
    const date = match[1].replaceAll('/', '-'); // eg 2012-01-07
    const slug = match[2]; // eg standing-on-shoulders-of-giants

    const blogPath = `blog-website/blog/${date}-${slug}/index.md`;
    return blogPath;
  }

  // failed to match archive null
  // failed to match blog-archive null
  // failed to match definitely-typed-the-movie null
  // failed to match definitive-guide-to-migrating-from-blogger-to-docusaurus null
  // failed to match search null
  // failed to match talks null
  console.log(
    'cannot look up blog path as failed to match',
    pathWithoutRootUrl,
    match !== null ? match : undefined,
  );
  return undefined;
}

export function getPagesPathFromUrl(
  rootUrl: string,
  /** eg https://johnnyreilly.com/about */
  url: string,
): string | undefined {
  // eg url.loc: https://johnnyreilly.com/about
  const pathWithoutRootUrl = url.replace(rootUrl + '/', ''); // eg about

  const blogPath = `blog-website/src/pages/${pathWithoutRootUrl}.js`;

  try {
    const pageSrc = fs.readFileSync(`../${blogPath}`, 'utf8');
    return blogPath;
  } catch (e) {
    console.log('cannot look up pages path', blogPath);
    return undefined;
  }
}

export async function getGitLastUpdatedFromFilePath(filePath: string) {
  const git = getSimpleGit();

  const log = await git.log({
    file: filePath,
  });

  const lastmod = log.latest?.date;

  return lastmod;
}

let git: SimpleGit | undefined;
export function getSimpleGit(): SimpleGit {
  if (!git) {
    const baseDir = path.resolve(process.cwd(), '..');

    const options: Partial<SimpleGitOptions> = {
      baseDir,
      binary: 'git',
      maxConcurrentProcesses: 6,
      trimmed: false,
    };

    git = simpleGit(options);
  }

  return git;
}
