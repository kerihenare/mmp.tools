// @ts-expect-error
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

export const manifest = JSON.parse(manifestJSON);

// Favicon

const favicon = Object.keys(manifest)
  .filter((key) => key.startsWith('assets/favicon.') && key.endsWith('.ico'))
  .pop();

if (favicon) {
  manifest['favicon.ico'] = manifest[favicon];
}
