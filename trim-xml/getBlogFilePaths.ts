import fs from 'fs';
import path from 'path';

let blogFilePaths: string[] | undefined;
export function getBlogFilePaths() {
  if (blogFilePaths) {
    return blogFilePaths;
  }

  blogFilePaths = fs
    .readdirSync(path.resolve('..', 'blog-website', 'blog'))
    .filter((dir) =>
      fs.statSync(path.resolve('..', 'blog-website', 'blog', dir)).isDirectory()
    )
    .map((dir) => path.resolve('..', 'blog-website', 'blog', dir, 'index.md'));

  return blogFilePaths;
}
