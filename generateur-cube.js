// generateur-cube.js — transforme un "cas" (roles des stickers) en SVG isometrique.
// Depend de PATRON (patron-cube.js), qui doit etre charge AVANT ce fichier.

// --- Table centrale des couleurs : un role -> une couleur. Change ici, partout. ---
const COULEURS = {
  rouge:    "#ee0000",
  bleu:     "#0044ee",
  vert:     "#11aa00",   // pieces de la paire a inserer (vert)
  orange:   "#ee8800",   // l'emplacement cible (orange)
  jaune:    "#ffcc00",
  blanc:    "#ffffff",
  neutre:   "#888888",   // sans interet (gris)
  vide:     "#cccccc",   // sticker non specifie
  repere:   "#22d3ee",   // repere de reconnaissance PLL (cyan, absent du cube)
  repere2:  "#c796e8",
};

// Faces "reelles" (toujours visibles) vs. rien d'autre pour l'instant.
// Le drapeau montrerToutesFaces est prevu pour extension future (satellites).
const FACES_REELLES = ["U", "F", "R"];

// Construit le SVG a partir d'un objet `cas` de la forme { U5: "paire", F2: "slot", ... }
// Tout sticker non mentionne prend le role par defaut "neutre".
function genererCubeSVG(cas, options = {}) {
  const roleParDefaut = options.roleParDefaut || "neutre";
  let polygones = "";

  for (const [id, points] of Object.entries(PATRON)) {
    const face = id[0]; // "U", "F" ou "R"
    if (!FACES_REELLES.includes(face)) continue;

    const role = cas[id] || roleParDefaut;
    const couleur = COULEURS[role] || COULEURS.vide;
    polygones += `<polygon points="${points}" fill="${couleur}" stroke="#222" stroke-width="0.4"></polygon>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="100%" height="100%">${polygones}</svg>`;
}