// ---- Tes données de formules ----
// placementDefaut : "FR" (front right), "FL", "BR" ou "BL"
// image : chemin vers ton fichier, ou null tant que tu n'as pas l'image
const formules = {
  croix: [
    { nom: "Croix blanche", formule: "F R U R' U' F'", placementDefaut: "FR", image: null },
  ],
  f2l: [
    { nom: "F2L 1 — paire basique", formule: "U R U' R'", placementDefaut: "FR", image: null },
    { nom: "F2L 2", formule: "U' F' U F", placementDefaut: "FL", image: null },
  ],
  oll: [
    { nom: "OLL 21 — Sune", formule: "R U R' U R U2 R'", placementDefaut: "FR", image: null },
  ],
  pll: [
    { nom: "PLL — T-Perm", formule: "R U R' U' R' F R2 U' R' U' R U R' F'", placementDefaut: "FR", image: null },
  ],
};

const PLACEMENTS = {
  FR: "Front Right",
  FL: "Front Left",
  BR: "Back Right",
  BL: "Back Left",
};

const contenu = document.getElementById("contenu");
const onglets = document.querySelectorAll(".onglet");

function creerCarte(f) {
  const carte = document.createElement("div");
  carte.className = "carte";

  // Image ou placeholder
  if (f.image) {
    const img = document.createElement("img");
    img.src = f.image;
    img.alt = f.nom;
    carte.appendChild(img);
  } else {
    const ph = document.createElement("div");
    ph.className = "placeholder";
    ph.textContent = "(image à venir)";
    carte.appendChild(ph);
  }

  const titre = document.createElement("h3");
  titre.textContent = f.nom;
  carte.appendChild(titre);

  const formule = document.createElement("div");
  formule.className = "formule";
  formule.textContent = f.formule;
  carte.appendChild(formule);

  // Sélecteur de placement
  const placement = document.createElement("div");
  placement.className = "placement";
  const label = document.createElement("span");
  label.textContent = "Placement :";
  const select = document.createElement("select");
  for (const [code, texte] of Object.entries(PLACEMENTS)) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = texte;
    if (code === f.placementDefaut) opt.selected = true;
    select.appendChild(opt);
  }
  placement.appendChild(label);
  placement.appendChild(select);
  carte.appendChild(placement);

  return carte;
}

function afficher(etape) {
  contenu.innerHTML = "";
  (formules[etape] || []).forEach((f) => contenu.appendChild(creerCarte(f)));
}

onglets.forEach((btn) => {
  btn.addEventListener("click", () => {
    onglets.forEach((b) => b.classList.remove("actif"));
    btn.classList.add("actif");
    afficher(btn.dataset.etape);
  });
});

afficher("croix"); // vue initiale