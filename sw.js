const CACHE_NAME = 'learnfun-v1';
const urlsToCache = [
  './',
  './index.html',
  './animales.html',
  './colores.html',
  './numeros.html',
  './familia.html',
  './quiz.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
