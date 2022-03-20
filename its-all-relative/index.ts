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

  if (!fs.existsSync(blogPath)) {
    console.log(`Creating directory: ${blogPath}`);
    fs.mkdirSync(blogPath);
  }

  const blogPostPath = `${blogPath}/index.md`;

  const images = fs
    .readdirSync(blogPath)
    .filter((file) => !file.endsWith('.md') && file.includes('%2B'));

  const oldToTheNew = images.map((oldName) => {
    const newName = oldName.replaceAll('%2B', '-');
    console.log(`renaming ${oldName} to ${newName}`);
    fs.renameSync(path.resolve(blogPath, oldName), `${blogPath}/${newName}`);
    console.log(`✅ renamed ${oldName} to ${newName}`);

    return { oldName, newName };
  });

  const blogPostContent = fs.readFileSync(blogPostPath, 'utf-8');

  console.log(`updating blog ${blogDir}`);
  const updated = blogPostContent.replaceAll('%2B', '-');

  fs.writeFileSync(blogPostPath, updated);
  console.log(`✅ updating blog ${blogDir}`);
}

// do it!
run();
