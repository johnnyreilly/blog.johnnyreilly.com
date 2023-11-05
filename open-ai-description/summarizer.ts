import { OpenAIClient } from '@azure/openai';
import { AzureCliCredential } from '@azure/identity';

// Make sure you have az login'd and have the correct subscription selected
// debug with:
// bun --inspect-brk open-ai-description/index.ts
// or:
// cd open-ai-description
// bun --inspect-brk index.ts

interface OpenAiClientAndDeploymentName {
  openAIClient: OpenAIClient;
  deploymentName: string;
}

let openAiClientAndDeploymentName: OpenAiClientAndDeploymentName | undefined;

function getClientAndDeploymentName(): OpenAiClientAndDeploymentName {
  if (openAiClientAndDeploymentName) {
    return openAiClientAndDeploymentName;
  }

  // You will need to set these environment variables or edit the following values
  const endpoint = process.env['ENDPOINT'];

  if (!endpoint) {
    throw new Error(
      'Missing ENDPOINT environment variable with a value like https://<resource name>.openai.azure.com',
    );
  }

  // This will use the Azure CLI's currently logged in user;
  // make sure you've done `az login` and have the correct subscription selected
  const credential = new AzureCliCredential();
  const openAIClient = new OpenAIClient(endpoint, credential);
  const deploymentName = 'OpenAi-gpt-35-turbo';

  openAiClientAndDeploymentName = { openAIClient, deploymentName };

  return openAiClientAndDeploymentName;
}

export async function produceSummary(article: string): Promise<string> {
  const { openAIClient, deploymentName } = getClientAndDeploymentName();
  const minChars = 120;
  const maxChars = 156;

  const messages = [
    {
      role: 'system',
      content: `You are a summarizer. You will be given the text of an article and will produce a summary / meta description which summarizes the article. The summary / meta descriptions you produce must be between ${minChars} and ${maxChars} characters long. If they are longer or shorter than that they cannot be used. Avoid using the \`'\` character as it is not supported by the blog website - you may use the \`’\` character instead. Do not use the expression "the author" or "the writer" in your summary.`,
    },
    {
      role: 'user',
      content: `Here is an article to summarize:

${article}`,
    },
  ];

  let attempts = 0;
  const maxAttempts = 10;
  let summary = '';
  while (attempts++ < maxAttempts) {
    console.log(`Attempt ${attempts} of ${maxAttempts}`);

    // This will use the Azure CLI's currently logged in user;
    // make sure you've done `az login` and have the correct subscription selected
    const result = await openAIClient.getChatCompletions(
      deploymentName,
      messages,
      {
        temperature: 0.9,
      },
    );

    for (const choice of result.choices) {
      summary = choice.message?.content || '';

      if (summary.length >= minChars && summary.length <= maxChars) {
        return summary;
      }
      console.log(`Summary was ${summary.length} characters long; no good`);
    }

    messages.push(
      {
        role: 'assistant',
        content: summary,
      },
      {
        role: 'user',
        content:
          summary.length < minChars
            ? `Too short; try again please - we require a summary that is between ${minChars} and ${maxChars} characters long.`
            : `Too long; try again please - we require a summary that is between ${minChars} and ${maxChars} characters long.`,
      },
    );

    console.log(messages);

    await sleep(500);
  }

  console.log(`Failed to produce a summary in ${maxAttempts} attempts`);
  return '';
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
