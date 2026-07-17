// generateur-pll.js — transforme un cas PLL en SVG plat (vue de dessus).
// Depend de PATRON_PLL (patron-pll.js) et de COULEURS (generateur-cube.js),
// tous deux charges AVANT ce fichier.
//
// Roles utiles en PLL :
//   grille  -> "jaune" par defaut (la face est deja orientee)
//   languettes -> couleurs des faces : "rouge", "bleu", "vert", "orange"...
// Une languette non mentionnee reste "neutre" (gris). Une case de grille non
// mentionnee reste "jaune".

function genererPllSVG(cas, options = {}) {
  const etat = Object.assign({}, cas);

  let rects = "";
  for (const [id, g] of Object.entries(PATRON_PLL)) {
    const estGrille = id[0] === "U";
    const roleParDefaut = estGrille ? "jaune" : "neutre";
    const role = etat[id] || roleParDefaut;
    const couleur = COULEURS[role] || COULEURS.vide;
    rects +=
      `<rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" rx="${g.rx}" ` +
      `fill="${couleur}" stroke="#111" stroke-width="0.6"></rect>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">${rects}</svg>`;
}
