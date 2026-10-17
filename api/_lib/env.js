const fs = require('fs');
const path = require('path');

function loadEnv() {
  const envPaths = [
    path.join(__dirname, '..', '..', '.env.local'),
    path.join(__dirname, '..', '..', '.env'),
    path.join(process.cwd(), '.env.local'),
    path.join(process.cwd(), '.env')
  ];

  for (const p of envPaths) {
    if (fs.existsSync(p)) {
      try {
        const content = fs.readFileSync(p, 'utf8');
        const lines = content.split(/\r?\n/);
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            let val = trimmed.slice(eqIdx + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            process.env[key] = val;
          }
        }
      } catch (err) {
        console.error('Failed to parse env file:', p, err);
      }
    }
  }
}

loadEnv();

module.exports = { loadEnv };
