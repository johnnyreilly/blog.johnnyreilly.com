import fs from 'fs';
import path from 'path';
import tinify from 'tinify';

function setUpTinify() {
  if (!process.env.TINIFY_KEY) {
    console.log(
      'Run with: TINIFY_KEY=$YOUR_API_KEY BLOG_DIR=$YOUR_BLOG_DIRECTORY yarn start'
    );
    process.exit(1);
  }

  tinify.key = process.env.TINIFY_KEY;
}

const docusaurusDirectory = '../blog-website';

async function getImageFiles() {
  const blogDirs = (
    await fs.promises.readdir(path.resolve(docusaurusDirectory, 'blog'))
  ).filter((file) =>
    fs.statSync(path.resolve(docusaurusDirectory, 'blog', file)).isDirectory()
  );

  const imageFiles = blogDirs.flatMap((dir) => getImageFilesFromDirectory(dir));

  imageFiles.reverse();

  return imageFiles;
}

function getImageFilesFromDirectory(dir: string) {
  return fs
    .readdirSync(path.resolve(docusaurusDirectory, 'blog', dir))
    .filter(
      (file) =>
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        // file.endsWith('.gif') ||
        file.endsWith('.png')
    )
    .map((file) => path.resolve(docusaurusDirectory, 'blog', dir, file))
    .filter((file) => fs.statSync(file).size > 0);
}

async function sleep(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

async function processImageFiles(imageFiles: string[]) {
  console.log(`Found ${imageFiles.length} image files`);
  let processed = 0;
  let failed: string[] = [];

  for (const file of imageFiles) {
    try {
      console.log(`
- Processing ${file}`);
      tinify.fromFile(file).toFile(file);
      console.log(`✅ Processed! (${++processed} of ${imageFiles.length})`);
    } catch (e) {
      console.log(`❌ Failed to process ${file}`);
      failed.push(file);
    }
    await sleep(1000);
  }

  if (failed.length > 0) console.log('Failed to process', failed);

  console.log('Done!');
}

async function run() {
  setUpTinify();

  const blogDir = process.env.BLOG_DIR;

  if (!blogDir) {
    console.log(
      'Run with: TINIFY_KEY=$YOUR_API_KEY BLOG_DIR=$YOUR_BLOG_DIRECTORY yarn start'
    );
    process.exit(1);
  }

  const imageFiles = await getImageFilesFromDirectory(blogDir);
  // const imageFiles = await getImageFiles();

  await processImageFiles(imageFiles);
}

// do it!
run();
