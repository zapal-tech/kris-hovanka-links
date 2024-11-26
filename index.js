if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const sw = navigator.serviceWorker;

    sw.register("/service-worker.js")
      .then((registration) => {
        console.log("Service worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service worker registration failed:", error);
      });
  });
}
