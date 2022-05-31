import { renderToString } from 'solid-js/web';

import { App } from './app';

/**
 * 
 * @param url
 * @param context
 * @returns 
 */
export function render(url: string, context: any): string {
  return renderToString(() => <App />);
}
