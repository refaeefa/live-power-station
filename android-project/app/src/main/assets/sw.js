var CACHE = 'fahd-solar-saver-v1';
var FILES = ['./', 'index.html', 'saver.css', 'saver.js', 'manifest.webmanifest', 'assets/logo.png', 'assets/icon-192.png', 'assets/icon-512.png',
  'fonts/cairo-arabic-400-normal.woff2', 'fonts/cairo-arabic-600-normal.woff2', 'fonts/cairo-arabic-700-normal.woff2',
  'fonts/cairo-latin-400-normal.woff2', 'fonts/cairo-latin-600-normal.woff2', 'fonts/cairo-latin-700-normal.woff2'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })); });
self.addEventListener('fetch', function (e) { e.respondWith(caches.match(e.request).then(function (r) { return r || fetch(e.request); })); });
