import fs from 'fs'
import path from 'path'
import showdown from 'showdown';
import he from 'he'
import jsdom from 'jsdom'
import axios from 'axios';
import fastXmlParser from 'fast-xml-parser';

const xmlPath = './blog-03-03-2021.xml';
const notMarkdownable: string[] = [];

async function fromJsonToMarkDown() {
    const posts = await getPosts();

    for (const post of posts) {
        await makePostIntoContent(post);
    }
    console.log('notMarkdownable', notMarkdownable)
}

async function makePostIntoContent(post: Post) {
    const converter = new showdown.Converter({
        ghCodeBlocks: true
    });
    const linkSections = post.link.split('/');
    const linkSlug = linkSections[linkSections.length - 1]
    const filename = post.published.substr(0, 10) + '-' + linkSlug.replace('.html', '.md');

    const contentProcessed = post.content 
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/code class="lang-/gi, 'code class="language-'); // make lang showdown friendly
// console.log(contentProcessed)
    const images: string[] = [];
    const dom = new jsdom.JSDOM(contentProcessed);
    let markdown = "";
    try {
        markdown = converter.makeMarkdown(contentProcessed, dom.window.document)
            .replace(/#### /g, '## ')
            /*
            <div class="separator" style="clear: both;"><a href="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s783/traffic-to-app-service.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="traffic to app service" border="0" width="600" data-original-height="753" data-original-width="783" src="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s600/traffic-to-app-service.png"></a></div>
            */
            .replace(/<div.*(<img.*">).*<\/div>/g, (replacer) => {
                const div = new jsdom.JSDOM(replacer);
                const img = div?.window?.document?.querySelector("img");
                const alt = img?.getAttribute('alt') ?? '';
                const src = img?.getAttribute('src') ?? '';

                if (src) images.push(src);

                return `![${alt}](${src})`
            });
    }
    catch (e) {
        console.log(post.link)
        notMarkdownable.push(post.link)
        console.log(e)
        return;
        // throw new Error('Failed to convert to markdown')
    }

    const directory = filename.replace('.md', '');
    for (const url of images) {
        try {
            const localUrl = await downloadImage(url, directory);
            markdown = markdown.replace(url, '../static/blog/' + localUrl);
        } catch (e) {
            console.error(`Failed to download ${url}`, e)
        }
    }

    const content = `---
title: ${post.title}
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [${post.tags.join(', ')}]
hide_table_of_contents: false
---
${markdown}
`;

    await fs.promises.writeFile(`../blog-website/blog/${filename}`, content);
}

async function downloadImage(url: string, directory: string) {
    console.log(`Downloading ${url}`);
    const pathParts = new URL(url).pathname.split('/');
    const filename = pathParts[pathParts.length - 1];
    const directoryTo = path.resolve('..', 'blog-website', 'static', 'blog', directory);
    const pathTo = path.resolve('..', 'blog-website', 'static', 'blog', directory, filename);

    if (!fs.existsSync(directoryTo)) {
        fs.mkdirSync(directoryTo);
    }

    const writer = fs.createWriteStream(pathTo)

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise<string>((resolve, reject) => {
        writer.on('finish', () => resolve(directory + '/' + filename))
        writer.on('error', reject)
    })
}


interface Post { title: string; content: string; published: string; link: string; tags: string[]; }

async function getPosts(): Promise<Post[]> {
    const xml = await fs.promises.readFile(xmlPath, 'utf-8');

    const options = {
        attributeNamePrefix: "@_",
        attrNodeName: "attr", //default is 'false'
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: true,
        parseNodeValue: true,
        parseAttributeValue: true,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: true, //"strict"
        attrValueProcessor: (val: string, attrName: string) => he.decode(val, { isAttributeValue: true }),//default is a=>a
        tagValueProcessor: (val: string, tagName: string) => he.decode(val), //default is a=>a
    };

    const tObj = fastXmlParser.getTraversalObj(xml, options);
    const blog = fastXmlParser.convertToJson(tObj, options);

    const [entry] = blog.feed
    // console.log(blog)
    // console.log(entry.entry.map((e: any) => e.category.map((c:any) => c.attr)))

    // console.log(Object.keys(entry))

    // const json = await fs.promises.readFile('./blog.json', 'utf8');
    // const blog = JSON.parse(json);

    // const postsRaw = blog.feed.entry
    //     .filter((entry: any) => (entry.category['@_term'] === "http://schemas.google.com/blogger/2008/kind#post" ||
    //         (Array.isArray(entry.category) && entry.category.some((category: any) => category.attr['@_term'] === "http://schemas.google.com/blogger/2008/kind#post"))) &&
    //         entry?.control?.draft !== 'yes');

    const postsRaw = entry.entry
        .filter((entry: any) =>
            entry.category.some((category: any) => category.attr['@_term'] === "http://schemas.google.com/blogger/2008/kind#post") &&
            entry.link.some((link: any) => link.attr["@_href"] && link.attr["@_type"] === "text/html")
        );

    // console.log(postsRaw[0])
    const posts: Post[] = postsRaw.map((entry: any) => {
        return {
            title: entry.title[0]['#text'],
            content: entry.content[0]['#text'],
            published: entry.published,
            link: entry.link.find((link: any) => link.attr["@_href"] && link.attr["@_type"] === "text/html")
                ? entry.link.find((link: any) => link.attr["@_href"] && link.attr["@_type"] === "text/html").attr["@_href"]
                : undefined,
            tags: Array.isArray(entry.category) && entry.category.some((category: any) => category.attr['@_scheme'] === "http://www.blogger.com/atom/ns#")
                ? entry.category
                    .filter((category: any) => category.attr['@_scheme'] === "http://www.blogger.com/atom/ns#")
                    .map((category: any) => category.attr["@_term"])
                : []
        };
    })

    for (const post of posts) {
        const { content, ...others } = post;
        console.log(others, content.length)
        if (!content || !others.title || !others.published) throw new Error("No content");
    }

    return posts.filter(post => post.link);
}

/*
---
title: ${}
author: John Reilly
author_title: Co-creator of Docusaurus 1
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [hello, docusaurus-v2]
hide_table_of_contents: false
---



---
title: Welcome Docusaurus v2
author: John Reilly
author_title: Co-creator of Docusaurus 1
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [hello, docusaurus-v2]
description: This is my first post on Docusaurus 2.
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
*/

fromJsonToMarkDown();
