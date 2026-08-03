import 'dotenv/config';
import { startBot } from './bot.js';
import { initPenaltyStore } from './penalties.js';

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Missing DISCORD_TOKEN in environment');
  process.exit(1);
}

// The @sap-ai-sdk reads ONLY the AICORE_SERVICE_KEY env var (a single-line JSON
// blob). It does NOT read AICORE_CLIENT_ID / _SECRET / _AUTH_URL / _BASE_URL.
if (!process.env.AICORE_SERVICE_KEY) {
  console.error(
    'Missing AICORE_SERVICE_KEY in environment. It must be a single-line JSON blob:\n' +
      '  AICORE_SERVICE_KEY={"clientid":"...","clientsecret":"...","url":"https://...","serviceurls":{"AI_API_URL":"https://.../v2"}}',
  );
  process.exit(1);
}

try {
  JSON.parse(process.env.AICORE_SERVICE_KEY);
} catch {
  console.error(
    'AICORE_SERVICE_KEY is not valid JSON. Make sure it is on a SINGLE line — ' +
      'dotenv only reads the first line, so pretty-printed multi-line JSON will fail to parse.',
  );
  process.exit(1);
}

if (!process.env.AICORE_RESOURCE_GROUP) {
  console.error(
    'Missing AICORE_RESOURCE_GROUP in environment. Set it to your provisioned ' +
      'resource group (the one your Cline uses) so requests draw on its own quota ' +
      'instead of the shared "default" bucket.',
  );
  process.exit(1);
}

// Load the persistent penalty store before the client logs in, so the first
// message can never race an uninitialised datastore.
await initPenaltyStore();

startBot(token);
