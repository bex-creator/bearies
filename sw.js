self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    // Simple pass-through fetch for PWA requirement validation
    event.respondWith(fetch(event.request).catch(() => {
        return new Response('You are offline. Please reconnect to the internet to stream music on Aura.');
    }));
});
