import { google } from 'googleapis';
import yargs from 'yargs/yargs';
const { hideBin } = require('yargs/helpers')

export function getArgs() {
    const argv = yargs(hideBin(process.argv)).argv;

    const clientId = argv.clientId as string;
    const clientSecret = argv.clientSecret as string;

    const code = argv.code as string | undefined;
    const refreshToken = argv.refreshToken as string | undefined;
    const test = argv.test as boolean;
    
    return { code, clientId, clientSecret, refreshToken, test }
}

export function makeOAuth2Client({ clientId, clientSecret }: { clientId: string; clientSecret: string }) {
    return new google.auth.OAuth2(
        /* YOUR_CLIENT_ID */ clientId,
        /* YOUR_CLIENT_SECRET */ clientSecret,
        /* YOUR_REDIRECT_URL */ 'urn:ietf:wg:oauth:2.0:oob'
    );
}
