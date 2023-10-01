let cacheData = "Cache Destination";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "/index.js",
        "/index.css",
        "/swDev.js",
        "/App.js",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.log(error);
      }),
    {
      cache: {
        maxAgeSeconds: 60 * 60 * 24,
      },
    }
  );
});
