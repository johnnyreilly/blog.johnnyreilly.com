---
slug: smuggling-gitignore-npmrc-in-npm-packages
title: 'Smuggling .gitignore, .npmrc and friends in npm packages'
authors: johnnyreilly
tags: [node.js]
image: ./title-image.png
hide_table_of_contents: false
description: 'The npm publish command will not just package up .gitignore and .npmrc files. This post shows how to use zipping and unzipping with postinstall and prepare scripts to include these files into your npm package.'
---

I recently needed to include a number of `.gitignore` and an `.npmrc` files in an npm package. I was surprised to find that the `npm publish` command strips these out of the published package by default. As a consequence, This broke my package, and so I needed to find a way to get round this shortcoming.

I ended up using zipping and unzipping with `postinstall` and `prepare` scripts to include these files into my npm package.

![title image reading "Smuggling dotfiles in npm packages" with an Azure DevOps and npm logos](title-image.png)

This post shows how to use zipping and unzipping with `postinstall` and `prepare` scripts to include these files into your npm package.

## A little backstory

I'm currently beavering away on a "create-\*-app" tool that generates new projects from a number of available templates. That tool takes the form of a CLI tool built with TypeScript, published as a package to an npm registry and consumed with `npx`. Significantly, the templates that ship with the CLI take the form of a `templates` folder in the package, and the folders in those templates included `.npmrc` and `.gitignore` files.

When publishing my npm package, I discovered that the `.npmrc` and `.gitignore` files in subfolders were being stripped from the package. After a little research, I happened upon this [GitHub issue about npm](https://github.com/npm/npm/issues/3763) which describes some of the behaviour I was seeing. After a little more digging, I came to understand that this behaviour is a result of npm treating the `.gitignore` and `.npmrc` files as configuration files rather than part of the package's intended content.

However, these files were essential to the templates' functionality, and so I needed to find a way to include them in the package.

I mused with explicitly including the specific files in the `files` section of the `package.json` file, but this would have been a maintenance headache. I wanted a more automated solution. Given that I have a single "special" folder called `templates` that contains all the templates, I pondered whether I could zip the folder on publish and unzip it on install. This would allow me to include the `.gitignore` and `.npmrc` files in the templates and have them copied into the new project when the template was used. And if there was another other curious behaviour around publishing, this solution should cover that too.

## `prepare` and `postinstall` scripts

The `prepare` and `postinstall` scripts are two of the lifecycle scripts that npm runs when installing a package. The `prepare` script runs before the package is packaged and published, and the `postinstall` script runs after the package is installed. I decided to use these scripts to zip and unzip the `templates` folder in my package.

I wanted to include `.gitignore` and `.npmrc` files in the templates so that they would be copied into the new project when the template was used.

My example is a `templates` folder - yours could be anything.

https://github.com/cthackers/adm-zip

```json
  "scripts": {
    "postinstall": "node ./scripts/postinstall.js",
    "prepare": "node ./scripts/prepare.js"
  },
```

<!--truncate-->

## `postinstall.js`

```js
import AdmZip from 'adm-zip';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

function extractTemplates() {
  console.log('postinstall running - extracting templates');
  const templatesZipPath = fileURLToPath(
    new URL('../templates.zip', import.meta.url),
  );
  const templatesDir = fileURLToPath(new URL('../templates', import.meta.url));

  let templatesExistsAlready = true;
  try {
    fs.accessSync(templatesDir);
  } catch {
    templatesExistsAlready = false;
  }

  if (templatesExistsAlready) {
    console.log('templates already extracted');
    return;
  }

  console.log(`extracting from ${templatesZipPath} to ${templatesDir}`);

  const extractZip = new AdmZip(templatesZipPath);
  extractZip.extractAllTo(templatesDir, /* overwrite */ false);

  console.log('templates extracted');
}

extractTemplates();
```

## `prepare.js`

```js
import AdmZip from 'adm-zip';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

function packTemplates() {
  console.log('prepare running - packing templates');

  const templatesZipPath = fileURLToPath(
    new URL('../templates.zip', import.meta.url),
  );
  const templatesDir = fileURLToPath(new URL('../templates', import.meta.url));

  const zip = new AdmZip();

  console.log(`removing existing ${templatesZipPath}`);
  fs.rmSync(templatesZipPath, {
    force: true,
  });

  console.log(`adding ${templatesDir} to zip file`);
  zip.addLocalFolder(templatesDir);

  console.log(`writing zip to ${templatesZipPath}`);
  zip.writeZip(templatesZipPath);
}

packTemplates();
```
