import fs from "fs";
import path from "path";
import showdown from "showdown";
import { google } from "googleapis";
import { parseMarkdownFile } from "@docusaurus/utils";
import { getArgs, makeOAuth2Client } from "./common";
import { formatRFC3339, startOfDay, endOfDay } from "date-fns";

const docusaurusBlogDirectory = "../blog-website/blog";
const blogId = "3759615474523601615";
const staticImageCdnRoot =
  "https://raw.githubusercontent.com/johnnyreilly/blog.johnnyreilly.com/main/blog-website/static/blog/";
const startDateOfPostsToCreateAndUpdate = "2021-03-07";

async function publishToBlogger() {
  const blogPostsToPublish = await getBlogPostsToPublish();

  for (const docusaurusPath of blogPostsToPublish) {
    const { frontMatter, content } = await parseMarkdownFile(
      path.join(docusaurusBlogDirectory, docusaurusPath)
    );
    const title = frontMatter["title"] as string;
    const tags = frontMatter["tags"] as string[];

    if (!content || !title || !tags)
      throw new Error(`Problem with ${docusaurusPath}`);

    const converter = new showdown.Converter({
      ghCodeBlocks: true,
    });
    const contentHtml = converter
      .makeHtml(
        content.replace(/## /g, "#### ") // h2 -> h4
      )
      .replace(/..\/static\/blog\//g, staticImageCdnRoot)
      .replace(/<img /g, '<img style="max-width: 100%;" ');

    const post = await getPostByPath(docusaurusPath);

    const { test } = getArgs();
    if (test) {
      console.log(
        `[TEST] Would otherwise ${
          post
            ? `update ${post.url} based on ${docusaurusPath}`
            : `create a new post based on ${docusaurusPath}`
        }

${content}
`
      );
      continue;
    }

    // console.log(post)
    if (post && post.id && post.url) {
      const updatedPost = await updateBlog({
        docusaurusPath,
        postId: post.id,
        url: post.url,
        title,
        tags,
        content: contentHtml,
      });
    } else {
      const newPost = await postBlog({
        docusaurusPath,
        title,
        tags,
        content: contentHtml,
      });
    }
  }
}

async function getPostByPath(docusaurusPath: string) {
  const blogger = makeBloggerClient();

  const year = docusaurusPath.substring(0, 4);
  const month = docusaurusPath.substring(5, 7);
  const date = docusaurusPath.substring(8, 10);
  const url = makeBloggerPathFromDocusaurusPath(docusaurusPath);
  const path = `/${year}/${month}/${url}.html`;
  console.log(`Attempting to load ${path} by path`);

  try {
    const post = await blogger.posts.getByPath({ blogId, path });

    if (post) {
      console.log(`Found Blogger post by path "${path}"\n`);
      return post.data;
    }
  } catch {
    console.log(`Unable to load ${path} by path - will lookup by date`);
  }

  const dateInMonth = new Date(`${year}-${month}-${date}`);
  const startDate = formatRFC3339(startOfDay(dateInMonth));
  const endDate = formatRFC3339(endOfDay(dateInMonth));

  const monthPosts = await blogger.posts.list({
    blogId,
    startDate,
    endDate,
    maxResults: 10,
    fetchBodies: false,
    fetchImages: false,
  });

  if (!monthPosts.data.items) {
    console.log(
      `Unable to look up Blogger post matching ${docusaurusPath} between ${startDate} and ${endDate}`
    );
    return null;
  }

  console.log(
    `Looking for Blogger post matching ${docusaurusPath} amongst the following posts:\n${monthPosts.data?.items
      ?.map((post) => `- ${post.url}`)
      .join("\n")}\n`
  );

  let numCharacters = url.length > 6 ? 6 : 0; // start with at least 6 characters
  while (
    monthPosts.data.items &&
    monthPosts.data.items.length > 0 &&
    numCharacters < url.length
  ) {
    numCharacters += 1;
    const lookFor = url.substr(0, numCharacters);

    const matches = monthPosts.data.items.filter((post) => {
      const postSegments = post.url!.split("/");
      const lastSegment = postSegments[postSegments.length - 1];

      return lastSegment.startsWith(lookFor);
    });

    if (matches.length === 1) {
      console.log(
        `Found single match starting with "${lookFor}": ${matches[0].url}\n`
      );
      return matches[0];
    } else {
      console.log(
        `Found ${matches.length} matches for blog starting with "${lookFor}"` +
          (matches.length > 0
            ? `:\n${matches.map((post) => `- ${post.url}`).join("\n")}`
            : "")
      );
    }
  }

  console.log(
    `Unable to look up Blogger post matching ${docusaurusPath} between ${startDate} and ${endDate}`
  );
  return null;
}

function makeBloggerPathFromDocusaurusPath(docusaurusPath: string) {
  return docusaurusPath.substring(11).replace(".md", "");
}

async function postBlog({
  docusaurusPath,
  title,
  tags,
  content,
}: {
  docusaurusPath: string;
  title: string;
  tags: string[];
  content: string;
}) {
  try {
    const url = `http://blog.johnnyreilly.com/${docusaurusPath.substring(
      0,
      4
    )}/${docusaurusPath.substring(5, 7)}/${makeBloggerPathFromDocusaurusPath(
      docusaurusPath
    )}.html`;
    console.log(`Publishing ${docusaurusPath} to ${url}`);

    const blogger = makeBloggerClient();

    // https://developers.google.com/blogger/docs/3.0/reference/posts/insert
    const post = await blogger.posts.insert({
      blogId,
      requestBody: {
        title,
        content,
        url,
        labels: tags,
      },
    });

    console.log(`Published ${docusaurusPath} at ${post.data.url}`);

    return post;
  } catch (e) {
    console.error(e, `Failed to post ${docusaurusPath}`);
    return null;
  }
}

async function updateBlog({
  docusaurusPath,
  postId,
  url,
  title,
  tags,
  content,
}: {
  docusaurusPath: string;
  postId: string;
  url: string;
  title: string;
  tags: string[];
  content: string;
}) {
  try {
    console.log(`Updating ${url} with ${docusaurusPath}`);

    const blogger = makeBloggerClient();

    // https://developers.google.com/blogger/docs/3.0/reference/posts/update
    const post = await blogger.posts.update({
      blogId,
      postId,
      requestBody: {
        title,
        content,
        labels: tags,
      },
    });

    console.log(`Updated ${url} with ${docusaurusPath}`);

    return post;
  } catch (e) {
    console.error(e, `Failed to update ${docusaurusPath}`);
    return null;
  }
}

function makeBloggerClient() {
  const { clientId, clientSecret, refreshToken } = getArgs();
  const oauth2Client = makeOAuth2Client({ clientId, clientSecret });
  oauth2Client.credentials.refresh_token = refreshToken;

  const blogger = google.blogger({
    version: "v3",
    auth: oauth2Client,
  });
  return blogger;
}

async function getBlogPostsToPublish() {
  const blogPosts = await fs.promises.readdir(docusaurusBlogDirectory);
  const blogPostsExcludingHistoric = blogPosts.filter(
    (post) =>
      post >= startDateOfPostsToCreateAndUpdate && post !== "authors.yml"
  );
  return blogPostsExcludingHistoric;
}

// do it!
publishToBlogger();
