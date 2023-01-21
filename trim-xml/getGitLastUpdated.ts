import path from 'path';
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const dateBlogUrlRegEx = /(\d\d\d\d\/\d\d\/\d\d)\/(.+)/;

export function getBlogPathFromUrl(
  rootUrl: string,
  url: string
): string | undefined {
  // example url.loc: https://blog.johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants
  const pathWithoutRootUrl = url.replace(rootUrl + '/', ''); // eg 2012/01/07/standing-on-shoulders-of-giants

  const match = pathWithoutRootUrl.match(dateBlogUrlRegEx);

  if (!match || !match[1] || !match[2]) {
    // failed to match archive null
    // failed to match blog-archive null
    // failed to match definitely-typed-the-movie null
    // failed to match definitive-guide-to-migrating-from-blogger-to-docusaurus null
    // failed to match search null
    // failed to match talks null
    console.log(
      'cannot look up blog path as failed to match',
      pathWithoutRootUrl,
      match !== null ? match : undefined
    );
    return undefined;
  }

  const date = match[1].replaceAll('/', '-'); // eg 2012-01-07
  const slug = match[2]; // eg standing-on-shoulders-of-giants

  const file = `blog-website/blog/${date}-${slug}/index.md`;
  return file;
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
