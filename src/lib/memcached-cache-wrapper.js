import { MemcachedCache } from 'apollo-server-cache-memcached';
import { KeyValueCacheSetOptions } from 'apollo-server-caching';

export class MemcachedCacheWrapper extends MemcachedCache {
  constructor(serverLocation, options) {
    super(serverLocation, options);
  }

  on(event: string, listener: (details: any) => void) {
    this.client.on(event, listener);
  }

  get(key: string): Promise<string | undefined> {
    return new Promise(async (resolve) => {
      try {
        resolve(await super.get(key));
      } catch (err) {
        resolve(null);
      }
    });
  }

  set(key: string, value: string, options: KeyValueCacheSetOptions): Promise<void> {
    return new Promise(async (resolve) => {
      try {
        resolve(await super.set(key, value, options));
      } catch (err) {
        resolve();
      }
    });
  }
}
