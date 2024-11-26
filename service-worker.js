const cacheName = "zapal-links-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/index.js",
          "/service-worker.js",
          "/css/reset.css",
          "/css/styles.css",
          "/images/logo.svg",
          "/images/zapal-logo-with-text-white.svg",
          "/images/icons/clutch.svg",
          "/images/icons/generic-calendar.svg",
          "/images/icons/generic-phone.svg",
          "/images/icons/generic-website.svg",
          "/images/icons/generic-calendar.svg",
          "/images/icons/instagram.svg",
          "/images/icons/linkedin.svg",
          "/images/icons/spotify.svg",
          "/fonts/Ronald/Ronald-Regular.woff2",
          "/fonts/Ronald/Ronald-Medium.woff2",
          "/fonts/Ronald/Ronald-SemiBold.woff2",
          "/fonts/Ronald/Ronald-ExtraBold.woff2",
        ])
      )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});
