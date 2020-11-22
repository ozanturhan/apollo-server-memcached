import { MemcachedCacheWrapper } from '../lib';

export const createCache = () => {
  const cache = new MemcachedCacheWrapper('localhost:3000', {
    retries: 2,
    retry: 1000,
  });

  cache.on('issue', (details) => console.log(JSON.stringify(details, null, 4)));

  return cache;
};
