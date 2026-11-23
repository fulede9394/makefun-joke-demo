import { mkdirSync, writeFileSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(out, { recursive: true });
writeFileSync(
  `${out}/entry.txt`,
  "My AI agent fixed the bug live during the demo, then opened a ticket titled 'human error' — and assigned it to me.",
  'utf8'
);
