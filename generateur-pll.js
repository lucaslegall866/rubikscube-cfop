// generateur-pll.js — transforme un cas PLL en SVG plat (vue de dessus).
// Depend de PATRON_PLL (patron-pll.js) et de COULEURS (generateur-cube.js),
// tous deux charges AVANT ce fichier.
//
// Le champ `cas` accepte :
//   - des couleurs de stickers : { L1:"orange", B1:"bleu", ... }
//     tout est "neutre" (gris) par defaut : on ne colore que les reperes.
//     Couleurs dispo : rouge, bleu, vert, orange, jaune, blanc, neutre.
//   - un tableau `fleches` de permutations entre pieces de la grille :
//       fleches: [ ["U3","U9"],            // fleche simple  de U3 vers U9
//                  ["U4","U6","double"] ]  // fleche double (echange) U4 <-> U6
//     Cibles = coins (U1 U3 U7 U9) ou aretes (U2 U4 U6 U8).

let _pllSeq = 0; // ids de marqueurs uniques par SVG

function genererPllSVG(cas, options = {}) {
  const etat = Object.assign({}, cas);
  const fleches = Array.isArray(etat.fleches) ? etat.fleches : [];

  // --- Stickers ---
  // Tout est neutre (gris) par defaut : grille ET languettes. On ne colore
  // que ce qu'on veut mettre en evidence (phares/blocs de reconnaissance).
  let rects = "";
  for (const [id, g] of Object.entries(PATRON_PLL)) {
    const role = etat[id] || "neutre";
    const couleur = COULEURS[role] || COULEURS.vide;
    // Contour sombre sur les cases/languettes (mais PAS sur les fleches).
    rects +=
      `<rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" rx="${g.rx}" ` +
      `fill="${couleur}" stroke="#111" stroke-width="0.6"></rect>`;
  }

  // --- Fleches de permutation (par-dessus les stickers) ---
  // Blanches (tres visibles sur le gris), pointe nette (tete a encoche),
  // et tip pile au centre des cellules cibles.
  let defs = "", lignes = "";
  if (fleches.length) {
    const mid = "fleche-" + (++_pllSeq);
    const H = 9.5; // longueur de la tete (= markerWidth), reservee pour la pointe
    // Cadre CARRE (echelle uniforme => triangle non deforme, diagonales incluses).
    // refX=0 : la BASE du triangle est ancree au bout de la ligne ; la pointe
    // s'etend vers l'avant jusqu'au centre de la cellule. Ainsi la ligne s'arrete
    // a la base et ne depasse jamais la pointe (plus de bout arrondi visible).
    defs =
      `<defs><marker id="${mid}" markerUnits="userSpaceOnUse" ` +
      `markerWidth="${H}" markerHeight="${H}" viewBox="0 0 10 10" refX="0" refY="5" ` +
      `orient="auto-start-reverse">` +
      `<path d="M0,0 L10,5 L0,10 z" fill="#ffffff"></path></marker></defs>`;

    for (const f of fleches) {
      const a = PATRON_PLL[f[0]], b = PATRON_PLL[f[1]];
      if (!a || !b) continue;
      const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
      const bx = b.x + b.w / 2, by = b.y + b.h / 2;
      const len = Math.hypot(bx - ax, by - ay) || 1;
      const ux = (bx - ax) / len, uy = (by - ay) / len;
      const dbl = (f[2] === "double" || f[2] === "<->");
      // On retire la longueur de tete a chaque bout muni d'une pointe.
      const x1 = ax + (dbl ? ux * H : 0), y1 = ay + (dbl ? uy * H : 0);
      const x2 = bx - ux * H, y2 = by - uy * H;
      const start = dbl ? ` marker-start="url(#${mid})"` : "";
      lignes +=
        `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" ` +
        `stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" ` +
        `marker-end="url(#${mid})"${start}></line>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">${defs}${rects}${lignes}</svg>`;
}
