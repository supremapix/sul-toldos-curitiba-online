// Retire the legacy cache-first worker. It pinned index.html to an old build
// while Vite's hashed assets changed, leaving returning visitors with a blank page.
// Keep this URL available so already-installed workers receive this migration.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names.filter((name) => name.startsWith('sultoldos-'))
        .map((name) => caches.delete(name))
    );

    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: 'window' });
    await self.registration.unregister();

    // Reload controlled pages once, after the stale cache has been removed.
    // New visits do not register this worker, so there is no reload loop.
    await Promise.all(windows.map((client) => {
      if (!client.url.startsWith(self.registration.scope)) return;
      return client.navigate(client.url).catch(() => undefined);
    }));
  })());
});

// Deliberately no fetch handler: all requests use the current network version.
