import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

import { manifest } from './manifest';

export interface Env {
  __STATIC_CONTENT: string;
}

export default {
  /**
   *
   * @param request
   * @param env
   * @param ctx
   * @returns
   */
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.slice(1);

    if (manifest[pathname]) {
      return await getAssetFromKV(
        {
          request,
          waitUntil: (promise) => ctx.waitUntil(promise)
        },
        {
          ASSET_MANIFEST: manifest,
          ASSET_NAMESPACE: env.__STATIC_CONTENT
        }
      );
    }

    if (pathname === 'dev/asset-manifest.json') {
      return new Response(JSON.stringify(manifest, null, 2), {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      });
    }

    try {
      return await getAssetFromKV(
        {
          request: new Request(url.origin + '/index.html', request),
          waitUntil: (promise) => ctx.waitUntil(promise)
        },
        {
          ASSET_MANIFEST: manifest,
          ASSET_NAMESPACE: env.__STATIC_CONTENT
        }
      );
    } catch (e) {
      return new Response('Server Error', {
        status: 500
      });
    }
  }
};
