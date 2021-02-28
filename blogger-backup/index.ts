import fs from 'fs'

// make JSON with npx fast-xml-parser blog-02-28-2021.xml -o blog.json

async function boot() {
    const json = await fs.promises.readFile('./blog.json', 'utf8');

    const blog = JSON.parse(json);

    console.log('blog.feed.entry.length', blog.feed.entry.length)
    console.log('published', blog.feed.entry.filter((entry: any) => entry.published).length)
    const posts = blog.feed.entry
        .filter((entry: any) =>
            entry.category['@_term'] === "http://schemas.google.com/blogger/2008/kind#post" ||
            (Array.isArray(entry.category) && entry.category.some((category: any) => category['@_term'] === "http://schemas.google.com/blogger/2008/kind#post")))
        .filter((entry: any) => entry?.control?.draft !== 'yes');
    posts.forEach((entry: any) => {
        console.log(entry.title['#text'])
    });
    console.log('posts.length', posts.length)

}

boot();

