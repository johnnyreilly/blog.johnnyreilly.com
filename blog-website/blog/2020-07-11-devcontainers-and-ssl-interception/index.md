---
slug: devcontainers-and-ssl-interception
title: 'Devcontainers and SSL interception'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Developers may need to overcome MITM certificate issues to use devcontainers, which can optimize productivity for new starters when developing software.'
---

[Devcontainers](https://code.visualstudio.com/docs/remote/containers) are cool. They are the infrastructure as code equivalent for developing software.

<!--truncate-->

Imagine your new starter joins the team, you'd like them to be contributing code on _day 1_. But if the first thing that happens is you hand them a sheaf of paper upon which are the instructions for how to get their machines set up for development, well, maybe it's going to be a while. But if your project has a devcontainer then you're off to the races. One trusty `git clone`, fire up VS Code and they can get going.

That's the dream right?

I've recently been doing some work getting a project I work on set up with a devcontainer. As I've worked on that I've become aware of some of the hurdles that might hamper your adoption of devcontainers in a corporate environment.

## Certificates: I'm starting with the man in the middle

It is a common practice in company networks to perform [SSL interception](https://docs.citrix.com/en-us/citrix-adc/13/forward-proxy/ssl-interception.html). Not SSL inception; that'd be more fun.

 <iframe src="https://giphy.com/embed/l7JDTHpsXM26k" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>

SSL interception is the practice of installing a "man-in-the-middle" (MITM) CA certificate on users machines. When SSL traffic takes place from a users machine, it goes through a proxy. That proxy performs the SSL on behalf of that user and, if it's happy, supplies another certificate back to the users machine which satisfies the MITM CA certificate. So rather than seeing, for example, Google's certificate from [https://google.com](https://google.com) you'd see the one resulting from the SSL interception. You can read more [here](https://security.stackexchange.com/questions/107542/is-it-common-practice-for-companies-to-mitm-https-traffic).

Now this is a little known and less understood practice. I barely understand it myself. Certificates are _hard_. Even having read the above you may be none the wiser about why this is relevant. Let's get to the broken stuff.

## "Devcontainers don't work at work!"

So, you're ready to get going with your first devcontainer. You fire up the [vscode-dev-containers](https://github.com/Microsoft/vscode-dev-containers) repo and find the container that's going to work for you. Copy pasta the `.devcontainer` into your repo, install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension into VS Code and enter the `Remote-Containers: Reopen Folder in Container`. Here comes the future!

But when it comes to performing SSL inside the devcontainer, trouble awaits. Here's what a `yarn install` results in:

```
yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/@octokit/core/-/core-2.5.0.tgz: self signed certificate in certificate chain".
```

Oh no!

Gosh but it's okay - you're just bumping on the SSL interception. Why though? Well it's like this: when you fire up your devcontainer it builds a new Docker container. It's as well to imagine the container as a virtual operating system. So what's the difference between this operating system and the one our machine is running? Well a number of things, but crucially our host operating system has the MITM CA certificate installed. So when we SSL, we have the certificate that will match up with what the proxy sends back to us certificate-wise. And inside our trusty devcontainer we don't have that. Hence the sadness.

## Devcontainer + MITM cert = working

We need to do two things to get this working:

1. Acquire the requisite CA certificate(s) from your friendly neighbourhood networking team. Place them in a `certs` folder inside your repo, in the `.devcontainer` folder.
2. Add the following lines to your `.devcontainer/Dockerfile`, just after the initial `FROM` statement:

```
# Because MITM certificates
COPY certs/. /usr/local/share/ca-certificates/
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/mitm.pem
RUN update-ca-certificates
```

Which does the following:

- Copies the certs into the devcontainer
- This is a Node example and so we set an environment variable called [`NODE_EXTRA_CA_CERTS`](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file) which points to the path of your MITM CA certificate file inside your devcontainer.
- updates the directory `/etc/ssl/certs` to hold SSL certificates and generates `ca-certificates.crt`

With these in place then you should be able to build your devcontainer with no SSL trauma. Enjoy!
