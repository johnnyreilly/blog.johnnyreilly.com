---
slug: multiline-strings-dot-env-files
title: 'Multiline strings in .env files'
authors: johnnyreilly
tags: [node.js]
hide_table_of_contents: false
description: 'Learn how to use multiline strings in .env files.'
---

I love using `.env` files to configure my applications. They're a great way to keep configuration in one place and to keep it out of the codebase. They're also a great way to keep secrets out of the codebase.

But what if you need to use a multiline string in a `.env` file? How do you do that? You just do it:

```env
SINGLE_LINE="you know what..."
MULTI_LINE="you know what you did
LAST SUMMER"
```

That's right, you just use a newline character. It's that simple. Oddly, searching for that on the internet didn't yield the answer I was looking for. So I'm writing it down here for posterity.

With your `.env` file in place, you can then consume it in your application using a package like [`dotenv`](https://www.npmjs.com/package/dotenv). Or if you'd like to use a bash script to consume the `.env` file, you can do it like this:

```bash
#!/usr/bin/env bash
set -a
source test.env
set +a

npm run start # or whatever you need to do
```
