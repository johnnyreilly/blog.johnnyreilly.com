import fs from 'fs';
import path from 'path';
import util from 'util';
import { exec } from 'child_process';
const execP = util.promisify(exec);

const docusaurusDirectory = '../blog-website';

interface IndexMdAndImagePaths {
  indexMdPath: string;
  imagePath: string;
}

async function getImageFiles(): Promise<IndexMdAndImagePaths[]> {
  const blogDirs = (
    await fs.promises.readdir(path.resolve(docusaurusDirectory, 'blog'))
  ).filter((file) =>
    fs.statSync(path.resolve(docusaurusDirectory, 'blog', file)).isDirectory()
  );

  const imageFiles = blogDirs.flatMap((dir) =>
    getImageFilesAndIndexMdFromDirectory(dir)
  );

  imageFiles.reverse();

  return imageFiles;
}

function getImageFilesAndIndexMdFromDirectory(
  dir: string
): IndexMdAndImagePaths[] {
  return fs
    .readdirSync(path.resolve(docusaurusDirectory, 'blog', dir))
    .filter(
      (file) =>
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        // file.endsWith('.gif') ||
        file.endsWith('.png')
    )
    .map((file) => ({
      indexMdPath: path.resolve(docusaurusDirectory, 'blog', dir, 'index.md'),
      imagePath: path.resolve(docusaurusDirectory, 'blog', dir, file),
    }));
}

async function sleep(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

async function processImageFiles(imageFiles: IndexMdAndImagePaths[]) {
  console.log(`Found ${imageFiles.length} image files`);
  let processed = 0;
  let failed: IndexMdAndImagePaths[] = [];

  for (const file of imageFiles) {
    try {
      const dirName = path.dirname(file.imagePath);
      const imageWithoutPath = path.basename(file.imagePath);
      const imageWithoutPathAndExt = path.basename(
        file.imagePath,
        path.extname(file.imagePath)
      );
      const webpImage = `${imageWithoutPathAndExt}.webp`;

      console.log(`
- Processing ${file.imagePath}`);
      const command = `cwebp ${dirName}/${imageWithoutPath} -lossless -m 6 -q 100 -o ${dirName}/${webpImage}`;
      const { stdout, stderr } = await execP(command);

      const blogPostContent = await fs.promises.readFile(
        file.indexMdPath,
        'utf-8'
      );

      await fs.promises.writeFile(
        file.indexMdPath,
        blogPostContent.replaceAll(imageWithoutPath, webpImage)
      );

      await fs.promises.unlink(file.imagePath);

      console.log(`✅ Processed! (${++processed} of ${imageFiles.length})`);
      break;
    } catch (e) {
      console.log(`❌ Failed to process ${file}`);
      failed.push(file);
    }
    await sleep(1000);
  }

  if (failed.length > 0) console.log('Failed to process', failed.length);

  console.log('Done!');
}

async function run() {
  const blogDir = process.env.BLOG_DIR;

  const imageFiles = blogDir
    ? getImageFilesAndIndexMdFromDirectory(blogDir)
    : await getImageFiles();

  await processImageFiles(imageFiles);
}

// do it!
run();
