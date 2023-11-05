import fs from 'fs';
import { orderBy } from 'lodash';
import path from 'path';

const tagsWeWantToKeepOrRemap = new Map<string, string | undefined>([
  ['typescript', 'TypeScript'],
  ['webpack', undefined],
  ['Docusaurus', undefined],
  ['Bicep', undefined],
  ['ts-loader', undefined],
  ['Azure Static Web Apps', undefined],
  ['javascript', 'JavaScript'],
  ['React', undefined],
  ['GitHub Actions', undefined],
  ['AngularJS', undefined],
  ['.NET', 'ASP.NET'],
  ['azure devops', 'Azure DevOps'],
  ['C#', undefined],
  ['asp.net mvc', 'ASP.NET'],
  ['asp.net', 'ASP.NET'],
  ['Azure', undefined],
  ['fork-ts-checker-webpack-plugin', undefined],
  ['Azure Pipelines', undefined],
  ['Node.js', undefined],
  ['Azure Functions', undefined],
  ['Definitely Typed', undefined],
  ['ASP.NET', undefined],
  ['jquery', 'jQuery'],
  ['azure container apps', 'Azure Container Apps'],
  ['VS Code', undefined],
  ['unit testing', 'Automated Testing'],
  ['easy auth', 'Easy Auth'],
  ['authorization', 'Auth'],
  ['Visual Studio', undefined],
  ['TFS', 'Azure DevOps'],
  ['jQuery Validation', 'jQuery'],
  ['Bootstrap', 'JavaScript'],
  ['eslint', 'JavaScript'],
  ['JSDoc', 'TypeScript'],
  ['ARM templates', 'Azure'],
  ['Integration Testing', 'Automated Testing'],
  ['LINQ', 'C#'],
  ['ASP.Net Core', 'ASP.NET'],
  ['Entity Framework', 'SQL Server'],
  ['c#', 'C#'],
  ['npm', 'Node.js'],
  ['Globalize', undefined],
  ['Jasmine', 'Automated Testing'],
  ['cassette', 'ASP.NET'],
  ['bicep', 'Bicep'],
  ['Structured Data', 'SEO'],
  ['SEO', undefined],
  ['Azure AD', 'Azure'],
  ['Authentication', 'Auth'],
  ['tsconfig.json', 'TypeScript'],
  ['ES6', 'JavaScript'],
  ['MOQ', 'Automated Testing'],
  ['Globalization', 'Globalize'],
  ['azure-pipelines', 'Azure Pipelines'],
  ['authentication', 'Auth'],
  ['Application Insights', 'Azure'],
  ['Swashbuckle', 'Swagger'],
  ['NSwag', 'Swagger'],
  ['Azure CLI', 'Azure'],
  ['jest', 'Automated Testing'],
  ['asp net core', 'ASP.NET'],
  ['yarn', 'Node.js'],
  ['Auth0', 'Auth'],
  ['vsts', 'Azure DevOps'],
  ['Karma', 'Automated Testing'],
  ['Database Snapshots', 'SQL Server'],
  ['SQL Server', undefined],
  ['ES2015', 'JavaScript'],
  ['.NET Framework', 'ASP.NET'],
  ['Coded UI', 'Automated Testing'],
  ['gulpjs', 'Node.js'],
  ['jQuery UI', 'jQuery'],
  ['jquery unobtrusive validation', 'jQuery'],
  ['json', 'JavaScript'],
  ['jqgrid', 'jQuery'],
  ['azure-open-ai', 'Azure'],
  ['vitest', 'Automated Testing'],
  ['JSX', 'React'],
  ['Easy Auth', 'Auth'],
  ['Static Web Apps', 'Azure Static Web Apps'],
  ['Linked Backends', 'Azure Static Web Apps'],
  ['Unit Tests', 'Automated Testing'],
  ['React Router', 'React'],
  ['Azure Application Insights', 'Azure'],
  ['ECMAScript Modules', 'JavaScript'],
  ['Oryx', 'Azure'],
  ['ECMAScript', 'JavaScript'],
  ['Roslyn Analyzers', 'C#'],
  ['Azure Artifacts', 'Azure DevOps'],
  ['azure cli', 'Azure'],
  ['Role Assignments', 'Azure'],
  ['Directory.Build.props', 'ASP.NET'],
  ['esbuild', 'Node.js'],
  ['babel-loader', 'webpack'],
  ['React 18', 'React'],
  ['managed identity', 'Azure'],
  ['Swagger', undefined],
  ['open-api', 'Azure'],
  ['Azure App Service', 'Azure'],
  ['role assignments', 'Azure'],
  ['azure pipelines', 'Azure Pipelines'],
  ['useQueries', 'React'],
  ['react-query', 'React'],
  ['nullable reference types', 'C#'],
  ['react-virtual', 'React'],
  ['react-window', 'React'],
  ['create-react-app', 'React'],
  ['react-select', 'React'],
  ['dotnet', 'ASP.NET'],
  ['project references', 'ts-loader'],
  ['auth0-js', 'Auth'],
  ['cypress', 'Automated Testing'],
  ['auth', 'Auth'],
  ['OAuth', 'Auth'],
  ['dot net core', 'ASP.NET'],
  ['jsx', 'React'],
  ['stateless functional components', 'React'],
  ['ES2016', 'JavaScript'],
  ['json.net', 'ASP.NET'],
  ['DefinitelyTyped', 'TypeScript'],
  ['unit tests', 'Automated Testing'],
  ['Unit tests', 'Automated Testing'],
]);

const docusaurusDirectory = '../blog-website';

async function getBlogDirsOrderedDescending() {
  const rootBlogPath = path.resolve(docusaurusDirectory, 'blog');
  const blogDirs = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file));

  blogDirs.sort().reverse();

  return blogDirs;
}

interface BlogPost {
  path: string;
  content: string;
}

interface BlogPostWithDescription extends BlogPost {
  description: string;
}

async function generatePostsWithDescription() {
  const blogDirs = await getBlogDirsOrderedDescending();

  const postsWithoutDescription: BlogPost[] = [];

  for (const blogDir of blogDirs) {
    console.log(`Processing ${blogDir}`);

    const indexMdPath = path.join(blogDir, 'index.md');
    const blogPostContent = await fs.promises.readFile(indexMdPath, 'utf-8');

    postsWithoutDescription.push({
      path: indexMdPath,
      content: blogPostContent,
    });
  }

  console.log(`Found ${postsWithoutDescription.length} posts`);

  const postsWithTags: BlogPostWithDescription[] = [];

  // const tagsToKeep = Array.from(tagsWeWantToKeepOrRemap.entries())
  //   .map(([tag, remap]) => ({ remap, tag }))
  //   .filter(({ remap }) => remap === undefined)
  //   .map(({ tag }) => tag);

  const regex = /tags: \[(.*)\]/;

  const tagsAndTotal = new Map<string, number>();

  for (const post of postsWithoutDescription) {
    const blogShort = post.path.replace('/index.md', '').split('/').pop();
    const match = post.content.match(regex);
    if (match) {
      const tagsInBrackets = match[1]; // eg "azure-open-ai, bicep"
      const tags = tagsInBrackets.split(',').map((tag) => tag.trim());
      // console.log(`${blogShort} | tags | ${tags}`);

      const newTags = new Set(tags.map((tag) => tag.toLocaleLowerCase()));
      // const newTags = new Set(tags.filter((tag) => tagsToKeep.includes(tag)));
      // tags
      //   .filter((tag) => !tagsToKeep.includes(tag))
      //   .forEach((tag) => {
      //     const remap = tagsWeWantToKeepOrRemap.get(tag);
      //     if (tag && remap) {
      //       console.log(`${blogShort} | remapping ${tag} to ${remap}`);
      //       newTags.add(remap);
      //     }
      //   });

      newTags.forEach((tag) => {
        const currentCount = tagsAndTotal.get(tag) ?? 0;
        tagsAndTotal.set(tag, currentCount + 1);
      });
      console.log(`${blogShort} | tags | ${newTags}`);

      const newContent = post.content.replace(
        regex,
        `tags: [${[...newTags].join(', ')}]`,
      );

      await fs.promises.writeFile(post.path, newContent);
      // break;
    } else {
      console.log(`${blogShort} | no tags found`);
    }
    // break;
  }

  const tagsAndTotalArray = orderBy(
    Array.from(tagsAndTotal.entries()).map(([tag, total]) => ({ tag, total })),
    ({ total }) => total,
    'desc',
  );

  tagsAndTotalArray.forEach(({ tag, total }) => {
    console.log(`['${tag}', ${total}],`);
  });

  return postsWithTags;
}

async function main() {
  const startedAt = new Date();

  const postsWithDescription: BlogPostWithDescription[] =
    await generatePostsWithDescription();

  const finishedAt = new Date();
  const duration = (finishedAt.getTime() - startedAt.getTime()) / 1000;
  console.log(
    `${postsWithDescription.length} summaries generated in ${duration} seconds`,
  );
}

await main();
