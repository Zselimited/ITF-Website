// Google Analytics 4 with Consent Mode v2. Analytics cookies stay off until
// the visitor accepts the cookie banner; before that, Google receives only
// cookieless pings.
export const GA_ID = "G-E4SBG5XR4S";
export const CONSENT_KEY = "itf-cookie-consent"; // "granted" | "denied"
export const OPEN_COOKIE_SETTINGS = "itf:open-cookie-settings";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
}

export function getStoredConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(granted: boolean) {
  const value = granted ? "granted" : "denied";
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked: the choice applies to this visit only.
  }
  window.gtag?.("consent", "update", { analytics_storage: value });
}
