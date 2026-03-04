#!/usr/bin/env node
// Wrapper that prefixes every stdout/stderr line with [site:domain].
// Usage: node scripts/with-prefix.mjs <command> [args...]
// Set AICW_SKIP_BUILD_PREFIX=1 to passthrough without prefixing.

import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { Transform } from 'node:stream';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/with-prefix.mjs <command> [args...]');
  process.exit(1);
}

let prefix = '';

if (process.env.AICW_SKIP_BUILD_PREFIX !== '1') {
  try {
    const config = JSON.parse(readFileSync('data/site-config.json', 'utf8'));
    const url = config?.branding?.site?.url;
    if (url) {
      const hostname = new URL(url).hostname;
      prefix = `[site:${hostname}] `;
    }
  } catch {
    // No config or bad URL — run without prefix
  }
}

function createLineTransform(prefix) {
  let buffer = '';
  return new Transform({
    transform(chunk, _encoding, callback) {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      // Keep the last (possibly incomplete) line in the buffer
      buffer = lines.pop();
      for (const line of lines) {
        this.push(prefix + line + '\n');
      }
      callback();
    },
    flush(callback) {
      if (buffer) {
        this.push(prefix + buffer + '\n');
      }
      callback();
    }
  });
}

const child = spawn(args.join(' '), {
  stdio: prefix ? ['inherit', 'pipe', 'pipe'] : 'inherit',
  shell: true,
  env: { ...process.env, ...(prefix ? { AICW_BUILD_PREFIX_ACTIVE: '1' } : {}) }
});

if (prefix) {
  child.stdout.pipe(createLineTransform(prefix)).pipe(process.stdout);
  child.stderr.pipe(createLineTransform(prefix)).pipe(process.stderr);
}

child.on('close', (code) => {
  process.exit(code ?? 1);
});
