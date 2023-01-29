---
title: 'Create a Pipeline with the Azure DevOps API'
authors: johnnyreilly
tags: [Azure Pipelines, azure devops api]
image: ./new-pipeline.webp
hide_table_of_contents: false
---

Creating an Azure Pipeline using the Azure DevOps REST API is possible, but badly documented. This post goes through how to do this.

## curling a pipeline

The [documentation](https://docs.microsoft.com/en-us/rest/api/azure/devops/pipelines/pipelines/create?view=azure-devops-rest-6.1) for creating an Azure Pipeline using the Azure DevOps API is somewhat lacking. However it isn't actually too hard, you just need the recipe.

Here's a curl to make you a pipeline:

```bash
curl  --user '':'PERSONAL_ACCESS_TOKEN' --header "Content-Type: application/json" --header "Accept:application/json" https://dev.azure.com/organisation-name/sandbox/_apis/pipelines?api-version=6.1-preview.1 -d @makepipeline.json
```

Looking at the above there's two things you need:

1. A personal access token. You can make one of those here: https://dev.azure.com/organisation-name/_usersSettings/tokens (where `organisation-name` is the name of your organisation)
2. A `makepipeline.json` file, which contains the details of the pipeline you want to create:

```json
{
  "folder": null,
  "name": "pipeline-made-by-api",
  "configuration": {
    "type": "yaml",
    "path": "/azure-pipelines.yml",
    "repository": {
      "id": "guid-of-repo-id",
      "name": "my-repo",
      "type": "azureReposGit"
    }
  }
}
```

Let's talk through the significant properties above:

- `folder` - can be `null` if you'd like the pipeline to be created in the root of Pipelines; otherwise provide the folder name. Incidentally a `null` will be translated into a value of `\\` which appears to be the magic value which represents the root.
- `name` - your pipeline needs a name
- `path` - this is the path to the yaml pipelines file in the repo. Note we're creating the pipeline itself here; what's actually in the pipeline sits in that file.
- `repository.id` - this is the guid that represents the repo you're creating the pipeline for. You can find this out by going to your equivalent https://dev.azure.com/organisation-name/project-name/_settings/repositories (substituting in appropriate values) and looking up your repository there.
- `repository.name` - the name of your repo

When you execute your curl you should be returned some JSON along these lines:

```json
{
  "_links": {
    "self": {
      "href": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_apis/pipelines/975?revision=1"
    },
    "web": {
      "href": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_build/definition?definitionId=975"
    }
  },
  "configuration": {
    "path": "/azure-pipelines.yml",
    "repository": {
      "id": "9a72560d-1622-4016-93dd-32ac85b96d03",
      "type": "azureReposGit"
    },
    "type": "yaml"
  },
  "url": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_apis/pipelines/975?revision=1",
  "id": 975,
  "revision": 1,
  "name": "pipeline-made-by-api",
  "folder": "\\"
}
```

And inside Azure DevOps you'll now have a shiny new pipeline:

![The new pipeline](new-pipeline.webp)
