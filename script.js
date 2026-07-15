// ---- Tes données de formules ----
// nomSimple  : nom court (ex. "F2L 1")
// nomDetail  : nom détaillé (ex. "paire basique") — peut être ""
// baseImage  : préfixe du fichier image (ex. "F2L-1"). Le code de placement
//              et ".png" sont ajoutés automatiquement -> assets/images/F2L-1-FR.png
//              Mettre null tant que tu n'as pas d'images.
// placementDefaut : "FR", "FL", "BR" ou "BL"
// variantes  : la formule pour chaque placement.
const IMG_DIR = "assets/images/";
const IMG_EXT = ".png";

// Sous-menus disponibles par catégorie (l'ordre définit l'ordre d'affichage)
const SOUS_MENUS = {
  croix: [],
  f2l: ["free pairs", "connected pairs", "disconnected pairs", "corner in slot", "edge in slot", "pieces in slot"],
  oll: ["dot", "L", "Line", "Square", "lightning", "Knight move", "fish", "C", "P", "T", "W", "OCLL", "awkward", "all corners oriented"],
  pll: ["Adj Swap", "EPLL", "Opp swap"],
};

const formules = {
  croix: [
    {
      nomSimple: "Croix", nomDetail: "croix blanche", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "F R U R' U' F'",
        FL: "F' L' U' L U F",
        BR: "B R U R' U' B'",
        BL: "B' L' U' L U B",
      },
    },
  ],
  f2l: [
  {
    nomSimple: "F2L 1", nomDetail: "paire basique", baseImage: null, placementDefaut: "FR",
    sousMenu: "free pairs",
    variantes: { FR: "U R U' R'", FL: "U' L' U L", BR: "U' R' U R", BL: "U L U' L'" },
  },
],
oll: [
  {
    nomSimple: "OLL 21", nomDetail: "Sune", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R U R' U R U2 R'", FL: "L' U' L U' L' U2 L", BR: "R U R' U R U2 R'", BL: "L' U' L U' L' U2 L" },
  },
],
pll: [
  {
    nomSimple: "PLL", nomDetail: "T-Perm", baseImage: null, placementDefaut: "FR",
    sousMenu: "Adj Swap",
    variantes: { FR: "R U R' U' R' F R2 U' R' U' R U R' F'", FL: "L' U' L U L F' L2 U L U L' U' L F", BR: "R U R' U' R' F R2 U' R' U' R U R' F'", BL: "L' U' L U L F' L2 U L U L' U' L F" },
  },
],
};

const PLACEMENTS = { FR: "FR", FL: "FL", BR: "BR", BL: "BL" };

const contenu = document.getElementById("contenu");
const sousFiltres = document.getElementById("sous-filtres");
const onglets = document.querySelectorAll(".onglet");

let etapeActive = "croix";
let filtresActifs = new Set();   // sous-menus sélectionnés ; vide = tout afficher

function creerCarte(f) {
  const carte = document.createElement("div");
  carte.className = "carte";

  // --- Ligne 1 : nom détaillé (au-dessus) ---
  if (f.nomDetail) {
    const detail = document.createElement("div");
    detail.className = "nom-detail";
    detail.textContent = f.nomDetail;
    carte.appendChild(detail);
  }

  // --- Ligne 2 : image · rectangle (nom simple + formule) ---
  const ligne = document.createElement("div");
  ligne.className = "ligne-haut";

  const img = document.createElement("img");
  img.className = "vignette";
  img.alt = f.nomSimple;
  ligne.appendChild(img);

  const ph = document.createElement("div");
  ph.className = "placeholder";
  ph.textContent = "img";
  ligne.appendChild(ph);

  const rect = document.createElement("div");
  rect.className = "rectangle";

  const nomSimple = document.createElement("span");
  nomSimple.className = "nom-simple";
  nomSimple.textContent = f.nomSimple;
  rect.appendChild(nomSimple);

  const formule = document.createElement("span");
  formule.className = "formule";
  rect.appendChild(formule);

  ligne.appendChild(rect);
  carte.appendChild(ligne);

  // --- Ligne 3 : boutons de placement ---
  const groupe = document.createElement("div");
  groupe.className = "placement-boutons";
  const boutons = {};
  for (const [code, texte] of Object.entries(PLACEMENTS)) {
    const btn = document.createElement("button");
    btn.className = "btn-placement";
    btn.textContent = texte;
    btn.addEventListener("click", () => appliquer(code));
    groupe.appendChild(btn);
    boutons[code] = btn;
  }
  carte.appendChild(groupe);

  // --- Applique un placement : met à jour formule + image + bouton actif ---
  function appliquer(code) {
    formule.textContent = f.variantes[code] || "(à définir)";

    if (f.baseImage) {
      img.src = IMG_DIR + f.baseImage + "-" + code + IMG_EXT;
      img.style.display = "";
      ph.style.display = "none";
    } else {
      img.style.display = "none";
      ph.style.display = "";
    }

    Object.values(boutons).forEach((b) => b.classList.remove("actif"));
    boutons[code].classList.add("actif");
  }

  appliquer(f.placementDefaut); // état initial
  return carte;
}

// Construit la barre de sous-filtres pour la catégorie active
function construireSousFiltres() {
  sousFiltres.innerHTML = "";
  filtresActifs.clear();
  (SOUS_MENUS[etapeActive] || []).forEach((nom) => {
    const btn = document.createElement("button");
    btn.className = "sous-filtre";
    btn.textContent = nom;
    btn.addEventListener("click", () => {
      // bascule : sélectionné <-> désélectionné
      if (filtresActifs.has(nom)) {
        filtresActifs.delete(nom);
        btn.classList.remove("actif");
      } else {
        filtresActifs.add(nom);
        btn.classList.add("actif");
      }
      afficher();
    });
    sousFiltres.appendChild(btn);
  });
}

// Affiche les cartes de la catégorie active, filtrées par les sous-menus sélectionnés
function afficher() {
  contenu.innerHTML = "";
  let cartes = formules[etapeActive] || [];
  if (filtresActifs.size > 0) {
    cartes = cartes.filter((f) => filtresActifs.has(f.sousMenu));
  }
  cartes.forEach((f) => contenu.appendChild(creerCarte(f)));
}

onglets.forEach((btn) => {
  btn.addEventListener("click", () => {
    onglets.forEach((b) => b.classList.remove("actif"));
    btn.classList.add("actif");
    etapeActive = btn.dataset.etape;
    construireSousFiltres();  // reconstruit la barre pour la nouvelle catégorie
    afficher();
  });
});

// État initial
construireSousFiltres();
afficher();