document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const watermark = document.querySelector('a[href*="elfsight.com"]');
    if (watermark) {
      watermark.remove();
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
