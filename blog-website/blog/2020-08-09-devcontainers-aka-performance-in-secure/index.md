---
slug: devcontainers-aka-performance-in-secure
title: 'Devcontainers AKA performance in a secure sandbox'
authors: johnnyreilly
tags: []
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

```yml
version: '3.7'
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
      - '5000:5000'
      - '8080:8080'
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
      SA_PASSWORD: 'Your_password123'
      ACCEPT_EULA: 'Y'
```

The devcontainer will be built with the `Dockerfile.devcontainer` in the root of our repo. It relies upon your SSH keys and a `.env` file being available to be copied in:

```Dockerfile
#-----------------------------------------------------------------------------------------------------------
# Based upon: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/dotnetcore
#-----------------------------------------------------------------------------------------------------------
ARG VARIANT="3.1-bionic"
FROM mcr.microsoft.com/dotnet/core/sdk:${VARIANT}

# Because MITM certificates
COPY ./docker/certs/. /usr/local/share/ca-certificates/
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/mitm.pem
RUN update-ca-certificates

# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. On Linux, the container user's GID/UIDs
# will be updated to match your local UID/GID (when using the dockerFile property).
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Options for common package install script
ARG INSTALL_ZSH="true"
ARG UPGRADE_PACKAGES="true"
ARG COMMON_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/common-debian.sh"
ARG COMMON_SCRIPT_SHA="dev-mode"

# Settings for installing Node.js.
ARG INSTALL_NODE="true"
ARG NODE_SCRIPT_SOURCE="https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/node-debian.sh"
ARG NODE_SCRIPT_SHA="dev-mode"

# ARG NODE_VERSION="lts/*"
ARG NODE_VERSION="14"
ENV NVM_DIR=/usr/local/share/nvm

# Have nvm create a "current" symlink and add to path to work around https://github.com/microsoft/vscode-remote-release/issues/3224
ENV NVM_SYMLINK_CURRENT=true
ENV PATH=${NVM_DIR}/current/bin:${PATH}

# Configure apt and install packages
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    #
    # Verify git, common tools / libs installed, add/modify non-root user, optionally install zsh
    && apt-get -y install --no-install-recommends curl ca-certificates 2>&1 \
    && curl -sSL ${COMMON_SCRIPT_SOURCE} -o /tmp/common-setup.sh \
    && ([ "${COMMON_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/common-setup.sh" | sha256sum -c -)) \
    && /bin/bash /tmp/common-setup.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
    #
    # Install Node.js
    && curl -sSL ${NODE_SCRIPT_SOURCE} -o /tmp/node-setup.sh \
    && ([ "${NODE_SCRIPT_SHA}" = "dev-mode" ] || (echo "${COMMON_SCRIPT_SHA} */tmp/node-setup.sh" | sha256sum -c -)) \
    && /bin/bash /tmp/node-setup.sh "${NVM_DIR}" "${NODE_VERSION}" "${USERNAME}" \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -f /tmp/common-setup.sh /tmp/node-setup.sh \
    && rm -rf /var/lib/apt/lists/* \
    #
    # Workspace
    && mkdir workspace \
    && chown -R ${NONROOT_USER}:root workspace


# Install Vim
RUN apt-get update && apt-get install -y \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Set up a timezone in the devcontainer - necessary for anything timezone dependent
ENV TZ=Europe/London
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
 && apt-get update \
 && apt-get install --no-install-recommends -y \
    apt-utils \
    tzdata  \
 && apt-get autoremove -y \
 && apt-get clean -y \
 && rm -rf /var/lib/apt/lists/*

ENV DOTNET_RUNNING_IN_CONTAINER=true

# Copy across SSH keys so you can git clone
RUN mkdir /root/.ssh
RUN chmod 700 /root/.ssh

COPY .ssh/id_rsa /root/.ssh
RUN chmod 600 /root/.ssh/id_rsa

COPY .ssh/id_rsa.pub /root/.ssh
RUN chmod 644 /root/.ssh/id_rsa.pub

COPY .ssh/known_hosts /root/.ssh
RUN chmod 644 /root/.ssh/known_hosts

# Disable initial git clone prompt
RUN echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config

# Copy across .env file so you can customise environment variables
# This will be copied into the root of the repo post git clone
COPY .env /.env
RUN chmod 644 /.env

# Install dotnet entity framework tools
RUN dotnet tool install dotnet-ef --tool-path /usr/local/bin --version 3.1.2
```

With this devcontainer you're good to go for an ASP.NET Core / JavaScript developer setup that is blazing fast! Remember to fire up Docker and give it goodly access to the resources of your host machine. All the CPUs, lots of memory and all the performance that there ought to be.

_\* "virus checkers" is a euphemism here for all the background tools that may be running. It was that or calling them "we are legion"_
