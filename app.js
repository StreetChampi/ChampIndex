/* ============================================================
   Clé de détermination des champignons à lames
   Reformulation personnelle organisée pour un usage EN FORÊT.

   Moteur multi-pistes : quand une question ne peut pas être
   observée (bouton "je ne sais pas") ou qu'aucune réponse ne
   correspond, l'app explore LES DEUX branches possibles et
   continue de poser d'autres questions utiles tant qu'il en
   reste. La liste de pistes ne s'affiche que lorsqu'aucune
   question supplémentaire ne permettrait plus de trancher.

   Quatre genres sont approfondis jusqu'à l'espèce : Amanites,
   Lépiotes, Cystodermes et Agarics. L'Amanite tue-mouches sert
   de démonstration pour un modèle de fiche plus complet.
   ============================================================ */

const RISK_LABELS = {
  deadly: "Mortelle",
  toxic: "Toxique",
  caution: "Comestibilité délicate, grande prudence",
  inedible: "Non comestible",
  edible: "Comestible réputée (à confirmer)",
  unknown: "Comestibilité mal connue",
};
const RISK_COLORS = {
  deadly: { bg: "var(--risk-deadly-bg)", fg: "#F3ECDD" },
  toxic: { bg: "var(--risk-toxic-bg)", fg: "#F3ECDD" },
  caution: { bg: "var(--risk-caution-bg)", fg: "#241D13" },
  inedible: { bg: "#5B5344", fg: "#F3ECDD" },
  edible: { bg: "var(--risk-edible-bg)", fg: "#F3ECDD" },
  unknown: { bg: "var(--risk-unknown-bg)", fg: "#F3ECDD" },
};
const RISK_RANK = { deadly: 0, toxic: 1, caution: 2, inedible: 3, unknown: 4, edible: 5 };
function riskRank(res) {
  if (res.risk && RISK_RANK.hasOwnProperty(res.risk)) return RISK_RANK[res.risk];
  return 2.5;
}

/* Petites icônes de risque, tracé minimal, encre unique (currentColor) */
const ICONS = {
  skull: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a7 7 0 0 0-7 7v3.5c0 1 .5 1.7 1.3 2.2L7 17v2a1 1 0 0 0 1 1h1.2l.4 1.3a.9.9 0 0 0 .9.7h3a.9.9 0 0 0 .9-.7l.4-1.3H16a1 1 0 0 0 1-1v-2l.7-1.3c.8-.5 1.3-1.2 1.3-2.2V10a7 7 0 0 0-7-7Z"/><circle cx="9.5" cy="11" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r="1.1" fill="currentColor" stroke="none"/></svg>',
  warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 21 19H3Z"/><line x1="12" y1="10" x2="12" y2="14"/><circle cx="12" cy="16.6" r="0.9" fill="currentColor" stroke="none"/></svg>',
  caution: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 12 12 21 3 12Z"/><line x1="12" y1="8.5" x2="12" y2="13"/><circle cx="12" cy="15.6" r="0.9" fill="currentColor" stroke="none"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 6.5"/></svg>',
  question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.1-1.5 2.4"/><circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none"/></svg>',
  idtag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 11 3h7a1 1 0 0 1 1 1v7l-8 8a1.5 1.5 0 0 1-2 0l-6-6a1.5 1.5 0 0 1 0-2Z"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
  why: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.5 12.8 13.6 8.7 15.3l1.7-4.1 4.1-1.7Z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>',
  capicon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11c0-4 3.5-7 8-7s8 3 8 7"/><line x1="4" y1="11" x2="20" y2="11"/><path d="M10 11v6a2 2 0 0 0 4 0v-6"/></svg>',
  confuse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9.5" cy="12" r="6"/><circle cx="14.5" cy="12" r="6"/></svg>',
  inedible: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h13a3 3 0 0 1 0 6H4z"/><path d="M4 10V8"/><path d="M14 10c1-2 3-3 5-2"/><line x1="3" y1="3" x2="21" y2="21"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><path d="M10 20v-5h4v5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
};
const RISK_ICON_NAME = { deadly: "skull", toxic: "warning", caution: "caution", inedible: "inedible", edible: "check", unknown: "question" };

function makeIcon(name) {
  const span = document.createElement("span");
  span.className = "badge-icon";
  span.innerHTML = ICONS[name] || "";
  return span;
}
function makeRiskBadge(risk) {
  const badge = document.createElement("div");
  badge.className = "risk-badge";
  const colors = RISK_COLORS[risk];
  badge.style.background = colors.bg;
  badge.style.color = colors.fg;
  badge.appendChild(makeIcon(RISK_ICON_NAME[risk] || "question"));
  const label = document.createElement("span");
  label.textContent = RISK_LABELS[risk];
  badge.appendChild(label);
  return badge;
}

/* Fiche espèce enrichie : petit lexique pour nommer brièvement
   le type d'observation derrière chaque question posée. Purement
   présentatif — dérivé du texte de la question, aucune donnée
   scientifique n'est modifiée. */
function shortTraitLabel(question) {
  const q = question.toLowerCase();
  const rules = [
    [/volve/, "Volve"],
    [/anneau/, "Anneau"],
    [/latex/, "Latex"],
    [/cortine/, "Cortine"],
    [/bulbe/, "Bulbe"],
    [/chair/, "Chair"],
    [/lames? (sont|descend|fendu|arête|devenant|deviennent)|arête des lames/, "Lames"],
    [/couleur|rouge|brun|gris|jaune|blanc|orangé|rose|lilas|vermillon/, "Couleur"],
    [/odeur/, "Odeur"],
    [/taille|grande|petite| cm/, "Taille"],
    [/se sépare|se détache/, "Séparation chapeau / pied"],
    [/bois|sol|crottin|fumier|herbe|pousse/, "Habitat"],
    [/chapeau/, "Chapeau"],
  ];
  for (const [re, label] of rules) {
    if (re.test(q)) return label;
  }
  return "Observation";
}

function makeSectionHead(label, iconName, variantClass) {
  const head = document.createElement("div");
  head.className = "section-head " + variantClass;
  const icon = document.createElement("span");
  icon.className = "section-icon";
  icon.innerHTML = ICONS[iconName] || "";
  const text = document.createElement("span");
  text.textContent = label;
  head.appendChild(icon);
  head.appendChild(text);
  return head;
}

function buildChip(question, answerLabel, variant) {
  const chip = document.createElement("span");
  chip.className = "chip" + (variant ? " chip-" + variant : "");
  const strong = document.createElement("strong");
  strong.textContent = shortTraitLabel(question) + " : ";
  chip.appendChild(strong);
  chip.appendChild(document.createTextNode(answerLabel));
  return chip;
}

function buildObserveChip(question) {
  const chip = document.createElement("span");
  chip.className = "chip chip-observe";
  chip.textContent = shortTraitLabel(question) + " : à vérifier";
  return chip;
}

/* Sur une courte liste de pistes (1 à 4), on peut proposer un
   indice tiré de la fiche espèce quand elle existe (repérée par
   la présence d'un champ "risk", propre aux fiches détaillées).
   Aucune fiche générique de genre ne porte ce champ : elles ne
   reçoivent donc jamais d'indice supplémentaire. */
function hasSpeciesSheet(res) {
  return res && res.risk !== undefined;
}
function extractClue(res, candidates) {
  const source = res.note || res.chapeau || res.confusions || "";
  if (!source) return "";
  const sentences = source.split(/(?<=[.!?;])\s+/).map((s) => s.trim()).filter(Boolean);
  const distinctive = [
    [/écaill|verrue|mèch|flocon|fibrille|squam/i, 12],
    [/anneau|cortine|volve/i, 11],
    [/bulbe|bourrelet|guêtr|radicant/i, 10],
    [/lame|lamelle|arête/i, 9],
    [/chair|roug|jaun|brun.*à la cassure/i, 8],
    [/odeur|phénol|anis|radis/i, 8],
    [/habitat|feuillu|résineux|pelouse|herbe|bois|souche/i, 7],
    [/mamelon|strié|visqueux|gluant|velout/i, 6],
  ];
  const candidateText = (candidates || []).map((id) => {
    const r = KEY.results[id] || {};
    return [r.note, r.chapeau, r.pied, r.lames, r.chair, r.habitat, r.confusions].filter(Boolean).join(" ").toLowerCase();
  });
  function score(sentence) {
    const lower = sentence.toLowerCase();
    let score = 0;
    distinctive.forEach(([re, points]) => { if (re.test(lower)) score += points; });
    distinctive.forEach(([re]) => {
      if (!re.test(lower)) return;
      const frequency = candidateText.filter((text) => re.test(text)).length;
      if (candidateText.length > 1 && frequency <= Math.ceil(candidateText.length / 2)) score += 6;
    });
    if (/^grosse? espèce|^grande espèce|^espèce moyenne|^petite espèce/i.test(lower)) score -= 7;
    return score;
  }
  let best = sentences.sort((a, b) => score(b) - score(a))[0] || "";

  /* Dans une phrase du type « grosse espèce blanche, larges écailles,
     anneau farineux », on remonte les fragments réellement distinctifs
     au début pour éviter que l'indice soit dominé par l'allure générale. */
  const fragments = best.split(/[,;]+/).map((s) => s.trim()).filter(Boolean);
  if (fragments.length > 1) {
    const ranked = fragments.map((fragment, index) => ({
      fragment,
      index,
      score: score(fragment) + (index === 0 ? 0 : 2),
    })).sort((a, b) => b.score - a.score);
    const useful = ranked.filter((item) => item.score > 5).slice(0, 2);
    if (useful.length) {
      useful.sort((a, b) => a.index - b.index);
      best = useful.map((item) => item.fragment).join(", ");
    }
  }

  if (best.length > 150) {
    let cut = best.slice(0, 150);
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 100) cut = cut.slice(0, lastSpace);
    best = cut + "\u2026";
  }
  return best;
}

const KEY = window.CHAMPI_DATA;
let liveSet = [KEY.start];
let displayId = KEY.start;
let historyStack = [];
let answerTrail = [];   // { q, a } — questions résolues, pour "Pourquoi cette piste ?"
let skippedTrail = [];  // { q }    — questions non vérifiées, pour "À observer"

const main = document.getElementById("main");
const footer = document.getElementById("footer");
const progressFill = document.getElementById("progress-fill");
const progressPercent = document.getElementById("progress-percent");
const headerTitle = document.getElementById("header-title");

function isQuestion(id) { return !!KEY.nodes[id]; }
function isLeaf(id) { return !!KEY.results[id]; }
function dedupe(arr) { return Array.from(new Set(arr)); }

/* Progression = part des résultats finaux déjà exclus.
   0 % au départ ; 100 % dès qu'une seule issue reste. */
let initialResultUniverse = null;
function getResultUniverse() {
  if (!initialResultUniverse) {
    initialResultUniverse = dedupe(collectAllResults(KEY.start, new Set()));
  }
  return initialResultUniverse;
}

function getLiveResultUniverse() {
  let results = [];
  liveSet.forEach((id) => {
    if (isLeaf(id)) results.push(id);
    else if (isQuestion(id)) results = results.concat(collectAllResults(id, new Set()));
  });
  return dedupe(results);
}

function estimateProgress() {
  const total = getResultUniverse().length;
  const remaining = getLiveResultUniverse().length;
  if (!total) return 0;
  if (remaining <= 1) return 100;
  return Math.max(0, Math.min(100, ((total - remaining) / total) * 100));
}

function pickDisplay(set) {
  for (const id of set) {
    if (isQuestion(id)) return id;
  }
  return null;
}

function collectAllResults(nodeId, visited) {
  visited = visited || new Set();
  if (visited.has(nodeId)) return [];
  visited.add(nodeId);
  const node = KEY.nodes[nodeId];
  if (!node) return [];
  let out = [];
  node.options.forEach((opt) => {
    if (typeof opt.next === "string") {
      out = out.concat(collectAllResults(opt.next, visited));
    } else if (opt.next && opt.next.result) {
      out.push(opt.next.result);
    }
  });
  return out;
}

function goToState(newSet, trailEntry, isSkip) {
  historyStack.push({
    liveSet: liveSet.slice(),
    displayId: displayId,
    answerTrailLen: answerTrail.length,
    skippedTrailLen: skippedTrail.length,
  });
  if (trailEntry) {
    if (isSkip) skippedTrail.push(trailEntry);
    else answerTrail.push(trailEntry);
  }
  liveSet = dedupe(newSet);
  const next = pickDisplay(liveSet);
  if (next) {
    displayId = next;
    renderQuestion(displayId);
  } else {
    displayId = null;
    renderFinalResults(liveSet);
  }
}

function answerOption(nodeId, opt) {
  const rest = liveSet.filter((id) => id !== nodeId);
  if (typeof opt.next === "string") rest.push(opt.next);
  else rest.push(opt.next.result);
  goToState(rest, { q: KEY.nodes[nodeId].question, a: opt.label }, false);
}

function answerUnknown(nodeId) {
  const node = KEY.nodes[nodeId];
  const rest = liveSet.filter((id) => id !== nodeId);
  node.options.forEach((opt) => {
    if (typeof opt.next === "string") rest.push(opt.next);
    else rest.push(opt.next.result);
  });
  goToState(rest, { q: node.question }, true);
}

function goBack() {
  if (historyStack.length === 0) return;
  const prev = historyStack.pop();
  liveSet = prev.liveSet;
  displayId = prev.displayId;
  answerTrail.length = prev.answerTrailLen;
  skippedTrail.length = prev.skippedTrailLen;
  if (displayId) renderQuestion(displayId);
  else renderFinalResults(liveSet);
}

function restart() {
  historyStack = [];
  answerTrail = [];
  skippedTrail = [];
  liveSet = [KEY.start];
  displayId = KEY.start;
  renderQuestion(displayId);
}

function forceShowAllCandidates() {
  let allLeaves = [];
  liveSet.forEach((id) => {
    if (isLeaf(id)) allLeaves.push(id);
    else if (isQuestion(id)) allLeaves = allLeaves.concat(collectAllResults(id));
  });
  renderCandidateList(dedupe(allLeaves), true);
}

/* ============================================================
   Carnet d'observations (localStorage) — indépendant du moteur
   de détermination : ne stocke que ce que l'utilisateur choisit
   d'enregistrer une fois un résultat obtenu.
   ============================================================ */

const OBS_STORAGE_KEY = "champiObservations_v1";

function loadObservations() {
  try {
    const raw = localStorage.getItem(OBS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
function saveObservations(list) {
  try {
    localStorage.setItem(OBS_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    /* stockage indisponible : on continue sans persister */
  }
}
function addObservation(entry) {
  const list = loadObservations();
  list.unshift(entry);
  saveObservations(list);
}
function deleteObservation(id) {
  saveObservations(loadObservations().filter((o) => o.id !== id));
}
function todayISO() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.getElementById("modal-box").innerHTML = "";
}

function openSaveModal(resultId) {
  const res = KEY.results[resultId];
  const box = document.getElementById("modal-box");
  box.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "modal-title";
  title.textContent = "Enregistrer l'observation";
  box.appendChild(title);

  const subtitle = document.createElement("p");
  subtitle.className = "modal-subtitle";
  subtitle.textContent = res.genus;
  box.appendChild(subtitle);

  function field(labelText, type, placeholder, value) {
    const wrap = document.createElement("div");
    wrap.className = "modal-field";
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.type = type;
    if (placeholder) input.placeholder = placeholder;
    if (value !== undefined) input.value = value;
    wrap.appendChild(label);
    wrap.appendChild(input);
    box.appendChild(wrap);
    return input;
  }

  const dateInput = field("Date", "date", "", todayISO());
  const lieuInput = field("Lieu", "text", "Ex. forêt de Fontainebleau");
  const substratInput = field("Substrat", "text", "Ex. sol, souche de hêtre, litière...");

  const btnRow = document.createElement("div");
  btnRow.className = "modal-btn-row";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "btn btn-secondary";
  cancelBtn.textContent = "Annuler";
  cancelBtn.onclick = closeModal;
  const saveBtn = document.createElement("button");
  saveBtn.className = "btn btn-primary";
  saveBtn.textContent = "Enregistrer";
  saveBtn.onclick = () => {
    addObservation({
      id: Date.now(),
      resultId: resultId,
      genus: res.genus,
      risk: res.risk || null,
      date: dateInput.value || todayISO(),
      lieu: lieuInput.value.trim(),
      substrat: substratInput.value.trim(),
    });
    closeModal();
  };
  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(saveBtn);
  box.appendChild(btnRow);

  document.getElementById("modal-overlay").classList.add("open");
}

/* ============================================================
   Rendu (UI) — habillage carnet naturaliste
   ============================================================ */

function renderHome() {
  headerTitle.textContent = "Clé des champignons à lames";
  progressFill.style.width = "0%";
  progressPercent.textContent = "0%";
  progressFill.setAttribute("aria-label", "Progression : 0% des pistes finales exclues");
  progressFill.parentElement.setAttribute("aria-valuenow", "0");
  progressFill.classList.remove("progress-fill-multi");
  footer.style.display = "none";

  main.innerHTML = "";
  const intro = document.createElement("div");
  intro.className = "intro-text";
  intro.textContent = "Identifie un champignon à lames observé en forêt, question après question.";
  main.appendChild(intro);

  if (historyStack.length > 0 && displayId) {
    const resumeBtn = document.createElement("button");
    resumeBtn.className = "home-cta home-cta-secondary";
    resumeBtn.textContent = "Reprendre l'identification en cours";
    resumeBtn.onclick = () => renderQuestion(displayId);
    main.appendChild(resumeBtn);
  }

  const startBtn = document.createElement("button");
  startBtn.className = "home-cta";
  startBtn.textContent = "Nouvelle identification";
  startBtn.onclick = restart;
  main.appendChild(startBtn);

  const obsHead = makeSectionHead("Mes observations", "pin", "sh-id");
  obsHead.style.marginTop = "26px";
  main.appendChild(obsHead);

  const list = loadObservations();
  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "obs-empty";
    empty.textContent = "Aucune observation enregistrée pour l'instant. Elles apparaîtront ici après avoir identifié un champignon et choisi de l'enregistrer.";
    main.appendChild(empty);
  } else {
    list.forEach((obs) => {
      const card = document.createElement("div");
      card.className = "candidate-card";
      if (obs.risk && RISK_LABELS[obs.risk]) card.appendChild(makeRiskBadge(obs.risk));
      const g = document.createElement("p");
      g.className = "candidate-genus";
      g.textContent = obs.genus;
      card.appendChild(g);
      const bits = [];
      if (obs.date) bits.push(obs.date);
      if (obs.lieu) bits.push(obs.lieu);
      if (obs.substrat) bits.push(obs.substrat);
      const meta = document.createElement("p");
      meta.className = "candidate-note";
      meta.textContent = bits.length > 0 ? bits.join(" · ") : "Aucun détail renseigné";
      card.appendChild(meta);
      const delBtn = document.createElement("button");
      delBtn.className = "obs-delete";
      delBtn.textContent = "Supprimer";
      delBtn.onclick = () => {
        deleteObservation(obs.id);
        renderHome();
      };
      card.appendChild(delBtn);
      main.appendChild(card);
    });
  }
}

function renderQuestion(nodeId) {
  const node = KEY.nodes[nodeId];
  headerTitle.textContent = "Clé des champignons à lames";
  const progress = estimateProgress();
  const progressRounded = Math.round(progress);
  progressFill.style.width = progressRounded + "%";
  progressPercent.textContent = progressRounded + "%";
  progressFill.setAttribute("aria-label", "Progression : " + progressRounded + "% des pistes finales exclues");
  progressFill.parentElement.setAttribute("aria-valuenow", String(Math.round(progress)));
  progressFill.classList.toggle("progress-fill-multi", getLiveResultUniverse().length > 1);
  footer.style.display = "flex";
  main.innerHTML = "";
  const stepLabel = document.createElement("div");
  stepLabel.className = "step-label";
  stepLabel.textContent = "Question " + (historyStack.length + 1);
  main.appendChild(stepLabel);

  const q = document.createElement("div");
  q.className = "question";
  q.textContent = node.question;
  main.appendChild(q);

  if (node.hint) {
    const hint = document.createElement("div");
    hint.className = "hint" + (node.hint.indexOf("risque") !== -1 || node.hint.indexOf("Prudence") !== -1 ? " hint-warning" : "");
    hint.textContent = node.hint;
    main.appendChild(hint);
  }

  const opts = document.createElement("div");
  opts.className = "options";
  node.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.label;
    btn.onclick = () => answerOption(nodeId, opt);
    opts.appendChild(btn);
  });
  main.appendChild(opts);

  if (node.allowUnknown) {
    const unknownBtn = document.createElement("button");
    unknownBtn.className = "option-btn-unknown";
    unknownBtn.textContent = "Je ne sais pas / je n'ai pas pu vérifier";
    unknownBtn.onclick = () => answerUnknown(nodeId);
    main.appendChild(unknownBtn);
  }

  const noMatch = document.createElement("button");
  noMatch.className = "no-match-link";
  noMatch.textContent = "Aucune de ces réponses ne correspond ? Continuer avec d'autres questions";
  noMatch.onclick = () => answerUnknown(nodeId);
  main.appendChild(noMatch);

  const stop = document.createElement("button");
  stop.className = "stop-link";
  stop.textContent = "Ou arrêter les questions et voir toutes les pistes encore possibles";
  stop.onclick = () => forceShowAllCandidates();
  main.appendChild(stop);

  footer.innerHTML = "";
  if (historyStack.length > 0) {
    const backBtn = document.createElement("button");
    backBtn.className = "btn btn-secondary";
    backBtn.textContent = "\u2190 Précédent";
    backBtn.onclick = goBack;
    footer.appendChild(backBtn);
  }
  const restartBtn = document.createElement("button");
  restartBtn.className = "btn btn-restart";
  restartBtn.textContent = "Recommencer";
  restartBtn.onclick = restart;
  footer.appendChild(restartBtn);
}

function renderFinalResults(ids) {
  if (ids.length === 1) {
    renderResult(ids[0]);
  } else {
    renderCandidateList(ids, false);
  }
}

function renderCandidateList(ids, isForced) {
  const sorted = Array.from(new Set(ids)).sort((a, b) => riskRank(KEY.results[a]) - riskRank(KEY.results[b]));

  headerTitle.textContent = "Plusieurs pistes possibles";
  progressFill.style.width = "100%";
  progressPercent.textContent = "100%";
  progressFill.setAttribute("aria-label", "Progression : 100% des pistes finales exclues");
  progressFill.parentElement.setAttribute("aria-valuenow", "100");
  progressFill.classList.remove("progress-fill-multi");
  footer.style.display = "flex";

  main.innerHTML = "";
  const intro = document.createElement("div");
  intro.className = "intro-text";
  intro.textContent = isForced
    ? "Tu as choisi d'arrêter les questions. Voici toutes les pistes encore compatibles avec ce qui a déjà été répondu (" + sorted.length + "), des plus risquées aux plus sûres :"
    : "Aucune question supplémentaire ne permet de trancher davantage avec ce qui est su. Voici les pistes encore compatibles (" + sorted.length + "), des plus risquées aux plus sûres :";
  main.appendChild(intro);

  sorted.forEach((id) => {
    const res = KEY.results[id];
    if (!res) return;
    const card = document.createElement("div");
    card.className = "candidate-card";
    if (res.risk && RISK_LABELS[res.risk]) {
      card.appendChild(makeRiskBadge(res.risk));
    }
    const g = document.createElement("p");
    g.className = "candidate-genus";
    g.textContent = res.genus;
    const n = document.createElement("p");
    n.className = "candidate-note";
    n.textContent = res.note || res.chapeau || "";
    card.appendChild(g);
    card.appendChild(n);

    const enrich = sorted.length <= 4 && hasSpeciesSheet(res);
    if (enrich) {
      const clueText = extractClue(res, sorted);
      if (clueText) {
        const clue = document.createElement("div");
        clue.className = "candidate-clue";
        const clueIcon = document.createElement("span");
        clueIcon.className = "badge-icon";
        clueIcon.innerHTML = ICONS.why;
        clue.appendChild(clueIcon);
        clue.appendChild(document.createTextNode(clueText));
        card.appendChild(clue);
      }
      const openHint = document.createElement("p");
      openHint.className = "candidate-open-hint";
      openHint.textContent = "Voir la fiche complète \u2192";
      card.appendChild(openHint);
      card.classList.add("candidate-card-clickable");
      card.onclick = () => renderResult(id, () => renderCandidateList(ids, isForced));
    }

    main.appendChild(card);
  });

  const doubt = document.createElement("div");
  doubt.className = "doubt-card";
  const doubtTitle = document.createElement("strong");
  doubtTitle.textContent = "Pour trancher entre ces pistes";
  const doubtText = document.createElement("span");
  doubtText.textContent = "Essaie d'observer à nouveau le détail qui posait problème, ou réalise une sporée (dépose le chapeau seul sur une feuille mi-blanche mi-noire, 2 à 4 heures) pour comparer la couleur du dépôt.";
  doubt.appendChild(doubtTitle);
  doubt.appendChild(doubtText);
  main.appendChild(doubt);

  const disclaimer = document.createElement("div");
  disclaimer.className = "disclaimer";
  disclaimer.textContent = "Ne jamais consommer un champignon sauvage sur la base d'une piste non confirmée. Fais confirmer ton identification par un pharmacien, une association mycologique ou un expert reconnu.";
  main.appendChild(disclaimer);

  footer.innerHTML = "";
  const backBtn = document.createElement("button");
  backBtn.className = "btn btn-secondary";
  backBtn.textContent = "\u2190 Revenir à la question";
  backBtn.onclick = () => {
    if (isForced && displayId) renderQuestion(displayId);
    else goBack();
  };
  footer.appendChild(backBtn);

  const restartBtn = document.createElement("button");
  restartBtn.className = "btn btn-restart";
  restartBtn.textContent = "Recommencer";
  restartBtn.onclick = restart;
  footer.appendChild(restartBtn);
}

function renderResult(resultId, backOverride) {
  const res = KEY.results[resultId];
  headerTitle.textContent = "Résultat";
  progressFill.style.width = "100%";
  progressPercent.textContent = "100%";
  progressFill.setAttribute("aria-label", "Progression : 100% des pistes finales exclues");
  progressFill.parentElement.setAttribute("aria-valuenow", "100");
  progressFill.classList.remove("progress-fill-multi");
  footer.style.display = "flex";

  main.innerHTML = "";

  /* ---- IDENTIFICATION ---- */
  const idCard = document.createElement("div");
  idCard.className = "result-card";
  idCard.appendChild(makeSectionHead("Identification", "idtag", "sh-id"));
  if (res.risk && RISK_LABELS[res.risk]) {
    idCard.appendChild(makeRiskBadge(res.risk));
  }
  const genus = document.createElement("p");
  genus.className = "result-genus";
  genus.textContent = res.genus;
  idCard.appendChild(genus);
  if (res.latin) {
    const latin = document.createElement("p");
    latin.className = "result-latin";
    latin.textContent = res.latin;
    idCard.appendChild(latin);
  }
  main.appendChild(idCard);

  const warning = document.createElement("div");
  warning.className = "warning-card";
  warning.textContent = "Piste probable, pas une certitude : ne jamais consommer un champignon sauvage sur la seule base de cette application.";
  main.appendChild(warning);

  const saveBtn = document.createElement("button");
  saveBtn.className = "save-obs-btn";
  const pinIcon = document.createElement("span");
  pinIcon.className = "badge-icon";
  pinIcon.innerHTML = ICONS.pin;
  saveBtn.appendChild(pinIcon);
  saveBtn.appendChild(document.createTextNode("Enregistrer l'observation"));
  saveBtn.onclick = () => openSaveModal(resultId);
  main.appendChild(saveBtn);

  /* ---- POURQUOI CETTE PISTE ? ---- */
  if (answerTrail.length > 0) {
    const whySection = document.createElement("div");
    whySection.className = "sheet-section";
    whySection.appendChild(makeSectionHead("Pourquoi cette piste ?", "why", "sh-why"));
    const row = document.createElement("div");
    row.className = "chip-row";
    answerTrail.forEach((entry) => row.appendChild(buildChip(entry.q, entry.a, "why")));
    whySection.appendChild(row);
    main.appendChild(whySection);
  }

  /* ---- À OBSERVER ---- */
  const obsSection = document.createElement("div");
  obsSection.className = "sheet-section";
  obsSection.appendChild(makeSectionHead("À observer", "eye", "sh-observe"));
  if (skippedTrail.length > 0) {
    const row = document.createElement("div");
    row.className = "chip-row";
    skippedTrail.forEach((entry) => row.appendChild(buildObserveChip(entry.q)));
    obsSection.appendChild(row);
  }
  const obsTip = document.createElement("p");
  obsTip.className = "detail-text";
  if (skippedTrail.length > 0) obsTip.style.marginTop = "10px";
  obsTip.textContent = "En cas de doute persistant, une sporée peut trancher : dépose le chapeau seul sur une feuille mi-blanche mi-noire sous un bol, 2 à 4 h, puis compare la couleur du dépôt (blanche à crème, rose, brune/ocre/rouille, ou noire/violacée/brun pourpré).";
  obsSection.appendChild(obsTip);
  main.appendChild(obsSection);

  /* ---- DESCRIPTION ---- */
  const descSection = document.createElement("div");
  descSection.className = "sheet-section";
  descSection.appendChild(makeSectionHead("Description", "capicon", "sh-desc"));
  if (res.chapeau) {
    const fields = [
      ["Chapeau", res.chapeau],
      ["Pied", res.pied],
      ["Lames", res.lames],
      ["Chair", res.chair],
      ["Habitat", res.habitat],
    ];
    fields.forEach(([label, text]) => {
      if (!text) return;
      const block = document.createElement("div");
      block.className = "detail-block";
      const l = document.createElement("span");
      l.className = "detail-label";
      l.textContent = label;
      const t = document.createElement("p");
      t.className = "detail-text";
      t.textContent = text;
      block.appendChild(l);
      block.appendChild(t);
      descSection.appendChild(block);
    });
  } else {
    const t = document.createElement("p");
    t.className = "detail-text";
    t.textContent = res.note;
    descSection.appendChild(t);
  }
  main.appendChild(descSection);

  /* ---- CONFUSIONS ---- */
  if (res.confusions) {
    const confSection = document.createElement("div");
    confSection.className = "sheet-section";
    confSection.appendChild(makeSectionHead("Confusions", "confuse", "sh-confuse"));
    const t = document.createElement("p");
    t.className = "detail-text";
    t.textContent = res.confusions;
    confSection.appendChild(t);
    main.appendChild(confSection);
  }

  const disclaimer = document.createElement("div");
  disclaimer.className = "disclaimer";
  disclaimer.textContent = "En cas de doute, fais confirmer ton identification par un pharmacien, une association mycologique ou un expert reconnu avant toute consommation.";
  main.appendChild(disclaimer);

  footer.innerHTML = "";
  const backBtn = document.createElement("button");
  backBtn.className = "btn btn-secondary";
  backBtn.textContent = backOverride ? "\u2190 Retour aux pistes" : "\u2190 Précédent";
  backBtn.onclick = backOverride || goBack;
  footer.appendChild(backBtn);

  const restartBtn = document.createElement("button");
  restartBtn.className = "btn btn-primary";
  restartBtn.textContent = "Nouvelle recherche";
  restartBtn.onclick = restart;
  footer.appendChild(restartBtn);
}

const homeBtn = document.getElementById("home-btn");
homeBtn.innerHTML = ICONS.home;
homeBtn.onclick = renderHome;

document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") closeModal();
});

renderHome();
