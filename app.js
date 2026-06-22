/* ============================================================
   Myo Family Health — Free Resources
   ------------------------------------------------------------
   ▶▶ EDIT YOUR 4 SECTIONS HERE ◀◀

   When a PDF is ready:
     1. Drop the file into the  /pdfs  folder.
     2. Set  pdf:  to that file name.
     3. Set  ready: true

   Until ready is true, tapping the card shows a friendly
   "Coming soon" message — nothing else to change.
   ============================================================ */

const SECTIONS = [
  {
    title: "Mouth & Nasal Breathing",
    blurb: "Why nose breathing matters and how to retrain it.",
    pdf: "pdfs/breathing.pdf",
    ready: true,
    icon: "wind",
  },
  {
    title: "Tongue Posture & Swallowing",
    blurb: "Resting tongue position and healthy swallow patterns.",
    pdf: "pdfs/tongue-posture.pdf",
    ready: true,
    icon: "smile",
  },
  {
    title: "Growing Smiles (Kids)",
    blurb: "Early signs to watch for in growing children.",
    pdf: "pdfs/growing-smiles.pdf",
    ready: true,
    icon: "child",
  },
  {
    title: "Sleep & Airway Health",
    blurb: "How myofunctional therapy supports better sleep.",
    pdf: "pdfs/sleep-airway.pdf",
    ready: true,
    icon: "moon",
  },
];

/* ---------- Inline SVG icon set (brand teal) ---------- */
const ICONS = {
  wind:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5"/><path d="M3 16h9a2.5 2.5 0 1 1-2.5 2.5"/></svg>',
  smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  child: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.4"/><path d="M12 7.4V14"/><path d="M8 10h8"/><path d="M12 14l-3 6"/><path d="M12 14l3 6"/></svg>',
  moon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  doc:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
  open:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  down:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
};

/* ---------- Render the 4 cards ---------- */
const sectionsEl = document.getElementById("sections");

SECTIONS.forEach((s, i) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.setAttribute("aria-label", `Open: ${s.title}`);
  card.innerHTML = `
    <span class="card__icon">${ICONS[s.icon] || ICONS.doc}</span>
    <span class="card__text">
      <span class="card__title">${s.title}</span>
      <span class="card__blurb">${s.blurb}</span>
      ${s.ready ? "" : '<span class="card__status">Coming soon</span>'}
    </span>
    <span class="card__cta">${ICONS.arrow}</span>
  `;
  card.addEventListener("click", () => openSection(s));
  sectionsEl.appendChild(card);
});

/* ---------- Modal logic ---------- */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
let lastFocused = null;

function openSection(s) {
  lastFocused = document.activeElement;
  modalTitle.textContent = s.title;

  // Log which guide was opened (privacy-friendly event, no personal data)
  const slug = s.pdf.split("/").pop().replace(".pdf", "");
  if (window.trackGuideOpen) window.trackGuideOpen(slug, s.title);

  if (s.ready && s.pdf) {
    modalBody.innerHTML = `
      <iframe src="${s.pdf}#view=FitH" title="${s.title}" loading="lazy"></iframe>
      <div class="viewer-actions">
        <a class="btn btn--ghost" href="${s.pdf}" target="_blank" rel="noopener">
          ${ICONS.open} Open
        </a>
        <a class="btn btn--primary" href="${s.pdf}" download>
          ${ICONS.down} Download
        </a>
      </div>
    `;
  } else {
    modalBody.innerHTML = `
      <div class="soon">
        <div class="soon__mark">${ICONS.doc}</div>
        <h3>Coming soon</h3>
        <p>This guide is being put together by the Myo Family Health team.
           Check back shortly — it will open right here.</p>
      </div>
    `;
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.hidden = true;
  modalBody.innerHTML = "";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
