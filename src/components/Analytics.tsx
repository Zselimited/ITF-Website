import Script from "next/script";
import { CONSENT_KEY, GA_ID } from "@/lib/analytics";

// Consent defaults must be queued before the config call, so they live in the
// same inline script. A returning visitor's stored choice is applied up front.
const init = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var stored = null;
try { stored = localStorage.getItem('${CONSENT_KEY}'); } catch (e) {}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: stored === 'granted' ? 'granted' : 'denied'
});
gtag('js', new Date());
gtag('config', '${GA_ID}');
`;

export default function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {init}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
