const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

/** Load gtag.js once in production when a measurement ID is configured. */
export function initAnalytics() {
  if (initialized || !GA_ID || import.meta.env.DEV) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  // Manual page_view on route changes — see AnalyticsListener.
  window.gtag("config", GA_ID, { send_page_view: false });
}

/** Fire a GA4 page_view for SPA navigations. */
export function trackPageView(path: string) {
  if (!GA_ID || import.meta.env.DEV || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
