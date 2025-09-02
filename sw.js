// VWTech Dev - Service Worker
const CACHE_NAME = 'vwtechdev-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/css/base.css',
  '/src/js/index.js',
  '/src/js/emailjs-config.js',
  '/src/img/logo.png',
  '/src/img/background.png',
  '/src/img/code-apps.svg',
  '/src/img/services/service-01.webp',
  '/src/img/services/service-02.webp',
  '/src/img/services/service-03.webp',
  '/src/img/services/service-04.webp',
  '/src/img/services/service-05.webp',
  '/src/img/services/service-06.webp',
  '/src/img/projects/project-01.png',
  '/src/img/projects/project-02.png',
  '/src/img/projects/project-03.png',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://unpkg.com/aos@2.3.1/dist/aos.js',
  'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Cache install failed:', error);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(function(error) {
        console.log('Fetch failed:', error);
        // Return offline page if available
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', function(event) {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      console.log('Background sync for contact form')
    );
  }
});

// Push notifications (for future use)
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/src/img/logo.png',
      badge: '/src/img/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver Site',
          icon: '/src/img/logo.png'
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/src/img/logo.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
