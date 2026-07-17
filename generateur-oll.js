// generateur-oll.js — transforme un cas OLL en SVG plat (vue de dessus).
// Depend de PATRON_OLL (patron-oll.js) et de COULEURS (generateur-cube.js).
// Ces deux fichiers doivent etre charges AVANT celui-ci.
//
// Roles utiles en OLL :
//   "jaune"  -> sticker oriente (jaune vers le haut / visible)
//   "neutre" -> pas encore oriente (gris)
// Tout sticker non mentionne prend le role "neutre".
// Le centre U5 est TOUJOURS jaune en OLL : il est mis par defaut (mais reste
// surchargeable si tu passes explicitement U5 dans le cas).

function genererOllSVG(cas, options = {}) {
  const roleParDefaut = options.roleParDefaut || "neutre";
  const etat = Object.assign({ U5: "jaune" }, cas);

  let rects = "";
  for (const [id, g] of Object.entries(PATRON_OLL)) {
    const role = etat[id] || roleParDefaut;
    const couleur = COULEURS[role] || COULEURS.vide;
    rects +=
      `<rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" rx="${g.rx}" ` +
      `fill="${couleur}" stroke="#111" stroke-width="0.6"></rect>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">${rects}</svg>`;
}
