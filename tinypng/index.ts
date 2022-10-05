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

async function getBlogDirsOrderedDescending() {
  const blogDirs = (
    await fs.promises.readdir(path.resolve(docusaurusDirectory, 'blog'))
  ).filter((file) =>
    fs.statSync(path.resolve(docusaurusDirectory, 'blog', file)).isDirectory()
  );

  blogDirs.sort().reverse();

  return blogDirs;
}

async function getImageFiles() {
  const blogDirs = await getBlogDirsOrderedDescending();

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
        file.endsWith('.webp') ||
        file.endsWith('.png')
    )
    .map((file) => path.resolve(docusaurusDirectory, 'blog', dir, file))
    .filter((file) => fs.statSync(file).size > 0);
}

async function sleep(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

async function processImageFiles(imageFiles: string[]) {
  let processed = 0;
  let failed: string[] = [];

  for (const imageFilePath of imageFiles) {
    try {
      console.log(`
- Processing ${imageFilePath}`);
      const originalImageFilePrefix = imageFilePath.substring(
        0,
        imageFilePath.lastIndexOf('.')
      );
      const originalImageFileExtension = imageFilePath.substring(
        imageFilePath.lastIndexOf('.') + 1
      );

      const source = tinify.fromFile(imageFilePath);
      const converted = source.convert({ type: ['image/webp', 'image/png'] });
      const convertedExtension = await converted.result().extension();
      const newImageFilePath = `${originalImageFilePrefix}.${convertedExtension}`;
      await converted.toFile(newImageFilePath);

      const imageFileName = path.basename(imageFilePath);
      const newImageFileName = path.basename(newImageFilePath);
      if (imageFileName !== newImageFileName) {
        await updateBlogPostImageReferences({
          originalImageFileExtension,
          convertedExtension,
          imageFilePath,
          imageFileName,
          newImageFileName,
        });
      }

      console.log(`✅ Processed! (${++processed} of ${imageFiles.length})`);
    } catch (e) {
      console.log(`❌ Failed to process ${imageFilePath}`);
      failed.push(imageFilePath);
    }
    await sleep(1000);
  }

  if (failed.length > 0) console.log('Failed to process', failed);

  console.log('Done!');
}

async function updateBlogPostImageReferences({
  originalImageFileExtension,
  convertedExtension,
  imageFilePath,
  imageFileName,
  newImageFileName,
}: {
  originalImageFileExtension: string;
  convertedExtension: string | void;
  imageFilePath: string;
  imageFileName: string;
  newImageFileName: string;
}) {
  console.log(
    `File converted from ${originalImageFileExtension} to ${convertedExtension} - will update blog post`
  );
  const directory = path.dirname(imageFilePath);

  const indexMdPath = path.join(directory, 'index.md');
  const blogPostContent = await fs.promises.readFile(indexMdPath, 'utf-8');

  await fs.promises.writeFile(
    indexMdPath,
    blogPostContent.replaceAll(imageFileName, newImageFileName)
  );
  console.log(`Blog post updated: ${indexMdPath}`);

  await fs.promises.unlink(imageFilePath);
  console.log(`Deleted original image: ${imageFilePath}`);
}

async function run() {
  setUpTinify();

  let directory = '';

  if (process.env.BLOG_DIR) {
    directory = process.env.BLOG_DIR;
  } else {
    const blogDirs = await getBlogDirsOrderedDescending();
    if (blogDirs.length === 0) {
      console.log(`No blog directories found`);
      process.exit(1);
    } else {
      directory = blogDirs[0];
    }
  }

  const imageFiles = await getImageFilesFromDirectory(directory);
  console.log(`Found ${imageFiles.length} image files in ${directory}`);
  await processImageFiles(imageFiles);
}

// do it!
run();
