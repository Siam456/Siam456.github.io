// Analytics: GA4 + Microsoft Clarity.
//
// IDs come only from build-time env vars (VITE_GA_ID / VITE_CLARITY_ID) and are
// never committed to the repo. Each service loads only when its ID is present
// AND this is a production build; otherwise it's a no-op.

const GA_ID = import.meta.env.VITE_GA_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

const gaEnabled = Boolean(GA_ID) && import.meta.env.PROD;
const clarityEnabled = Boolean(CLARITY_ID) && import.meta.env.PROD;

interface ClarityFn {
  (...args: unknown[]): void;
  q?: unknown[];
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ClarityFn;
  }
}

let started = false;

export function initAnalytics(): void {
  if (started || typeof window === "undefined") return;
  started = true;

  if (gaEnabled) initGA();
  if (clarityEnabled) initClarity();
}

function initGA(): void {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  // Send page_view manually so SPA navigations are tracked consistently.
  window.gtag("config", GA_ID, { send_page_view: false });
  trackPageview();
}

function initClarity(): void {
  const queue: ClarityFn = function clarity() {
    // eslint-disable-next-line prefer-rest-params
    (queue.q = queue.q || []).push(arguments);
  };
  window.clarity = window.clarity || queue;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(script);
}

export function trackPageview(path?: string): void {
  if (typeof window === "undefined") return;
  const page_path = path ?? window.location.pathname + window.location.search;

  if (gaEnabled && started && window.gtag) {
    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
  if (clarityEnabled && started && window.clarity) {
    window.clarity("set", "page_path", page_path);
  }
}
