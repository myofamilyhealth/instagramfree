/* ============================================================
   Analytics — GoatCounter (privacy-friendly, cookieless)
   ------------------------------------------------------------
   ▶▶ ONE-TIME SETUP ◀◀
   1. Create a FREE account at  https://www.goatcounter.com
      Pick a "code" (subdomain), e.g.  myofamilyhealth
   2. Put that code between the quotes below:

        window.GC_CODE = "myofamilyhealth";

   3. In GoatCounter → Settings → "Site settings", tick
      "Allow visitor counts" (needed for the /stats page).

   That's it. Leave it as "" to keep analytics off.
   Your private dashboard lives at:
        https://<code>.goatcounter.com
   ============================================================ */

window.GC_CODE = "nathanrondoni";   // <-- put your GoatCounter code here

(function () {
  var code = window.GC_CODE;
  if (!code) return;                       // not configured yet → no tracking

  window.goatcounter = window.goatcounter || {};
  window.goatcounter.endpoint = "https://" + code + ".goatcounter.com/count";

  // Pages that set GC_NO_COUNT (e.g. the private stats page) are not
  // counted, so your own checking doesn't inflate the numbers.
  if (window.GC_NO_COUNT) window.goatcounter.no_onload = true;

  var s = document.createElement("script");
  s.async = true;
  s.src = "//gc.zgo.at/count.js";
  document.head.appendChild(s);
})();

// Helper used by app.js to log when a guide is opened (as an "event").
window.trackGuideOpen = function (slug, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path: "guide-" + slug, title: title, event: true });
  }
};
