window.addEventListener('load', () => {
  console.log('GA4 page_view 発火準備OK');
  window.gtag?.('event', 'page_view', {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
  console.log('GA4 page_view 送信したよ');
});
