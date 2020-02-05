const staticDevCoffee = 'coffee-site-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/coffee.svg',
];

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches
      .match(fetchEvent.request)
      .then(res => res || fetch(fetchEvent.request))
  );
});
