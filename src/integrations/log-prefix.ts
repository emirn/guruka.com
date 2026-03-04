/**
 * Shared helper to prefix Astro integration logs with [site:domain].
 * Uses logger.fork() so the site prefix appears before the integration name
 * in Astro's native log format: [site:host] [integrationName] message
 */

interface AstroLogger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  fork(label: string): AstroLogger;
}

export function createPrefixedLogger(logger: AstroLogger, siteUrl: string, integrationName: string): AstroLogger {
  // If the build wrapper is handling the site prefix, just fork with integration name
  if (process.env.AICW_BUILD_PREFIX_ACTIVE === '1') {
    return logger.fork(integrationName);
  }

  let hostname = '';
  try {
    hostname = new URL(siteUrl).hostname;
  } catch {}

  if (!hostname) return logger;

  // Astro wraps the label as [label], so this produces [site:host] [name]
  return logger.fork(`site:${hostname}] [${integrationName}`);
}
