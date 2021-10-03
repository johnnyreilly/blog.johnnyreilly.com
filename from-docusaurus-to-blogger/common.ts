import { google } from "googleapis";
import yargs from "yargs/yargs";
const { hideBin } = require("yargs/helpers");

export function getArgs() {
  const argv = yargs(hideBin(process.argv)).argv;

  const clientId = argv.clientId as string;
  const clientSecret = argv.clientSecret as string;

  const code = argv.code as string | undefined;
  const refreshToken = argv.refreshToken as string | undefined;
  const test = argv.test as boolean;

  if (!clientId) throw new Error("No clientId - is this being run by a fork?");
  console.log("We have a clientId");

  if (!clientSecret)
    throw new Error("No clientSecret - is this being run by a fork?");
  console.log("We have a clientSecret");

  if (!code && !refreshToken)
    throw new Error(
      "No code and no refreshToken - is this being run by a fork?"
    );
  if (code) console.log("We have a code");
  if (refreshToken) console.log("We have a refreshToken");

  return { code, clientId, clientSecret, refreshToken, test };
}

export function makeOAuth2Client({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) {
  return new google.auth.OAuth2(
    /* YOUR_CLIENT_ID */ clientId,
    /* YOUR_CLIENT_SECRET */ clientSecret,
    /* YOUR_REDIRECT_URL */ "urn:ietf:wg:oauth:2.0:oob"
  );
}
