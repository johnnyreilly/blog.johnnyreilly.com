---
slug: smuggling-gitignore-npmrc-in-npm-packages
title: 'Smuggling .gitignore, .npmrc and friends in npm packages'
authors: johnnyreilly
tags: [node.js]
image: ./title-image.png
hide_table_of_contents: false
description: 'By combining npx and Azure Artifacts, you can deliver your command line application to consumers in a way that is easy to use and secure.'
---

My example is a `templates` folder - yours could be anything. 

https://github.com/cthackers/adm-zip

```json
  "scripts": {
    "postinstall": "node ./scripts/postinstall.js",
    "prepare": "node ./scripts/prepare.js"
  },
```

![title image reading "Smuggling dotfiles in npm packages" with an Azure DevOps and npm logos](title-image.png)

https://github.com/npm/npm/issues/3763

<!--truncate-->

## `postinstall.js`

```js
import AdmZip from "adm-zip";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

function extractTemplates() {
  console.log("postinstall running - extracting templates");
  const templatesZipPath = fileURLToPath(
    new URL("../templates.zip", import.meta.url),
  );
  const templatesDir = fileURLToPath(new URL("../templates", import.meta.url));

  let templatesExistsAlready = true;
  try {
    fs.accessSync(templatesDir);
  } catch {
    templatesExistsAlready = false;
  }

  if (templatesExistsAlready) {
    console.log("templates already extracted");
    return;
  }

  console.log(`extracting from ${templatesZipPath} to ${templatesDir}`);

  const extractZip = new AdmZip(templatesZipPath);
  extractZip.extractAllTo(templatesDir, /* overwrite */ false);

  console.log("templates extracted");
}

extractTemplates();
```

## `prepare.js`

```js
import AdmZip from "adm-zip";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

function packTemplates() {
  console.log("prepare running - packing templates");

  const templatesZipPath = fileURLToPath(
    new URL("../templates.zip", import.meta.url),
  );
  const templatesDir = fileURLToPath(new URL("../templates", import.meta.url));

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