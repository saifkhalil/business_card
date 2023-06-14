var staticCacheName = 'qi-creative-v2' + new Date().getTime();
var filesToCache = [
    '/static/css/aos.css',
    '/static/css/bootstrap.min.css.css',
    '/static/css/index-ce0453.css',
    '/images/Burger_button.svg',
    '/images/Search.svg',
    '/images/profile.svg',
    '/images/qi-logo.svg',
    '/images/profile.svg',
    '/images/qi-logo-yellow.svg'
];

self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                .filter(cacheName => (cacheName.startsWith("qi-creative-pwa")))
                .filter(cacheName => (cacheName !== staticCacheName))
                .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
        .catch(() => {
            return caches.match('offline');
        })
    )
});