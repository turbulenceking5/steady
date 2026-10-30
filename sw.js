// Network-first, falling back to cache so the app works offline.
// Bump CACHE_NAME when changing what gets cached.
const CACHE_NAME = "steady-v48";
const FILES = ["./", "index.html", "content.js", "manifest.webmanifest", "icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    // no-cache: always revalidate with the server, so a stale HTTP-cached content.js can't
    // be paired with a newer index.html. Navigations can't take a RequestInit.
    fetch(e.request.mode === "navigate" ? e.request : new Request(e.request, { cache: "no-cache" }))
      .then((res) => { const copy = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request))
  );
});
