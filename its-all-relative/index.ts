import fs from 'fs';
import path from 'path';

const docusaurusDirectory = '../blog-website';

async function run() {
  const blogDirectories = fs
    .readdirSync(path.resolve(docusaurusDirectory, 'blog'))
    .filter((file) =>
      fs.statSync(path.resolve(docusaurusDirectory, 'blog', file)).isDirectory()
    );

  // colocate(files[files.length - 1]);
  blogDirectories.forEach(fixUp);
}

function fixUp(blogDir: string) {
  const blogPath = path.resolve(docusaurusDirectory, 'blog', blogDir);

  // if (!fs.existsSync(blogPath)) {
  //   console.log(`Creating directory: ${blogPath}`);
  //   fs.mkdirSync(blogPath);
  // }

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

  if (blogPostContent.match(urlRegex) === null) return;

  console.log(`updating blog ${blogDir}`);

  let updated = blogPostContent.replace(urlRegex, replacer);
  // while (updated.match(urlRegex) !== null) {
  //   console.log(`updating...`);
  //   updated = blogPostContent.replace(urlRegex, replacer);
  // }
  // console.log(newString);  // abc - 12345 - #$*%

  // const updated = blogPostContent.replaceAll('%2B', '-');

  fs.writeFileSync(blogPostPath, updated);
  // throw new Error('fgh')
  console.log(`✅ updated blog ${blogDir}`);
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
