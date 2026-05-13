/* ============================================================
   Waarneem-Risicoscan — Service Worker
   v1.4 — About en referenties-modal
   ============================================================
   Cache-first strategy: na eerste laad werkt de tool offline.
   Bij update van een bestand: bump CACHE_VERSION zodat de SW
   de oude cache verwijdert en nieuwe bestanden ophaalt.
   ============================================================ */

const CACHE_VERSION = 'wrs-v1.4';
const CACHE_NAME = `waarneem-risicoscan-${CACHE_VERSION}`;

// Resources to pre-cache on install
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
];

/* ---------- Install ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ---------- Activate (cleanup old caches) ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('waarneem-risicoscan-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---------- Fetch (cache-first) ---------- */
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same-origin resources
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        if (cached) return cached;

        // Not in cache: fetch from network and cache it
        return fetch(event.request)
          .then((response) => {
            // Only cache successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => {
            // Network failed and no cache match — serve fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
