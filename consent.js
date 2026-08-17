/* Cookie-Consent für artbyayfer.de (Google Consent Mode v2) */
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  // Standard: alles ablehnen, bis der Besucher zustimmt
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });

  function applyStoredConsent(){
    var choice = localStorage.getItem('cookie_consent');
    if (choice === 'granted') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    return choice;
  }

  function showBanner(){
    var wrap = document.createElement('div');
    wrap.id = 'cookieBanner';
    wrap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:999;background:#1D1D1F;color:#fff;padding:20px 22px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",Roboto,Helvetica,Arial,sans-serif;box-shadow:0 -10px 30px rgba(0,0,0,0.25);';
    wrap.innerHTML =
      '<div style="max-width:640px;font-size:0.85rem;line-height:1.5;color:#E8E8ED;">'
      + 'Diese Website verwendet Cookies, um Anzeigen und Website-Zugriffe zu messen. '
      + '<a href="/datenschutz.html" style="color:#C7A15E;text-decoration:underline;">Mehr in der Datenschutzerklärung</a>.'
      + '</div>'
      + '<div style="display:flex;gap:10px;flex-shrink:0;">'
      + '<button id="cookieDecline" style="padding:11px 20px;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:0.85rem;font-weight:500;cursor:pointer;">Ablehnen</button>'
      + '<button id="cookieAccept" style="padding:11px 20px;border-radius:999px;border:none;background:#A9782E;color:#fff;font-size:0.85rem;font-weight:600;cursor:pointer;">Akzeptieren</button>'
      + '</div>';
    document.body.appendChild(wrap);

    document.getElementById('cookieAccept').addEventListener('click', function(){
      localStorage.setItem('cookie_consent', 'granted');
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      wrap.remove();
    });
    document.getElementById('cookieDecline').addEventListener('click', function(){
      localStorage.setItem('cookie_consent', 'denied');
      wrap.remove();
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var choice = applyStoredConsent();
    if (!choice) { showBanner(); }
  });
})();
