importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'react-sw-sample-cache',
    precache: 'precache',
    runtime: 'runtime',
  });

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'react-sw-sample-cache-css',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);

// 2. images
workbox.routing.registerRoute(
  new RegExp('\.(png|svg|jpg|jpeg)$'),
  workbox.strategies.cacheFirst({
      cacheName: 'react-sw-sample-cache-images',
      plugins: [
          new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 7,
              maxEntries: 50,
              purgeOnQuotaError: true
          })
      ]
  })
);

// 3. cache API results
workbox.routing.registerRoute(
  new RegExp('https://www.googleapis.com/youtube/v3/search'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'react-sw-sample-cache-api',
      cacheExpiration: {
          maxAgeSeconds: 60 * 30 //cache the news content for 30mn
      }
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);