import fs from 'fs'

// make JSON with npx fast-xml-parser blog-02-28-2021.xml -o blog.json

async function fromJsonToMarkDown() {
    const posts = await getPosts();
    posts.forEach(post => console.log(post.link ?? post.title))
    console.log('posts.length', posts.length)
}

fromJsonToMarkDown();

interface Post { title: string; content: string; published: string; link: string }

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
                : undefined
        };
    });
    return posts;
}

