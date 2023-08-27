---
slug: devcontainers-aka-performance-in-secure
title: 'Devcontainers AKA performance in a secure sandbox'
authors: johnnyreilly
tags: [devcontainer]
hide_table_of_contents: false
description: 'Speedy ASP.NET Core and JavaScript development is made possible by devcontainers, which isolate tools and code to improve productivity.'
---

Many corporate machines arrive in engineers hands with a preponderance of pre-installed background tools; from virus checkers to backup utilities to port blockers; the list is long.

<!--truncate-->

The reason that these tools are installed is generally noble. However, the implementation can often be problematic. The tools may be set up in such a way as they impact and interfere with one another. Really powerful machines with 8 CPUs and hardy SSDs can be slowed to a crawl. Put simply: the good people responsible for ensuring security are rarely encouraged to incentivise performance alongside it. And so don't.

The unfortunate consequence of considering the role of security without regard to performance is this: sluggish computers. The further consequence (and this is the one I want you to think long and hard about) is _low developer productivity_. And that sucks. It impacts what an organisation is able to do, how fast an organisation is able to move. Put simply: it can be the difference between success and failure.

The most secure computer is off. But you won't ship much with it. Encouraging your organisation to consider tackling security with performance in mind is worthwhile. It's a long game though. In the meantime what can we do?

## "Hide from the virus checkers\*\*\* in a devcontainer"

Devcontainers, the infrastructure as code equivalent for developing software, have an underappreciated quality: unlocking your machine's performance.

Devcontainers are isolated secure sandboxes in which you can build software. To quote the [docs](https://code.visualstudio.com/docs/remote/containers):

> A `devcontainer.json` file in your project tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack. This container can be used to run an application or to sandbox tools, libraries, or runtimes needed for working with a codebase.
>
> Workspace files are mounted from the local file system or copied or _cloned into the container_.

We're going to set up a devcontainer to code an ASP.NET Core application with a JavaScript (well TypeScript) front end. If there's one thing that's sure to catch a virus checkers beady eye, it's `node_modules`. `node_modules` contains more files than a black hole has mass. Consider a project with 5,000 source files. One trusty `yarn` later and the folder now has a tidy 250,000 files. The virus checker is now really sitting up and taking notice.

Our project has a `git commit` hook set up with [Husky](https://github.com/typicode/husky) that formats our TypeScript files with [Prettier](https://prettier.io/). Every commit the files are formatted to align with the project standard. With all the virus checkers in place a `git commit` takes around 45 seconds. Inside a devcontainer we can drop this to 5 seconds. That's nine times faster. I'll repeat that: that's **nine times faster**!

The "cloned into a container" above is key to what we're going to do. We're _not_ going to mount our local file system into the devcontainer. Oh no. We're going to build a devcontainer with ASP.NET CORE and JavaScript in. Then, inside there, we're going to clone our repo. Then we can develop, build and debug all inside the container. It will feel like we're working on our own machine because VS Code does such a damn fine job. In reality, we're connecting to another computer (a Linux computer to boot) that is running in isolation to our own. In our case that machine is sharing our hardware; but that's just an implementation detail. It could be anywhere (and in the future may well be).

## Make me a devcontainer...

Enough talk... We're going to need a `.devcontainer/devcontainer.json`:

```json
{
  "name": "my devcontainer",
  "dockerComposeFile": "../docker-compose.devcontainer.yml",
  "service": "my-devcontainer",
  "workspaceFolder": "/workspace",

  // Set *default* container specific settings.json values on container create.
  "settings": {
    "terminal.integrated.shell.linux": "/bin/zsh"
  },

  // Add the IDs of extensions you want installed when the container is created.
  "extensions": [
    "ms-dotnettools.csharp",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-mssql.mssql",
    "eamodio.gitlens",
    "ms-azuretools.vscode-docker",
    "k--kato.docomment",
    "Leopotam.csharpfixformat"
  ],

  // Use 'postCreateCommand' to clone the repo into the workspace folder when the devcontainer starts
  // and copy in the .env file
  "postCreateCommand": "git clone git@github.com:my-org/my-repo.git . && cp /.env /workspace/.env"

  // "remoteUser": "vscode"
}
```

Now the `docker-compose.devcontainer.yml` which lives in the root of the project. It provisions a SQL Server container (using the official image) and our devcontainer:

```
version: "3.7"
services:
  my-devcontainer:
    image: my-devcontainer
    build:
      context: .
      dockerfile: Dockerfile.devcontainer
    command: /bin/zsh -c "while sleep 1000; do :; done"
    volumes:
      # mount .zshrc from home - make sure it doesn't contain Windows line endings
      - ~/.zshrc:/root/.zshrc

    # user: vscode
    ports:
      - "5000:5000"
      - "8080:8080"
    environment:
      - CONNECTIONSTRINGS__MYDATABASECONNECTION
    depends_on:
      - db
  db:
    image: mcr.microsoft.com/mssql/server:2019-latest
    privileged: true
    ports:
      - 1433:1433
    environment:
      SA_PASSWORD: "Your_password123"
      ACCEPT_EULA: "Y"
```

The devcontainer will be built with the `Dockerfile.devcontainer` in the root of our repo. It relies upon your SSH keys and a `.env` file being available to be copied in:

```
#
```
