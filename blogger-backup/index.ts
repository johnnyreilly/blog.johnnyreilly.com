import fs from 'fs'
import showdown from 'showdown';
import he from 'he'
import jsdom from 'jsdom'

// make JSON with npx fast-xml-parser blog-02-28-2021.xml -o blog.json

async function fromJsonToMarkDown() {
    const posts = await getPosts();
    posts.forEach(post => console.log(post.link ?? post.title, post.tags))
    console.log('posts.length', posts.length)

    const post = posts[1];

    const converter = new showdown.Converter({});
    const filename = post.link
        .replace('http://blog.johnnyreilly.com/', '')
        .replace(/\//g, '-',)
        .replace('.html', '.md');

    const contentProcessed = he.decode(post.content)
        .replace(/<br \/>/g, '\n')
    /*
    <div class="separator" style="clear: both;"><a href="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s783/traffic-to-app-service.png" style="display: block; padding: 1em 0; text-align: center; "><img alt="traffic to app service" border="0" width="600" data-original-height="753" data-original-width="783" src="https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s600/traffic-to-app-service.png"></a></div>
     */

    const images = [];
    const dom = new jsdom.JSDOM(contentProcessed);
    const markdown = converter.makeMarkdown(contentProcessed, dom.window.document)
        .replace(/#### /g, '## ')
        .replace(/<div.*(<img.*">).*<\/div>/g, (replacer) => {
            const div = new jsdom.JSDOM(replacer);
            const img = div?.window?.document?.querySelector("img");
            const alt = img?.getAttribute('alt');
            const src = img?.getAttribute('src');
            images.push(src);
            return `![${alt ?? ''}](${src})`
        })
        ;
    console.log(markdown)


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

    await fs.promises.writeFile(`../blog-website/blog/${filename}`, content)
}

fromJsonToMarkDown();

interface Post { title: string; content: string; published: string; link: string; tags: string[]; }

async function getPosts(): Promise<Post[]> {
    const json = await fs.promises.readFile('./blog.json', 'utf8');

    const blog = JSON.parse(json);

    const postsRaw = blog.feed.entry
        .filter((entry: any) => (entry.category['@_term'] === "http://schemas.google.com/blogger/2008/kind#post" ||
            (Array.isArray(entry.category) && entry.category.some((category: any) => category['@_term'] === "http://schemas.google.com/blogger/2008/kind#post"))) &&
            entry?.control?.draft !== 'yes');
    const posts: Post[] = postsRaw.map((entry: any) => {
        return {
            title: entry.title['#text'],
            content: entry.content['#text'],
            published: entry.published,
            link: entry.link.find((link: any) => link["@_type"] === "text/html")
                ? entry.link.find((link: any) => link["@_type"] === "text/html")["@_href"]
                : undefined,
            tags: Array.isArray(entry.category) && entry.category.some((category: any) => category['@_scheme'] === "http://www.blogger.com/atom/ns#")
                ? entry.category.filter((category: any) => category['@_scheme'] === "http://www.blogger.com/atom/ns#").map((category: any) => category["@_term"])
                : []
        };
    });
    return posts;
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