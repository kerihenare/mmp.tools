import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

import { manifest } from './manifest';

export interface Env {
  __STATIC_CONTENT: string;

  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

export default {
  /**
   *
   * @param request
   * @param _env
   * @param ctx
   * @returns
   */
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/asset-manifest.json') {
      return new Response(JSON.stringify(manifest, null, 2), {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      });
    }

    try {
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
    } catch (e) {
      return new Response(`mmp.tools @ ${Date.now().toString(36)}`);
    }
  }
};
