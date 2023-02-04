import fs from 'fs';
import path from 'path';
import { redirectsBlogger } from './redirectsBlogger';
import { redirectsBacklinks } from './redirectsBacklinks';

const docusaurusDirectory = '../blog-website';

async function run() {
  const blogDirectories = fs
    .readdirSync(path.resolve(docusaurusDirectory, 'blog'))
    .filter((file) =>
      fs.statSync(path.resolve(docusaurusDirectory, 'blog', file)).isDirectory()
    );

  const oldToNew = new Map<
    string,
    {
      dateUrl: string;
      slug: string;
    }
  >(blogDirectories.map(getOldAndNewUrl));

  const dateDocusaurusUrlToNew = new Map(
    [...oldToNew.values()].map(({ dateUrl, slug }) => [dateUrl, slug])
  );

  const redirectsDocusaurusDateToNoDate = [...oldToNew.values()].map(
    ({ dateUrl, slug }) => ({
      route: dateUrl,
      redirect: '/' + slug,
    })
  );

  fs.writeFileSync(
    path.resolve(
      docusaurusDirectory,
      'api',
      'fallback',
      'redirectsDocusaurusDateToNoDate.js'
    ),
    `const redirectsDocusaurusDateToNoDate = ${JSON.stringify(
      redirectsDocusaurusDateToNoDate,
      null,
      2
    )};
  
module.exports = redirectsDocusaurusDateToNoDate;
`
  );

  const updatedRedirectsBlogger = redirectsBlogger.map(
    ({ redirect, route }) => ({
      route,
      redirect: '/' + dateDocusaurusUrlToNew.get(redirect) ?? '',
    })
  );

  const updatedRedirectsBacklinks = redirectsBacklinks.map(
    ({ redirect, route }) => ({
      route,
      redirect: dateDocusaurusUrlToNew.has(redirect)
        ? '/' + dateDocusaurusUrlToNew.get(redirect)
        : redirect,
    })
  );

  for (const [blogDir, { slug }] of oldToNew) {
    addSlugToBlog({ blogDir, slug });
  }

  fs.writeFileSync(
    path.resolve(docusaurusDirectory, 'api', 'fallback', 'redirectsBlogger.js'),
    `const redirectsBlogger = ${JSON.stringify(
      updatedRedirectsBlogger,
      null,
      2
    )};
  
module.exports = redirectsBlogger;
`
  );

  fs.writeFileSync(
    path.resolve(
      docusaurusDirectory,
      'api',
      'fallback',
      'redirectsBacklinks.js'
    ),
    `const redirectsBacklinks = ${JSON.stringify(
      updatedRedirectsBacklinks,
      null,
      2
    )};
  
module.exports = redirectsBacklinks;
`
  );

  // console.log(
  //   updatedRedirectsBacklinks
  //    .filter(x => x.redirect.length < 5)
  // );
}

function getOldAndNewUrl(blogDir: string) {
  const [year, month, date] = blogDir.substring(0, 10).split('-');
  const slug = blogDir.substring(11);
  const dateUrl = `/${year}/${month}/${date}/${slug}`;
  return [blogDir, { dateUrl, slug }] as const;
}

function addSlugToBlog({ blogDir, slug }: { blogDir: string; slug: string }) {
  const blogPath = path.resolve(docusaurusDirectory, 'blog', blogDir);

  const blogPostPath = `${blogPath}/index.md`;

  // const images = fs
  //   .readdirSync(blogPath)
  //   .filter((file) => !file.endsWith('.md') && file.includes('%2B'));

  // const oldToTheNew = images.map((oldName) => {
  //   const newName = oldName.replaceAll('%2B', '-');
  //   console.log(`renaming ${oldName} to ${newName}`);
  //   fs.renameSync(path.resolve(blogPath, oldName), `${blogPath}/${newName}`);
  //   console.log(`✅ renamed ${oldName} to ${newName}`);

  //   return { oldName, newName };
  // });

  const blogPostContent = fs.readFileSync(blogPostPath, 'utf-8');

  if (
    !blogPostContent.startsWith(`---
title: `)
  )
    throw new Error(blogDir);

  // if (blogPostContent.match(urlRegex) === null) return;

  console.log(`updating ${blogDir} with slug: ${slug}`);

  // let updated = blogPostContent.replace(urlRegex, replacer);
  // while (updated.match(urlRegex) !== null) {
  //   console.log(`updating...`);
  //   updated = blogPostContent.replace(urlRegex, replacer);
  // }
  // console.log(newString);  // abc - 12345 - #$*%

  const updated = blogPostContent.replace(
    `---
title: `,
    `---
slug: ${slug}
title: `
  );

  fs.writeFileSync(blogPostPath, updated);
  console.log(`✅ updated blog ${blogDir}`);

  // throw new Error('done');
}

const urlRegex =
  /`<a href="([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))">([^`]*)<\/a>`/;

function replacer(
  match: string,
  url: string,
  _: string,
  text: string,
  offset: any,
  string: string
) {
  // console.log('args', arguments)
  return `[\`${text}\`](${url})`;
}

// do it!
run();
