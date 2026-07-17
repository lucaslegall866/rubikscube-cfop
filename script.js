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
    nomSimple: "F2L 1", nomDetail: "free pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "free pairs",
    variantes: { FR: "U R U' R'", FL: "F' r U r'", BR: "U f R' f'", BL: "U L U' L'" },
    cube: {
      U6: "vert", U9: "vert", // up
      R1: "orange", R2: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc",F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 2", nomDetail: "free pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "free pairs",
    variantes: { FR: "F R' F' R", FL: "U' L' U L", BR: "U' R' U R", BL: "l U L' U' M'" },
    cube: {
      U8: "orange", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2: "vert", F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 3", nomDetail: "free pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "free pairs",
    variantes: { FR: "F' U' F", FL: "L' U' L", BR: "R' U' R", BL: "y R' U' R" },
    cube: {
      U4: "orange", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc",F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 4", nomDetail: "free pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "free pairs",
    variantes: { FR: "R U R'", FL: "F U F'", BR: "f R f'", BL: "L U L'" },
    cube: {
      U2: "vert", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 5", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U' R U R' U2 R U' R'", FL: "U R' F r U' r' F' R", BR: "U' R' F R U R' U' F' R", BL: "U' L U L' U2 L U' L'" },
    cube: {
      U2: "vert", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blance", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 6", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U' r U' R' U R U r'", FL: "U L' U' L U2 L' U L", BR: "U R' U' R U2 R' U R", BL: "U r U' r' U' L U F L'" },
    cube: {
      U4: "orange", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 7", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U' R U2 R' U' R U2 R'", FL: "F U R U2 R' U F'", BR: "r U2 R2 U' R2 U' r'", BL: "U' L U2 L' U2 L U' L'" },
    cube: {
      U4: "vert", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 8", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "disconnected pairs",
    variantes: { FR: "d R' U2 R U R' U2 R", FL: "U L' U2 L U L' U2 L", BR: "U R' U2 R U R' U2 R", BL: "l' U2 L2 U L2 U l" },
    cube: {
      U2: "orange", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 9", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U' R U' R' U F' U' F", FL: "U L' U' L U' L' U' L", BR: "U R' U' R U' R' U' R", BL: "y U R' U' R U' R' U' R" },
    cube: {
      U2: "orange", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 10", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U' R U R' U R U R'", FL: "U L' U L U' F U F'", BR: "U R' U R U' f R f'", BL: "U' L U L' U L U L'" },
    cube: {
      U4: "vert", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 11", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "connected pairs",
    variantes: { FR: "U' R U2 R' U F' U' F", FL: "L' U L U' L' U L U2 L' U L", BR: "R' U R U' R' U R U2 R' U R", BL: "U' L U2 L' U f' L' f" },
    cube: {
      U6: "orange", U9: "vert", // up
      R1: "orange", R2:"vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 12", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "connected pairs",
    variantes: { FR: "R U' R' U R U' R' U2 R U' R'", FL: "U L' U2 L U' F U F'", BR: "U R' U2 R U' f R f'", BL: "L' U2 L2 U L2 U L" },
    cube: {
      U8: "vert", U9: "orange", // up
      R1: "blanc", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2:"orange", F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 13", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "connected pairs",
    variantes: { FR: "y' U R' U R U' R' U' R", FL: "U L' U L U' L' U' L", BR: "U R' U R U' R' U' R", BL: "d L' U L U' L' U' L" },
    cube: {
      U8: "orange", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2:"vert", F3: "blanc", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 14", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "connected pairs",
    variantes: { FR: "U' R U' R' U R U R'", FL: "d' L U' L' U L U L'", BR: "y U' R U' R' U R U R'", BL: "U' L U' L' U L U L'" },
    cube: {
      U6: "vert", U9: "orange", // up
      R1: "blanc", R2:"orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 15", nomDetail: "connected pairs", baseImage: null, placementDefaut: "BL",
    sousMenu: "connected pairs",
    variantes: { FR: "R' D' R U' R' D R U R U' R'", FL: "F U2 R U R' U F'", BR: "R' U R U2 f R f'", BL: "L U L' U2 L U' L' U L U' L'" },
    cube: {
      U8: "vert", U9: "vert", // up
      R1: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2:"orange", F3: "blanc", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 16", nomDetail: "connected pairs", baseImage: null, placementDefaut: "BR",
    sousMenu: "connected pairs",
    variantes: { FR: "R U' R' U2 F' U' F", FL: "F U' R U' R' U2 F'", BR: "R' U' R U2 R' U R U' R' U R", BL: "L U' L' U2 f' L' f" },
    cube: {
      U6: "orange", U9: "orange", // up
      R1: "blanc", R2:"vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 17", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "connected pairs",
    variantes: { FR: "R U2 R' U' R U R'", FL: "y L U2 L' U' L U L'", BR: "y' L U2 L' U' L U L'", BL: "L U2 L' U' L U L'" },
    cube: {
      U6: "vert", U9: "blanc", // up
      R1: "vert", R2:"orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 18", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "connected pairs",
    variantes: { FR: "y' R' U2 R U R' U' R", FL: "L' U2 L U L' U' L", BR: "R' U2 R U R' U' R", BL: "y R' U2 R U R' U' R" },
    cube: {
      U8: "orange", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2:"vert", F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 19", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U R U2 R' U R U' R'", FL: "U L' U L2 F' L' F L' U L", BR: "y U R U2 R' U R U' R'", BL: "U L U2 L' U L U' L'" },
    cube: {
      U2: "vert", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 20", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "disconnected pairs",
    variantes: { FR: "y' U' R' U2 R U' R' U R", FL: "U' L' U2 L U' L' U L", BR: "U' R' U2 R U' R' U R", BL: "y U' R' U2 R U' R' U R" },
    cube: {
      U4: "orange", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 21", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "disconnected pairs",
    variantes: { FR: "U2 R U R' U R U' R'", FL: "l' U l U2 l' U' l", BR: "r' U r U2 r' U' r", BL: "L U' L' U2 L U L'" },
    cube: {
      U4: "vert", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 22", nomDetail: "disconnected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "disconnected pairs",
    variantes: { FR: "r U' r' U2 r U r'", FL: "L' U L U2 L' U' L", BR: "R' U R U2 R' U' R", BL: "l U' l' U2 l U l'" },
    cube: {
      U2: "orange", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 23", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FR",
    sousMenu: "connected pairs",
    variantes: { FR: "U R U' R' U' R U' R' U R U' R'", FL: "F' U' L' U L F L' U L", BR: "U R' F R' F' R2 U' R' U R", BL: "U L U' L' U' L U' L' U L U' L'" },
    cube: {
      U8: "vert", U9: "blanc", // up
      R1: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F2:"orange", F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 24", nomDetail: "connected pairs", baseImage: null, placementDefaut: "FL",
    sousMenu: "connected pairs",
    variantes: { FR: "F U R U' R' F' R U' R'", FL: "U' L' U L U L' U L U' L' U L", BR: "R' U' R U2 R' U' R U R' U' R", BL: "U2 r U R' U R U2 B r'" },
    cube: {
      U6: "orange", U9: "blanc", // up
      R1: "vert", R2: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 25", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "corner in slot",
    variantes: { FR: "U' R' F R F' R U R'", FL: "U' L' U L F' r U r'", BR: "U' R' U M U' R U M'", BL: "R D' R' U' R D R' L U L'" },
    cube: {
      U6: "vert", // up
      R2: "orange", R5: "orange", R6: "orange", R7: "orange", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 26", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "corner in slot",
    variantes: { FR: "U R U' R' F R' F' R", FL: "r U r' U' r' F r F'", BR: "U f R f' U' R' U' R", BL: "L S L' U L S' L'" },
    cube: {
      U8: "orange", // up
      R5: "orange", R6: "orange", R7: "orange", R8: "orange", R9: "orange", // right
      F2: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 27", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "corner in slot",
    variantes: { FR: "R U' R' U R U' R'", FL: "L' U' L U F' r U r'", BR: "R' U2 R' F R F' R", BL: "L U' L' U L U' L'" },
    cube: {
      U6: "vert", // up
      R2: "orange", R5: "orange", R6: "orange", R7: "vert", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "blanc",  // face
    },
  },
  {
    nomSimple: "F2L 28", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FL",
    sousMenu: "corner in slot",
    variantes: { FR: "R U R' U' F R' F' R", FL: "L' U L U' L' U L", BR: "R' U R U' R' U R", BL: "L U2 L F' L' F L'" },
    cube: {
      U8: "orange", // up
      R5: "orange", R6: "orange", R7: "blanc", R8: "orange", R9: "orange", // right
      F2:"vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "orange",  // face
    },
  },
  {
    nomSimple: "F2L 29", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FL",
    sousMenu: "corner in slot",
    variantes: { FR: "R' F R F' U R U' R'", FL: "L' U' L U L' U' L", BR: "R' U' R U R' U' R", BL: "y R' U' R U R' U' R" },
    cube: {
      U8: "orange", // up
      R5: "orange", R6: "orange", R7: "vert", R8: "orange", R9: "orange", // right
      F2: "vert", F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "blanc",  // face
    },
  },
  {
    nomSimple: "F2L 30", nomDetail: "corner in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "corner in slot",
    variantes: { FR: "R U R' U' R U R'", FL: "L F' L' F U' L' U L", BR: "y' L U L' U' L U L'", BL: "L U L' U' L U L'" },
    cube: {
      U6: "vert", // up
      R2: "orange", R5: "orange", R6: "orange", R7: "blanc", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F7: "vert", F8: "vert", F9: "orange",  // face
    },
  },
  {
    nomSimple: "F2L 31", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U' R' F R F' R U' R'", FL: "U L F' L' F L' U L", BR: "R' U R' F R F' R", BL: "L U' L F' L' F L'" },
    cube: {
      U9: "blanc", // up
      R1: "vert", R4: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 32", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U R U' R' U R U' R' U R U' R'", FL: "U' L' U L U' L' U L U' L' U L", BR: "U' R' U R U' R' U R U' R' U R", BL: "L U L' U' L U L' U' L U L'" },
    cube: {
      U9: "blanc", // up
      R1: "vert", R4: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "orange", F4: "vert", F5: "vert", F6: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 33", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U' R U' R' U2 R U' R'", FL: "R' D R U' R' D' R", BR: "U' R D R' U R D' R'", BL: "U' L U' L' U2 L U' L'" },
    cube: {
      U9: "vert", // up
      R1: "orange", R4: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc", F4: "vert", F5: "vert", F6: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 34", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U R U R' U2 R U R'", FL: "U L' U L U2 L' U L", BR: "U R' U R U R' U2 R", BL: "U L U L' U2 L U L'" },
    cube: {
      U9: "orange", // up
      R1: "blanc", R4: "orange", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F6: "vert", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 35", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U' R U R' U F' U' F", FL: "U2 F U F' U' L' U L", BR: "U' f R f' U R' U' R", BL: "U' L U L' U f' L' f" },
    cube: {
      U9: "vert", // up
      R1: "orange", R4: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "blanc", F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 36", nomDetail: "edge in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "edge in slot",
    variantes: { FR: "U F' U' F U' R U R'", FL: "U L' U' L d' L U L'", BR: "U R' U' R U' f R f'", BL: "U f' L' f U' L U L'" },
    cube: {
      U9: "orange", // up
      R1: "blanc", R4: "vert", R5: "orange", R6: "orange", R8: "orange", R9: "orange", // right
      F3: "vert", F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert",  // face
    },
  },
  {
    nomSimple: "F2L 37", nomDetail: "pieces in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "pieces in slot",
    variantes: { FR: "R2 U2 F R2 F' U2 R' U R'", FL: "L2 U2 F' L2 F U2 L U' L", BR: "R' U R r U2 R2 U' R2 U' r'", BL: "L U' L' l' U2 L2 U L2 U l" },
    cube: {
      R4: "vert", R5: "orange", R6: "orange", R7: "orange", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert", F9: "vert"  // face
    },
  },
  {
    nomSimple: "F2L 38", nomDetail: "pieces in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "pieces in slot",
    variantes: { FR: "R U' R' U' R U R' U2 R U' R'", FL: "L' U L U' L' U2 L U' L' U L", BR: "R' U' R U2 R' U R U' R' U' R", BL: "L U L' U' L U2 L' U' L U L'" },
    cube: {
      R4: "orange", R5: "orange", R6: "orange", R7: "vert", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F6: "vert", F7: "vert", F8: "vert", F9: "blanc"  // face
    },
  },
  {
    nomSimple: "F2L 39", nomDetail: "pieces in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "pieces in slot",
    variantes: { FR: "R U' R' U R U2 R' U R U' R'", FL: "L' U' L U L' U2 L U L' U' L", BR: "R' U' R U R' U2 R U R' U' R", BL: "L U L' U2 L U' L' U L U L'" },
    cube: {
      R4: "orange", R5: "orange", R6: "orange", R7: "blanc", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F6: "vert", F7: "vert", F8: "vert", F9: "orange"  // face
    },
  },
  {
    nomSimple: "F2L 40", nomDetail: "pieces in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "pieces in slot",
    variantes: { FR: "r U' r' U2 r U r' R U R'", FL: "L' U L F R U2 R' F'", BR: "R' U R r' U r U2 r' U' r", BL: "l U' l' U2 l U l' L U L'" },
    cube: {
      R4: "vert", R5: "orange", R6: "orange", R7: "vert", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert", F9: "blanc"  // face
    },
  },
  {
    nomSimple: "F2L 41", nomDetail: "pieces in slot", baseImage: null, placementDefaut: "FR",
    sousMenu: "pieces in slot",
    variantes: { FR: "R U' R' r U' r' U2 r U r'", FL: "l' U l U2 l' U' l L' U' L", BR: "r' U r U2 r' U' r R' U' R", BL: "f' L f U' L U L' U L U L'" },
    cube: {
      R4: "vert", R5: "orange", R6: "orange", R7: "blanc", R8: "orange", R9: "orange", // right
      F4: "vert", F5: "vert", F6: "orange", F7: "vert", F8: "vert", F9: "orange"  // face
    },
  },

],
oll: [
  {
    nomSimple: "OLL 21", nomDetail: "Sune", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R U R' U R U2 R'", FL: "L' U' L U' L' U2 L", BR: "R U R' U R U2 R'", BL: "L' U' L U' L' U2 L" },
    // Exemple = le cas exact de la photo de reference (le centre U5 est
    // jaune automatiquement). Remplace par les vraies donnees de l'OLL 21
    // si tu veux le Sune ; ceci ne sert qu'a valider le rendu.
    oll: {
      U2: "jaune", U6: "jaune", U9: "jaune", // dessus
      B3: "jaune",                           // languette arriere (droite)
      F1: "jaune", F2: "jaune",              // languettes avant
      L1: "jaune", L2: "jaune",              // languettes gauche
    },
  },
],
pll: [
  {
    nomSimple: "PLL", nomDetail: "T-Perm", baseImage: null, placementDefaut: "FR",
    sousMenu: "Adj Swap",
    variantes: { FR: "R U R' U' R' F R2 U' R' U' R U R' F'", FL: "L' U' L U L F' L2 U L U L' U' L F", BR: "R U R' U' R' F R2 U' R' U' R U R' F'", BL: "L' U' L U L F' L2 U L U L' U' L F" },
    // Exemple = couleurs de la photo de reference (illustratif). La grille est
    // jaune automatiquement ; on ne renseigne que les couleurs des languettes.
    // Couleurs dispo : rouge, bleu, vert, orange (voir COULEURS dans generateur-cube.js).
    pll: {
      B1: "orange", B2: "bleu",   B3: "orange", // arriere
      F1: "bleu",   F2: "vert",   F3: "bleu",   // avant
      L1: "bleu",   L2: "rouge",  L3: "rouge",  // gauche
      R1: "vert",   R2: "orange", R3: "vert",   // droite
    },
  },
],
};

const PLACEMENTS = { FR: "FR", FL: "FL", BR: "BR", BL: "BL" };

const contenu = document.getElementById("contenu");
const sousFiltres = document.getElementById("sous-filtres");
const onglets = document.querySelectorAll(".onglet");

let etapeActive = "f2l";
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

  // --- Vignette : schema OLL/PLL plat, cube 3D F2L, sinon placeholder ---
  const vignette = document.createElement("div");
  if (f.oll) {
    vignette.className = "vignette-oll";
    vignette.innerHTML = genererOllSVG(f.oll);
  } else if (f.pll) {
    vignette.className = "vignette-pll";
    vignette.innerHTML = genererPllSVG(f.pll);
  } else if (f.cube) {
    vignette.className = "vignette-cube";
    vignette.innerHTML = genererCubeSVG(f.cube);
  } else {
    vignette.className = "vignette-cube placeholder";
    vignette.textContent = "cube";
  }
  ligne.appendChild(vignette);

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

  // --- Applique un placement : met à jour la formule + le bouton actif ---
  function appliquer(code) {
    formule.textContent = f.variantes[code] || "(à définir)";

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