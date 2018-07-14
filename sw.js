const staticCacheName = 'restaurant-reviews-1';

//Install site assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js'

      ]);
    })
  );
});

//Send requests to cache
//This addes offline capability
self.addEventListener('fetch', function(event) {

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
