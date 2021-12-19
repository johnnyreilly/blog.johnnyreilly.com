import fs from 'fs';
import path from 'path';

const docusaurusDirectory = '../blog-website';

async function run() {
  const files = fs
    .readdirSync(path.resolve(docusaurusDirectory, 'blog'))
    .filter(
      (file) =>
        file.endsWith('.md') &&
        !fs
          .statSync(path.resolve(docusaurusDirectory, 'blog', file))
          .isDirectory()
    );

  files.forEach(colocate);
}

function colocate(file: string) {
  const nameWithoutMd = file.split('.md')[0];
  const directoryTo = path.resolve(docusaurusDirectory, 'blog', nameWithoutMd);
  console.log(`Creating directory: ${directoryTo}`);

  const imagesDir = path.resolve(
    docusaurusDirectory,
    'static',
    'blog',
    nameWithoutMd
  );

  const images = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir) : [];

  // console.log(images);
  // return;
  // throw new Error('dfghj')

  if (!fs.existsSync(directoryTo)) {
    fs.mkdirSync(directoryTo);
  }

  const blogPostPath = `${directoryTo}/index.md`;
  fs.renameSync(path.resolve(docusaurusDirectory, 'blog', file), blogPostPath);

  images.forEach((image) =>
    fs.renameSync(path.resolve(imagesDir, image), `${directoryTo}/image`)
  );

  const blogPostContent = fs.readFileSync(blogPostPath, 'utf-8');

  const updated = blogPostContent
    .replaceAll(`blog/${nameWithoutMd}/`, '')
    .replaceAll('../static', '');

  fs.writeFileSync(blogPostPath, updated);
}

// do it!
run();
