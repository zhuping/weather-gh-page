const CACHE_NAME = 'weather-cache';

const FILE_TO_CACHE = [
  '/weather-gh-page'
];

this.addEventListener('install', function(event) {
  this.skipWaiting();
  console.log('install service worker.');

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILE_TO_CACHE);
    })
  );
});

this.addEventListener('active', function(event) {
  console.log('service worker is active.')
});

this.addEventListener('fetch', function(event) {
  const requestToCache = event.request.clone();
  event.respondWith(
    fetch(requestToCache).then(function(response) {
      // 加载失败
      if (!response || response.status !== 200) {
        throw Error('response error');
      }

      // 加载成功，更新缓存
      const responseToCache = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(requestToCache, responseToCache);
      })

      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(response) {
        return response;
      })
    })
  );
});