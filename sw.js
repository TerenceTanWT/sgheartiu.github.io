importScripts('/assets/js/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('SGHIU').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/about/',
       '/projects/',
       '/concert-2018/',
       '/blue/',
       '/assets/css/main.css',
       '/assets/css/overlay-terence.css',
       '/assets/files/fanchant-concert-2018.pdf',
       '/assets/js/cache-polyfill.js',
       '/assets/js/jquery-1.12.0.min.js',
       '/assets/js/jquery.backstretch.min.js',
       '/assets/js/jquery.dlmenu.min.js',
       '/assets/js/jquery.fitvid.min.js',
       '/assets/js/jquery.goup.min.js',
       '/assets/js/jquery.magnific-popup.min.js',
       '/assets/js/modernizr-3.3.1.custom.min.js',
       '/assets/js/NoSleep.min.js',
       '/assets/js/overlay-terence.js',
       '/assets/js/pwa-url.js',
       '/assets/fonts/FiraSans/woff/FiraSans-Light.woff',
       '/assets/fonts/FiraSans/woff/FiraSans-LightItalic.woff',
       '/assets/fonts/FiraSans/woff/FiraSans-Regular.woff',
       '/assets/fonts/FiraSans/woff/FiraSans-Bold.woff',
       '/assets/img/background-medium.jpg',
       '/assets/img/logo-small.png'
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