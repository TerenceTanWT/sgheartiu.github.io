importScripts('/assets/js/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('SHIU').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/about/',
       '/projects/',
       '/concert-2018/',
       '/22nd-birthday-2014/',
       '/assets/'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	})
);
});