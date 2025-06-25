---
slug: azure-devops-pull-requests-dynamic-required-reviewers
title: 'Azure DevOps: pull requests and dynamic required reviewers'
authors: johnnyreilly
tags: [typescript, azure devops, node.js]
image: ./title-image.png
hide_table_of_contents: false
description: 'How to have dynamically assigned required reviewers for a pull request in Azure DevOps using build validations and the Azure DevOps Client for Node.js.'
---

Have you ever wanted to have required reviewers for a pull request in Azure DevOps? Probably. And that's an inbuilt feature of Azure DevOps. By using [branch policies, you can set required reviewers for a pull request](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops&tabs=browser#automatically-include-code-reviewers). If you want to ensure the code is reviewed by the appropriate people before it is merged into the main branch, this can prove very useful.

![title image reading "Azure DevOps: pull requests and dynamic required reviewers" with an Azure DevOps logo](title-image.png)

However, the required reviewers are static. You can set them up in the branch policies, but they don't change dynamically based on the code being altered or the people involved in the pull request. I spent many moons trawling the internet for an answer to this question, [and I found that many people were asking the same question](https://stackoverflow.com/questions/64754998/how-do-i-add-a-required-reviewer-when-people-of-a-given-team-create-a-pull-reque). The answer was always the same: "You can't do that."

However, there is a way. It is, hand on heart, marginally clunky. But the clunk is marginal, and more than acceptable. It involves co-opting build validations to achieve the desired effect. In this post, I'll show you how to do that.

<!--truncate-->

## Build validations and required reviewers

Build validations in Azure DevOps are a way to ensure that code meets certain criteria before it is merged into the main branch. They are, crucially, Azure DevOps pipelines that run when a pull request is created or updated. They are typically used to ensure that the code builds successfully, tests pass, linting succeeds etc. Build validations are set up in the branch policies for a repository. It's pretty typical for a repository to have a build validations.

The crucial thing to note is that, typically, **build validations must pass before a pull request can be completed**. That's how they provide their value; as a control to prevent changes breaking the codebase. What we're going to do, is use this blocking aspect to our advantage. We'll include a new stage in our build validation pipeline that, each time it runs, does one of the following:

1. Dynamically adds a required reviewer to the pull request, if appropriate. The way we decide which reviewers are dynamically added, if any, is down to us to determine. It's entirely flexible. It could be based on the code being changed or the people involved in the pull request, or indeed something else. If no reviewer is added, the pipeline will pass. But if a reviewer is added to the pull request, the pipeline will be made to fail.
2. If the required reviewers has already been assigned, check if they have approved the pull request. If they have, the pipeline will pass. If they haven't, the pipeline will fail.

The thing to pay attention to is that the pipeline will fail if dynamically assigned required reviewers have not given their approval by the end of the pipeline run. This applies equally if the pipeline is running for the first time against a pull request and assigning the reviewers. **This means that the pull request cannot be completed until any dynamically assigned required reviewers have approved it.**

This is the part that makes your risk and audit teams happy. You cannot circumvent the required reviewers; the pipeline failing will prevent the pull request from being merged / completed until the required reviewers have approved it. This is a way to ensure that the code is reviewed by the appropriate people before it is merged into the main branch.

I mentioned "clunky" earlier. The clunkiness comes from the need to rerun the build validation pipeline in the Azure DevOps UI when the approval has been given. This is because there is no way (that I'm aware of) to trigger the build validation pipeline when a reviewer approval has been provided. So, if the required reviewers approve the pull request, you will need to rerun the build validation pipeline to ensure that it passes and the pull request can be completed.

As long as the failing pipeline provides a clear message about what is required, this is a small price to pay for the ability to have dynamic required reviewers.

Now I've convinced you that this is a good idea, let's look at how to implement it.

## Co-opting your existing build validation pipeline

I'm making an assumption that you already have a build validation pipeline set up for your repository. If you don't, you'll need to set one up first.

To your existing build validation pipeline, you'll need to add a new stage that will run the code to dynamically assign required reviewers:

```yaml
- stage: DynamicRequiredReviewers
  displayName: Dynamic required reviewers
  dependsOn: [] # This stage does not depend on any other stages and so will run in parallel with the others
  jobs:
    - job:
      steps:
        - task: NodeTool@0
          inputs:
            versionSpec: 22
          displayName: Install Node.js

        - bash: npm ci
          displayName: 'Install dependencies'
          workingDirectory: 'scripts/dynamic-required-reviewers'

        - bash: npm test
          displayName: 'Run tests'
          workingDirectory: 'scripts/dynamic-required-reviewers'

        - bash: npm start -- --sat $(System.AccessToken) --pullRequestId $(System.PullRequest.PullRequestId) --organization $(System.CollectionUri) --repositoryName $(Build.Repository.Name) --projectName $(System.TeamProject)'
          displayName: 'Validate claims'
          workingDirectory: 'scripts/dynamic-required-reviewers'
```

You can see reference to the `scripts/dynamic-required-reviewers` directory. This is where we'll put the code that will dynamically assign required reviewers. The code will run in a Node.js environment, so we'll need to install Node.js and the dependencies for the code to run.

You can also see that we're using the `System.AccessToken` and `System.PullRequest.PullRequestId` variables. The `System.AccessToken` is a token that allows the code to interact with the Azure DevOps API, and the `System.PullRequest.PullRequestId` is the ID of the pull request that the build validation pipeline is running against. We'll use these in our code to dynamically assign required reviewers to the pull request.

We also use the `System.CollectionUri`, `Build.Repository.Name`, and `System.TeamProject` variables to get the organization, repository name, and project name respectively. These will be used to make API calls to Azure DevOps with our token.

## Setting up the code to dynamically assign required reviewers

You'll need to create the `scripts/dynamic-required-reviewers` directory. In there we're going to add a `package.json` file to manage our dependencies:

```json
{
  "name": "dynamic-required-reviewers",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "npm run build && node dist/index.js"
  },
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "azure-devops-node-api": "^15.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "typescript": "^5.8.3"
  }
}
```

We also need a `tsconfig.json` file to configure TypeScript:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "noEmit": false,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "ES2022",
    "outDir": "dist"
  },
  "include": ["src"]
}
```

Now we'll add our `src/index.ts` file where we'll put our code to dynamically assign required reviewers.

```ts
import { parseArgs } from 'node:util';

import * as nodeApi from 'azure-devops-node-api';
import type { GitPullRequest } from 'azure-devops-node-api/interfaces/GitInterfaces.js';
import type { IGitApi } from 'azure-devops-node-api/GitApi.js';

async function main() {
  const args = parseArgs({
    options: {
      pat: { type: 'string', short: 'p', default: process.env.ADO_PAT },
      sat: { type: 'string', short: 's', default: process.env.ADO_SAT },
      pullRequestId: {
        type: 'string',
        short: 'i',
        default: process.env.ADO_PULL_REQUEST_ID,
      },
      organization: {
        type: 'string',
        short: 'o',
        default: '',
      },
      repositoryName: { type: 'string', short: 'r', default: '' },
      projectName: { type: 'string', short: 'j', default: '' },
    },
  });

  const pullRequestId = parseInt(args.values.pullRequestId ?? '0', 10);
  const pat = args.values.pat ?? '';
  const sat = args.values.sat ?? '';
  const organization = args.values.organization ?? '';
  const repositoryName = args.values.repositoryName ?? '';
  const projectName = args.values.projectName ?? '';

  const webApi = await makeWebApi({
    pat,
    sat,
    organization,
  });

  const gitApi = await webApi.getGitApi();
  const pullRequest = await gitApi.getPullRequest(
    /* repositoryId */ repositoryName,
    /* pullRequestId */ pullRequestId,
    /* project */ projectName,
    /* maxCommentLength */ undefined,
    /* skip */ undefined,
    /* top */ undefined,
    /* includeCommits */ true,
    /* includeWorkItemRefs */ false,
  );

  const requiredReviewerName = await determineRequiredReviewerName(pullRequest);

  if (!requiredReviewerName) {
    console.log(
      '✅ No required reviewer was deemed necessary. No action needed.',
    );
    return;
  }

  const requiredReviewer = await searchIdentityForReviewer({
    pat,
    sat,
    organization,
    searchTerm: requiredReviewerName,
  });

  if (!requiredReviewer) {
    const errorMessage = `❌ Failed to look up reviewer: ${requiredReviewerName}`;
    throw new Error(errorMessage);
  }

  await determineAction({
    requiredReviewer,
    pullRequest,
    gitApi,
    projectName,
    repositoryName,
  });
}

async function determineRequiredReviewerName(
  pullRequest: GitPullRequest,
): Promise<string | undefined> {
  // This is a placeholder function. You should implement your logic to determine the required reviewer name.
  return 'Required Reviewer Name'; // Replace with actual logic
}

async function makeWebApi({
  organization,
  pat,
  sat,
}: {
  organization: string;
  pat?: string;
  sat?: string;
}) {
  if (!pat && !sat) {
    throw new Error(
      'Either a Personal Access Token (PAT) or a Service Account Token (SAT) must be provided.',
    );
  }
  const webApi = new nodeApi.WebApi(
    `https://dev.azure.com/${organization}`,
    pat
      ? nodeApi.getPersonalAccessTokenHandler(
          pat,
          /** allowCrossOriginAuthentication */ true,
        )
      : nodeApi.getHandlerFromToken(
          sat ?? '',
          /** allowCrossOriginAuthentication */ true,
        ),
  );

  return webApi;
}

interface Identity {
  id: string;
  providerDisplayName: string;
}

/**
 * This searches the organization's identity system directly
 * based on https://learn.microsoft.com/en-us/rest/api/azure/devops/ims/identities/read-identities?view=azure-devops-rest-7.1&tabs=HTTP
 */
async function searchIdentityForReviewer({
  pat,
  sat,
  searchTerm,
  organization,
}: {
  pat: string;
  sat: string;
  searchTerm: string;
  organization: string;
}): Promise<Identity | undefined> {
  try {
    // Use the identities API endpoint for broader search
    const searchUrl = `https://vssps.dev.azure.com/${organization}/_apis/identities?searchFilter=General&filterValue=${encodeURIComponent(
      searchTerm,
    )}&api-version=7.1-preview.1`;

    const response = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(`PAT:${pat || sat}`).toString(
          'base64',
        )}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(
        `Identity search failed: ${response.status} ${response.statusText}`,
      );
      return undefined;
    }

    const data = await response.json();

    if (data.value && data.value.length > 0) {
      const identity: Identity = data.value[0]; // Take the first match

      console.log(`✅ Found identity via search:`);
      console.log(`   ID: ${identity.id}`);
      console.log(`   Display Name: ${identity.providerDisplayName}`);

      return identity;
    }

    console.warn(`⚠️  No identities found for: ${searchTerm}`);
    return undefined;
  } catch (error) {
    console.error(`❌ Error searching identities for ${searchTerm}:`, error);
    return undefined;
  }
}

const voteValues = {
  approved: 10,
  approvedWithSuggestions: 5,
  noVote: 0,
  waitingForAuthor: -5,
  rejected: -10,
} as const;

async function determineAction({
  requiredReviewer,
  pullRequest,
  gitApi,
  projectName,
  repositoryName,
}: {
  requiredReviewer: Identity;
  pullRequest: GitPullRequest;
  gitApi: IGitApi;
  projectName: string;
  repositoryName: string;
}): Promise<void> {
  const assignedReviewer = pullRequest.reviewers?.find(
    (reviewer) => reviewer.id === requiredReviewer.id,
  );
  const requiredReviewIsAssigned =
    assignedReviewer && assignedReviewer.isRequired;
  const hasBeenApprovedByRequiredReviewer =
    assignedReviewer && assignedReviewer.vote === voteValues.approved;

  if (requiredReviewIsAssigned && hasBeenApprovedByRequiredReviewer) {
    console.log(
      `✅ Reviewer with ID ${
        assignedReviewer.displayName ?? assignedReviewer.id
      } is already assigned and has approved the pull request. No action needed.`,
    );
  } else if (requiredReviewIsAssigned) {
    const errorMessage = `⚠️ Reviewer with ID ${
      assignedReviewer.displayName ?? assignedReviewer.id
    } is already assigned but has not approved the pull request.`;
    throw new Error(errorMessage);
  } else {
    console.log(
      `⚠️ Reviewer with ID ${requiredReviewer.providerDisplayName} is not yet assigned. Will assign them.`,
    );

    const reviewerToBeAssigned = {
      id: requiredReviewer.id,
      vote: voteValues.noVote,
      isRequired: true,
    };

    try {
      await gitApi.createPullRequestReviewer(
        reviewerToBeAssigned,
        /** repositoryId */ repositoryName,
        pullRequest.pullRequestId!,
        /** reviewerId */ reviewerToBeAssigned.id,
        /** project */ projectName,
      );
      console.log('✅ Successfully added reviewer to pull request');
    } catch (error) {
      const errorMessage = `❌ Failed to add reviewer to pull request`;
      throw new Error(errorMessage, { cause: error });
    }

    const errorMessage = `The pull request requires review and approval by ${requiredReviewer.providerDisplayName}. Once approved, please re-run this build validation and it should pass.`;
    throw new Error(errorMessage);
  }
}

main();
```

There's a good bit of code here, so let's break it down:

- The `main` function is the entry point of the script. It parses the command line arguments and sets up the Azure DevOps API client.
- The `makeWebApi` function creates an instance of the Azure DevOps Web API client using either a Personal Access Token (PAT) or a Service Account Token (SAT). You'll use a PAT for local development and a SAT in the build validation pipeline. If using a PAT it requires the scopes: `vso.code` and `vso.identity`.
- The `getRequiredReviewerName` function is a placeholder for your logic to determine the name of your required reviewer, if any. You should implement your logic here to determine when dynamically assigned reviewers are appropriate.
- The `searchIdentityForReviewer` function searches for the required reviewer in the Azure DevOps identity system. It uses the Azure DevOps REST API to search for identities based on a search term. Rather frustratingly, you can't directly use the Azure AD / Entra ID Graph API to search for users in Azure DevOps.
- The `determineAction` function checks if the required reviewer is already assigned to the pull request and whether they have approved it.
  - If they have, it logs a success message.
  - If they haven't, it throws an error with a message indicating that the required reviewer needs to approve the pull request.
  - If the required reviewer is not assigned, it assigns them to the pull request and throws an error with a message indicating that the pull request requires their approval.

## Running the code

You can run the code locally to test it. You'll need to set up a Personal Access Token (PAT) with the required scopes and set the environment variables accordingly. You can then run the code using:

```bash
npm start -- --pat [YOUR_PAT] --pullRequestId [PULL_REQUEST_ID] --organization [ORGANISATION_NAME] --repositoryName [ADO_REPOSITORY_NAME] --projectName [ADO_PROJECT_NAME]
```

## Conclusion

In this post, we've seen how to dynamically assign required reviewers for a pull request in Azure DevOps using build validations and the Azure DevOps API brought together with a little TypeScript. By co-opting your existing build validation pipeline, you can ensure that the code is reviewed by the appropriate people before it is merged into the main branch.

Use this. Make your risk and audit teams happy!
