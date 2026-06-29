# Myo Family Health — Free Resources (Instagram link-in-bio)

A mobile-first (9:16) landing page for the Myo Family Health Instagram bio link.
It holds **4 free myofunctional therapy guides**. Tapping a topic opens the PDF
right on the phone, with **Open** and **Download** options. Until a guide is
ready, the card shows a tidy **"Coming soon"** state — so the whole skeleton can
go live now and the PDFs can be dropped in later.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page structure |
| `styles.css` | Branding + 9:16 mobile layout |
| `app.js` | **The 4 sections live here — edit this** |
| `assets/logo-tree.png` | Exact Myo Family Health tree logo |
| `assets/logo-wordmark.png` | *(optional)* exact horizontal wordmark — drop it in and it shows |
| `pdfs/` | Put the guide PDFs here |

## How to add a real PDF (no coding needed beyond this)

1. Save the PDF into the `pdfs/` folder (e.g. `breathing.pdf`).
2. Open `app.js`, find the matching section in the `SECTIONS` list, and change:
   ```js
   pdf: "pdfs/breathing.pdf",
   ready: true,
   ```
3. Commit & push. The card now opens the PDF.

You can also rename the `title` and `blurb` of each of the 4 sections in that
same list.

## Publishing to the Instagram bio link

This is a static site — host it free on **GitHub Pages**:

1. Repo **Settings → Pages → Build and deployment**.
2. Source: **Deploy from a branch** → branch `main` (or the deploy branch) → `/ (root)`.
3. GitHub gives you a URL like `https://<user>.github.io/<repo-name>/`.
4. Paste that URL into the Instagram bio link.

(`.nojekyll` is included so GitHub Pages serves all files as-is.)

## Visitor analytics (private)

The site can track how many people view it, using **GoatCounter** —
privacy-friendly, cookieless, no consent banner needed.

**One-time setup:**
1. Create a free account at https://www.goatcounter.com and pick a *code*
   (subdomain), e.g. `myofamilyhealth`.
2. Open `analytics.js` and set: `window.GC_CODE = "myofamilyhealth";`
3. Commit & push. Tracking turns on automatically.

**Where to see numbers:**
- **Private dashboard (login-protected):** `https://<code>.goatcounter.com` —
  views over time, referrers, countries, and how many times each guide was
  opened.

Leaving `GC_CODE` empty keeps analytics fully off.

## Branding

Colors are sampled from the Myo Family Health logo (soft teal `#7BAFB2`,
charcoal `#3D4A4E`) with the brand serif **Newsreader** + sans **DM Sans**.
The tree logo is used as-is (not recreated).
