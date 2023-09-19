---
slug: azure-pipelines-task-lib-and-isoutput-setvariable
title: 'azure-pipelines-task-lib and isOutput setVariable'
authors: johnnyreilly
tags: [azure pipelines]
hide_table_of_contents: false
description: 'This is a workaround for custom Azure Pipelines task extension to output variable since the library does not support "isOutput=true."'
---

Some blog posts are insightful treatises on the future of web development, some are "here's how I solved my problem". This is most assuredly the latter.

I'm writing an [custom pipelines task extension for Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops). It's written with TypeScript and the [azure-pipelines-task-lib](https://github.com/microsoft/azure-pipelines-task-lib).

<!--truncate-->

The pipeline needs to output a variable. Azure Pipelines does that using the `setvariable` command combined with [isOutput=true](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable). This looks something like this: `##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the value"`.

The bad news is that the lib [doesn't presently support `isOutput=true`](https://github.com/microsoft/azure-pipelines-task-lib/issues/688). Gosh it makes me sad. Hopefully in future it will be resolved. But what now?

For now we can hack ourselves a workaround:

```ts
import * as tl from 'azure-pipelines-task-lib/task';
import * as tcm from 'azure-pipelines-task-lib/taskcommand';
import * as os from 'os';

/**
 * Sets a variable which will be output as well.
 *
 * @param     name    name of the variable to set
 * @param     val     value to set
 * @param     secret  whether variable is secret.  Multi-line secrets are not allowed.  Optional, defaults to false
 * @returns   void
 */
export function setOutputVariable(
  name: string,
  val: string,
  secret = false,
): void {
  // use the implementation of setVariable to set all the internals,
  // then subsequently set the output variable manually
  tl.setVariable(name, val, secret);

  const varValue = val || '';

  // write the command
  // see https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-a-multi-job-output-variable
  _command(
    'task.setvariable',
    {
      variable: name || '',
      isOutput: 'true',
      issecret: (secret || false).toString(),
    },
    varValue,
  );
}

const _outStream = process.stdout;

function _writeLine(str: string): void {
  _outStream.write(str + os.EOL);
}

function _command(command: string, properties: any, message: string) {
  const taskCmd = new tcm.TaskCommand(command, properties, message);
  _writeLine(taskCmd.toString());
}
```

The above is effectively a wrapper for the existing [`setVariable`](https://github.com/microsoft/azure-pipelines-task-lib/blob/90e9cde0e509cba77185a80ef3af2fc898fb026c/node/task.ts#L162). However, once it's called into the initial implementation, `setOutputVariable` then writes out the same variable once more, but this time bolting on `isOutput=true`.

Finally, I've raised a PR to see if `isOutput` can be added directly to the library. [You can track progress on that here.](https://github.com/microsoft/azure-pipelines-task-lib/pull/691)
