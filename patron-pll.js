// patron-pll.js — geometrie plate d'un schema PLL (face haute vue de dessus).
// Meme geometrie que patron-oll.js (grille 3x3 + languettes), generee une fois.
//
// En PLL, la face U est deja orientee : la grille est toute jaune. Ce sont les
// COULEURS des languettes (rangee haute des faces laterales) qui indiquent la
// permutation a realiser.
//
//     U1 U2 U3     grille (dessus, jaune par defaut)
//     U4 U5 U6
//     U7 U8 U9
//
// Languettes (memes noms que les F2L : U, F, B, L, R) :
//     B1 B2 B3 = face arriere  (en haut,   gauche -> droite)
//     F1 F2 F3 = face avant    (en bas,    gauche -> droite)
//     L1 L2 L3 = face gauche   (a gauche,  haut  -> bas)
//     R1 R2 R3 = face droite   (a droite,  haut  -> bas)
//
// Pour changer l'allure, edite les constantes ci-dessous — pas le detail.
const PATRON_PLL = (function () {
  const CELL = 18;   // cote d'une case de la grille
  const GAP  = 4;    // espace entre deux cases (laisse voir le fond)
  const TAB  = 7;    // epaisseur d'une languette
  const TGAP = 4;    // espace entre la grille et les languettes

  const START = (100 - (3 * CELL + 2 * GAP)) / 2;      // 19  : bord haut/gauche de la grille
  const END   = START + 3 * CELL + 2 * GAP;            // 81  : bord bas/droit de la grille
  const P     = [START, START + CELL + GAP, START + 2 * (CELL + GAP)]; // [19, 41, 63]

  const R = {};
  const cell = (x, y) => ({ x, y, w: CELL, h: CELL, rx: 3 });
  const tab  = (x, y, w, h) => ({ x, y, w, h, rx: 2 });

  // --- Grille U1..U9 ---
  let n = 1;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      R["U" + n++] = cell(P[c], P[r]);
    }
  }

  // --- Languettes des 4 cotes ---
  for (let i = 0; i < 3; i++) {
    R["B" + (i + 1)] = tab(P[i], START - TGAP - TAB, CELL, TAB); // arriere (haut)
    R["F" + (i + 1)] = tab(P[i], END + TGAP,         CELL, TAB); // avant   (bas)
    R["L" + (i + 1)] = tab(START - TGAP - TAB, P[i], TAB, CELL); // gauche
    R["R" + (i + 1)] = tab(END + TGAP,         P[i], TAB, CELL); // droite
  }

  return R;
})();
