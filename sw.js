// Minimal service worker so the phone treats this as an installable app.
// It does not cache anything: data always comes fresh from Supabase.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
