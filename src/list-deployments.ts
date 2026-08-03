/**
 * Diagnostic helper: list RUNNING deployments in your SAP AI Core resource group.
 *
 * Run with:  npm run list-deployments
 * The production bot resolves AICORE_MODEL through SAP orchestration using the
 * resource group; it does not consume a deployment id from this output.
 */
import 'dotenv/config';

interface ServiceKey {
  clientid: string;
  clientsecret: string;
  url: string;
  serviceurls: { AI_API_URL: string };
}

interface Deployment {
  id: string;
  scenarioId?: string;
  targetStatus?: string;
  status?: string;
  details?: {
    resources?: { backend_details?: { model?: { name?: string; version?: string } } };
  };
}

function parseServiceKey(): ServiceKey {
  const raw = process.env.AICORE_SERVICE_KEY;
  if (!raw) {
    console.error('Missing AICORE_SERVICE_KEY in environment');
    process.exit(1);
  }
  try {
    return JSON.parse(raw) as ServiceKey;
  } catch {
    console.error('AICORE_SERVICE_KEY is not valid JSON (must be a single line)');
    process.exit(1);
  }
}

async function fetchToken(key: ServiceKey): Promise<string> {
  const tokenUrl = `${key.url.replace(/\/$/, '')}/oauth/token`;
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: key.clientid,
    client_secret: key.clientsecret,
  });
  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) {
    throw new Error(`Token fetch failed: ${res.status} ${await res.text()}`);
  }
  const json = (await res.json()) as { access_token: string };
  return json.access_token;
}

async function listDeployments(): Promise<void> {
  const key = parseServiceKey();
  const resourceGroup = process.env.AICORE_RESOURCE_GROUP ?? 'default';

  console.log(`Fetching deployments (resource group: ${resourceGroup})…\n`);
  const token = await fetchToken(key);

  const base = key.serviceurls.AI_API_URL.replace(/\/$/, '');
  const url = `${base}/lm/deployments?$top=10000&$skip=0`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'AI-Resource-Group': resourceGroup,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`Deployment list failed: ${res.status} ${await res.text()}`);
  }

  const json = (await res.json()) as { resources?: Deployment[] };
  const deployments = (json.resources ?? []).filter(
    (d) => (d.targetStatus ?? d.status) === 'RUNNING',
  );

  if (deployments.length === 0) {
    console.log('No RUNNING deployments found in this resource group.');
    return;
  }

  console.log(`Found ${deployments.length} RUNNING deployment(s):\n`);
  for (const d of deployments) {
    const model = d.details?.resources?.backend_details?.model;
    const modelStr = model ? `${model.name}:${model.version}` : '(unknown model)';
    const scenario = d.scenarioId ?? '(unknown scenario)';
    const marker = scenario === 'foundation-models' ? '  ← foundation model' : '';
    console.log(`  id:       ${d.id}`);
    console.log(`  scenario: ${scenario}${marker}`);
    console.log(`  model:    ${modelStr}`);
    console.log('');
  }

  console.log('Deployment IDs are informational; the bot uses AICORE_MODEL + AICORE_RESOURCE_GROUP.');
}

listDeployments().catch((err) => {
  console.error('Error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
