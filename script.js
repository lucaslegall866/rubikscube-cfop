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
  oll: ["dot", "L", "Line", "Square", "Lightning", "Knight move", "Fish", "C", "P", "T", "W", "OCLL", "awkward", "all corners oriented"],
  pll: ["A", "E", "F", "G", "H", "J", "N", "R", "T", "U", "V", "Y", "Z"],
};

const formules = {
  croix: [
    {
      nomSimple: "Conseil 1", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "1 - faire la croix à l'aveugle (<1 ou 2)", FL: "", BR: "", BL: "",
      },
    },
    {
      nomSimple: "Conseil 2", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "2 - Devenir color neutral ou opposite neutral (se forcer)", FL: "", BR: "", BL: "",
      },
    },
    {
      nomSimple: "Conseil 3", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "3 - Faire des X cross si possible (1 F2L d'avance)", FL: "", BR: "", BL: "",
      },
    },
    {
      nomSimple: "Conseil 4", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "4 - Suivre des yeux la première F2L sinon", FL: "", BR: "", BL: "",
      },
    },
    {
      nomSimple: "Conseil 5", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "5 - Regarder des exmemples de croix", FL: "", BR: "", BL: "",
      },
    },
    {
      nomSimple: "Conseil 6", nomDetail: "croix", baseImage: null, placementDefaut: "FR",
      variantes: {
        FR: "6 - voir OLLCP ou COLL", FL: "", BR: "", BL: "",
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
    nomSimple: "OLL 1", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "(R U2 R') (R' F R F') U2 (R' F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U5: "jaune",  // dessus
      B2: "jaune",  // languette arriere
      F2: "jaune",  // languettes avant
      L1: "jaune", L2: "jaune", L3: "jaune", // languettes gauche
      R1: "jaune", R2: "jaune", R3: "jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 2", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "F (R U R' U') F' f (R U R' U') f'", FL: "", BR: "", BL: "" },
    oll: {
      U5: "jaune",  // dessus
      B2: "jaune", B3: "jaune",  // languette arriere
      F2: "jaune", F3: "jaune", // languettes avant
      L1: "jaune", L2: "jaune", L3: "jaune", // languettes gauche
      R2: "jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 3", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "f (R U R' U') f' (U') F (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U5: "jaune", U7: "jaune", // dessus
      B1: "jaune", B2: "jaune",  // languette arriere
      F2: "jaune", F3: "jaune", // languettes avant
      L2: "jaune", // languettes gauche
      R1: "jaune", R2: "jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 4", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "f (R U R' U') f' (U) F (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U5: "jaune", U9: "jaune", // dessus
      B2: "jaune", B3: "jaune",  // languette arriere
      F1: "jaune", F2: "jaune", // languettes avant
      L1: "jaune", L2: "jaune", // languettes gauche
      R2: "jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 5", nomDetail: "Square", baseImage: null, placementDefaut: "FR",
    sousMenu: "Square",
    variantes: { FR: "r' U2 (R U R' U) r", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"", U4:"", U5: "jaune", U6: "jaune", U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 6", nomDetail: "Square", baseImage: null, placementDefaut: "FR",
    sousMenu: "Square",
    variantes: { FR: "r U2 (R' U' R U') r'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"jaune", U4:"", U5: "jaune", U6: "jaune", U7:"", U8:"", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 7", nomDetail: "Lightning", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "r (U R' U R) U2 r'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"jaune", U8:"", U9: "", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 8", nomDetail: "Lightning", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "r' (U' R U' R') U2 r", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "", U3:"", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 9", nomDetail: "Fish", baseImage: null, placementDefaut: "FR",
    sousMenu: "Fish",
    variantes: { FR: "(R U R' U') (R' F R) (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 10", nomDetail: "Fish", baseImage: null, placementDefaut: "FR",
    sousMenu: "Fish",
    variantes: { FR: "(R U R' U) (R' F R F') (R U2 R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 11", nomDetail: "Lightning", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "r' R2 U R' U R U2 R' U M'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"", 
      U4:"", U5: "jaune", U6: "jaune", 
      U7:"jaune", U8:"jaune", U9: "", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"jaune", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 12", nomDetail: "Lightning", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "r R2' U' R U' R' U2 R U' M", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "jaune", U3:"", 
      U4:"", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 13", nomDetail: "Knight move", baseImage: null, placementDefaut: "FR",
    sousMenu: "Knight move",
    variantes: { FR: "F U R U2 R' U' R U R' F'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"jaune", U8:"", U9: "", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 14", nomDetail: "Knight move", baseImage: null, placementDefaut: "FR",
    sousMenu: "Knight move",
    variantes: { FR: "R' F (R U R') F' R (F U' F')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 15", nomDetail: "Knight move", baseImage: null, placementDefaut: "FR",
    sousMenu: "Knight move",
    variantes: { FR: "(r' U' r) (R' U' R U) (r' U r)", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"jaune", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 16", nomDetail: "Knight move", baseImage: null, placementDefaut: "FR",
    sousMenu: "Knight move",
    variantes: { FR: "(r U r') (R U R' U') (r U' r')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 17", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "(R U R' U) (R' F R F') U2 (R' F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "", U3:"", 
      U4:"", U5: "jaune", U6: "", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 18", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "(R U2 R') (R' F R F') U2 M' (U R U' r')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"", U5: "jaune", U6: "", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 19", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "S' R U R' S U' R' F R F'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"", U5: "jaune", U6: "", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 20", nomDetail: "dot", baseImage: null, placementDefaut: "FR",
    sousMenu: "dot",
    variantes: { FR: "(r U R' U') M2 (U R U' R') U' M'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "", U3:"jaune", 
      U4:"", U5: "jaune", U6: "", 
      U7:"jaune", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 21", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "(R U R' U) (R U' R' U) (R U2 R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "jaune", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 22", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R U2 (R2' U') (R2 U') (R2' U') U' R", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "", F2: "", F3:"jaune", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 23", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R2 D (R' U2 R) D' (R' U2 R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "jaune", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 24", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "(r U R' U') (r' F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 25", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R U2 R D R' U2 R D' R2", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 26", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "R U2 (R' U' R U') R'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 27", nomDetail: "OCLL", baseImage: null, placementDefaut: "FR",
    sousMenu: "OCLL",
    variantes: { FR: "(R U R' U) (R U2 R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"jaune", U8:"jaune", U9: "", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "", F2: "", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 28", nomDetail: "all corners oriented", baseImage: null, placementDefaut: "FR",
    sousMenu: "all corners oriented",
    variantes: { FR: "(r U R' U') M (U R U' R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "jaune", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"jaune", U8:"", U9: "jaune", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 29", nomDetail: "awkward", baseImage: null, placementDefaut: "FR",
    sousMenu: "awkward",
    variantes: { FR: "r2 D' r U r' D r2 U' r' U' r", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"", U8:"jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 30", nomDetail: "awkward", baseImage: null, placementDefaut: "FR",
    sousMenu: "awkward",
    variantes: { FR: "F U (R U2 R') U' (R U2 R') U' F'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"", 
      U4:"jaune", U5: "jaune", U6: "", 
      U7:"jaune", U8:"", U9: "jaune", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 31", nomDetail: "P", baseImage: null, placementDefaut: "FR",
    sousMenu: "P",
    variantes: { FR: "(R' U' F) (U R U' R') F' R", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"jaune", 
      U4:"", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 32", nomDetail: "P", baseImage: null, placementDefaut: "FR",
    sousMenu: "P",
    variantes: { FR: "S (R U R' U') (R' F R f')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 33", nomDetail: "T", baseImage: null, placementDefaut: "FR",
    sousMenu: "T",
    variantes: { FR: "(R U R' U') (R' F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "", U3:"jaune", 
      U4:"jaune", U5: "jaune", U6: "jaune", 
      U7:"", U8:"", U9: "jaune", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 34", nomDetail: "C", baseImage: null, placementDefaut: "FR",
    sousMenu: "C",
    variantes: { FR: "f R f' U' r' U' R U M'", FL: "", BR: "", BL: "" },
    oll: {
      U1:"", U2: "jaune", U3:"jaune", 
      U4:"", U5: "jaune", U6: "", 
      U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 35", nomDetail: "Fish", baseImage: null, placementDefaut: "FR",
    sousMenu: "Fish",
    variantes: { FR: "(R U2 R') (R' F R F') (R U2 R')", FL: "", BR: "", BL: "" },
    oll: {
      U1:"jaune", U2: "", U3:"", 
      U4:"", U5: "jaune", U6: "jaune", 
      U7:"", U8:"jaune", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 36", nomDetail: "W", baseImage: null, placementDefaut: "FR",
    sousMenu: "W",
    variantes: { FR: "(L' U' L U') (L' U L U) (L F' L' F)", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8:"", U9: "jaune", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 37", nomDetail: "Fish", baseImage: null, placementDefaut: "FR",
    sousMenu: "Fish",
    variantes: { FR: "F R (U' R' U') (R U R') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "jaune", U3:"", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "", U8:"", U9: "jaune", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 38", nomDetail: "W", baseImage: null, placementDefaut: "FR",
    sousMenu: "W",
    variantes: { FR: "(R U R' U) (R U' R' U') (R' F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"jaune", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "jaune", U8:"", U9: "", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 39", nomDetail: "S", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "L F' (L' U' L U) F U' L'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"jaune", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "jaune", U8:"", U9: "", // dessus
      B1: "jaune", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 40", nomDetail: "S", baseImage: null, placementDefaut: "FR",
    sousMenu: "Lightning",
    variantes: { FR: "R' F (R U R' U') F' U R", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "", U3:"", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 41", nomDetail: "awkward", baseImage: null, placementDefaut: "FR",
    sousMenu: "awkward",
    variantes: { FR: "(R U R' U) (R U2 R') F (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "jaune", U8:"", U9: "jaune", // dessus
      B1: "jaune", B2: "", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 42", nomDetail: "awkward", baseImage: null, placementDefaut: "FR",
    sousMenu: "awkward",
    variantes: { FR: "(R' U' R U') (R' U2 R) F (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "", U3:"jaune", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "", U8:"jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "jaune", F2: "", F3:"jaune", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 43", nomDetail: "P", baseImage: null, placementDefaut: "FR",
    sousMenu: "P",
    variantes: { FR: "f' (L' U' L U) f", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "", U3:"", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "jaune", U8:"jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "jaune", R2:"jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 44", nomDetail: "P", baseImage: null, placementDefaut: "FR",
    sousMenu: "P",
    variantes: { FR: "f (R U R' U') f'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"jaune", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8:"jaune", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 45", nomDetail: "T", baseImage: null, placementDefaut: "FR",
    sousMenu: "T",
    variantes: { FR: "F (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"jaune", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "", U8:"", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 46", nomDetail: "C", baseImage: null, placementDefaut: "FR",
    sousMenu: "C",
    variantes: { FR: "R' U' (R' F R F') U R", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "", 
      U7: "jaune", U8: "jaune", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "jaune", R2:"jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 47", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "F' (L' U' L U) (L' U' L U) F", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8: "", U9: "", // dessus
      B1: "jaune", B2: "", B3:"",  // languette arriere
      F1: "jaune", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "jaune", L3:"", // languettes gauche
      R1: "jaune", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 48", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "F (R U R' U') (R U R' U') F'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "jaune", U5: "jaune", U6: "", 
      U7: "", U8: "", U9: "", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"jaune", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 49", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "r U' (r2 U) (r2 U) (r2) U' r", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8: "", U9: "", // dessus
      B1: "", B2: "", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"jaune", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 50", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "r' U (r2 U') (r2 U') (r2) U r'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8: "jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "", F2: "", F3:"jaune", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 51", nomDetail: "Line", baseImage: null, placementDefaut: "FR",
    sousMenu: "Line",
    variantes: { FR: "f (R U R' U') (R U R' U') f'", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "", U8: "", U9: "", // dessus
      B1: "", B2: "jaune", B3:"jaune",  // languette arriere
      F1: "", F2: "jaune", F3:"jaune", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "", R2:"", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 52", nomDetail: "Line", baseImage: null, placementDefaut: "FR",
    sousMenu: "Line",
    variantes: { FR: "R' (F' U' F U') (R U R' U) R", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "", 
      U7: "", U8: "jaune", U9: "", // dessus
      B1: "", B2: "", B3: "jaune",  // languette arriere
      F1: "", F2: "", F3: "jaune", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "", R2:"jaune", R3:"", // languettes droite
    },
  },
  {
    nomSimple: "OLL 53", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "(r' U' R U') (R' U R U') (R' U2 r)", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8: "jaune", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "jaune", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 54", nomDetail: "L", baseImage: null, placementDefaut: "FR",
    sousMenu: "L",
    variantes: { FR: "(r U R' U) (R U' R' U) (R U2 r')", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "jaune", 
      U7: "", U8: "", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "jaune", R2:"", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 55", nomDetail: "Line (?)", baseImage: null, placementDefaut: "FR",
    sousMenu: "Line",
    variantes: { FR: "R U2 R2 (U' R U' R') U2 (F R F')", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "jaune", U3:"", 
      U4: "", U5: "jaune", U6: "", 
      U7: "", U8: "jaune", U9: "", // dessus
      B1: "", B2: "", B3:"",  // languette arriere
      F1: "", F2: "", F3:"", // languettes avant
      L1: "jaune", L2: "jaune", L3:"jaune", // languettes gauche
      R1: "jaune", R2: "jaune", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 56", nomDetail: "Line", baseImage: null, placementDefaut: "FR",
    sousMenu: "Line",
    variantes: { FR: "(r U r') (U R U' R') (U R U' R') (r U' r')", FL: "", BR: "", BL: "" },
    oll: {
      U1: "", U2: "", U3:"", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "", U8: "", U9: "", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "jaune", L2: "", L3:"jaune", // languettes gauche
      R1: "jaune", R2: "", R3:"jaune", // languettes droite
    },
  },
  {
    nomSimple: "OLL 57", nomDetail: "all corners oriented", baseImage: null, placementDefaut: "FR",
    sousMenu: "all corners oriented",
    variantes: { FR: "(R U R' U') M' (U R U' r')", FL: "", BR: "", BL: "" },
    oll: {
      U1: "jaune", U2: "", U3:"jaune", 
      U4: "jaune", U5: "jaune", U6: "jaune", 
      U7: "jaune", U8: "", U9: "jaune", // dessus
      B1: "", B2: "jaune", B3:"",  // languette arriere
      F1: "", F2: "jaune", F3:"", // languettes avant
      L1: "", L2: "", L3:"", // languettes gauche
      R1: "", R2: "", R3:"", // languettes droite
    },
  },
  
],
pll: [
  {
    nomSimple: "PLL 1", nomDetail: "Aa", baseImage: null, placementDefaut: "FR",
    sousMenu: "A",
    variantes: { FR: "x (R' U R') D2 (R U' R') D2 R2 x'", FL: "", BR: "", BL: "" },
    // Exemple d'usage pratique : tout reste gris SAUF les stickers "identiques"
    // qui aident a reconnaitre le cas (ici en bleu). La grille est jaune auto.
    // `fleches` dessine la permutation entre pieces (coins U1/U3/U7/U9,
    // aretes U2/U4/U6/U8) : ["de","vers"] simple, ["de","vers","double"] echange.
    pll: {
      B1: "repere", B2: "", B3: "repere", // "phares" arriere (memes couleurs = repere)
      F1: "repere2", F2: "repere2", F3: "",
      L1: "", L2: "repere2", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U1", "U3", ""], 
        ["U3", "U9", ""],
        ["U9", "U1", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 2", nomDetail: "Ab", baseImage: null, placementDefaut: "FR",
    sousMenu: "A",
    variantes: { FR: "x R2 D2 (R U R') D2 (R U' R) x'", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "", L2: "repere2", L3: "repere2",
      R1: "repere", R2: "", R3: "repere", 
      fleches: [
        ["U1", "U9", ""],
        ["U9", "U3", ""],
        ["U3", "U1", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 3", nomDetail: "E", baseImage: null, placementDefaut: "FR",
    sousMenu: "E",
    variantes: { FR: "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "repere2", B3: "",
      F1: "", F2: "repere2", F3: "",
      L1: "", L2: "repere2", L3: "",
      R1: "", R2: "repere2", R3: "", 
      fleches: [
        ["U1", "U7", "double"],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 4", nomDetail: "F", baseImage: null, placementDefaut: "FR",
    sousMenu: "F",
    variantes: { FR: "(R' U' F') (R U R' U') R' F R2 (U' R' U') (R U R' U) R", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "", F2: "", F3: "",
      L1: "repere2", L2: "repere2", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U2", "U8", "double"],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 5", nomDetail: "Ga", baseImage: null, placementDefaut: "FR",
    sousMenu: "G",
    variantes: { FR: "R2 (U R' U R' U' R U') R2 D (U' R' U R) D'", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "", F2: "repere", F3: "repere",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U2", "U8", ""],
        ["U8", "U6", ""],
        ["U6", "U4", ""],
        ["U4", "U2", ""],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 6", nomDetail: "Gb", baseImage: null, placementDefaut: "FR",
    sousMenu: "G",
    variantes: { FR: "D R' U' R U D' R2 U R' U R U' R U' R2", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "", F2: "", F3: "",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "repere", R2: "repere", R3: "", 
      fleches: [
        ["U2", "U4", ""],
        ["U4", "U6", ""],
        ["U6", "U8", ""],
        ["U8", "U2", ""],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 7", nomDetail: "Gc", baseImage: null, placementDefaut: "FR",
    sousMenu: "G",
    variantes: { FR: "R2 (U' R U' R U R' U) R2 D' (U R U' R') D", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "repere", B3: "repere",
      F1: "", F2: "", F3: "",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U2", "U6", ""],
        ["U6", "U4", ""],
        ["U4", "U8", ""],
        ["U8", "U2", ""],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 8", nomDetail: "Gd", baseImage: null, placementDefaut: "FR",
    sousMenu: "G",
    variantes: { FR: "(R U R' U') D R2 (U' R U' R' U R' U) R2 D'", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "", F2: "", F3: "",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "", R2: "repere", R3: "repere", 
      fleches: [
        ["U2", "U8", ""],
        ["U8", "U4", ""],
        ["U4", "U6", ""],
        ["U6", "U2", ""],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 9", nomDetail: "H", baseImage: null, placementDefaut: "FR",
    sousMenu: "H",
    variantes: { FR: "(M2 U' M2) U2 (M2 U' M2)", FL: "", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "", B3: "repere2",
      F1: "repere2", F2: "", F3: "repere2",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "repere2", R2: "", R3: "repere2", 
      fleches: [
        ["U2", "U8", "double"],
        ["U4", "U6", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 10", nomDetail: "Ja", baseImage: null, placementDefaut: "FR",
    sousMenu: "J",
    variantes: { FR: "x R2 F R F' R U2 r' U r U2 x'", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "repere", B3: "repere",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "repere2", L2: "repere2", L3: "repere2",
      R1: "", R2: "repere", R3: "repere", 
      fleches: [
        ["U2", "U6", "double"],
        ["U3", "U9", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 11", nomDetail: "Jb", baseImage: null, placementDefaut: "FR",
    sousMenu: "J",
    variantes: { FR: "(R U R' F') (R U R' U') R' F R2 U' R' U'", FL: "", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "repere2", B3: "",
      F1: "", F2: "repere", F3: "repere",
      L1: "repere2", L2: "repere2", L3: "repere2",
      R1: "repere", R2: "repere", R3: "", 
      fleches: [
        ["U3", "U9", "double"],
        ["U6", "U8", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 12", nomDetail: "Na", baseImage: null, placementDefaut: "FR",
    sousMenu: "N",
    variantes: { FR: "(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')", FL: "", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "repere2", B3: "",
      F1: "", F2: "repere2", F3: "repere2",
      L1: "", L2: "repere", L3: "repere",
      R1: "repere", R2: "repere", R3: "", 
      fleches: [
        ["U3", "U7", "double"],
        ["U4", "U6", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 13", nomDetail: "Nb", baseImage: null, placementDefaut: "FR",
    sousMenu: "N",
    variantes: { FR: "(R' U R U' R') (F' U' F) (R U R') (F R' F') (R U' R)", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "repere2", B3: "repere2",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "repere", L2: "repere", L3: "",
      R1: "", R2: "repere", R3: "repere", 
      fleches: [
        ["U1", "U9", "double"],
        ["U4", "U6", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 14", nomDetail: "Ra", baseImage: null, placementDefaut: "FR",
    sousMenu: "R",
    variantes: { FR: "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R')", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "repere2", B3: "",
      F1: "repere", F2: "repere", F3: "",
      L1: "repere", L2: "", L3: "repere",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U1", "U3", ""],
        ["U3", "U7", ""],
        ["U7", "U1", ""],

        ["U4", "U6", ""],
        ["U6", "U8", ""],
        ["U8", "U4", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 15", nomDetail: "Rb", baseImage: null, placementDefaut: "FR",
    sousMenu: "R",
    variantes: { FR: "(R' U2) (R U2) (R' F R) (U R' U' R') F' R2", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "repere2", F2: "", F3: "repere2",
      L1: "", L2: "repere2", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U1", "U9", ""],
        ["U9", "U7", ""],
        ["U7", "U1", ""],

        ["U2", "U6", ""],
        ["U6", "U4", ""],
        ["U4", "U2", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 16", nomDetail: "T", baseImage: null, placementDefaut: "FR",
    sousMenu: "T",
    variantes: { FR: "(R U R' U') (R' F R2) (U' R' U') (R U R' F')", FL: "", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "repere2", B3: "",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U3", "U9", "double"],
        ["U4", "U6", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 17", nomDetail: "Ua", baseImage: null, placementDefaut: "FR",
    sousMenu: "U",
    variantes: { FR: "(M2 U M) U2 (M' U M2)", FL: "y2 R U R' U R' U' R2 U' R' U R' U R", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "repere2", B3: "repere2",
      F1: "repere2", F2: "", F3: "repere2",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "repere2", R2: "", R3: "repere2", 
      fleches: [
        ["U4", "U8", ""],
        ["U8", "U6", ""],
        ["U6", "U4", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 18", nomDetail: "Ub", baseImage: null, placementDefaut: "FR",
    sousMenu: "U",
    variantes: { FR: "(M2 U' M) U2 (M' U' M2)", FL: "y2 R' U R' U' R' U' R' U R U R2", BR: "", BL: "" },
    pll: {
      B1: "repere2", B2: "repere2", B3: "repere2",
      F1: "repere2", F2: "", F3: "repere2",
      L1: "repere2", L2: "", L3: "repere2",
      R1: "repere2", R2: "", R3: "repere2", 
      fleches: [
        ["U4", "U6", ""],
        ["U6", "U8", ""],
        ["U8", "U4", ""],
      ],
    },
  },
  {
    nomSimple: "PLL 19", nomDetail: "V", baseImage: null, placementDefaut: "FR",
    sousMenu: "V",
    variantes: { FR: "(R' U R' U') (R D' R' D) (R' U D') (R2 U' R2) D R2", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "", L2: "repere2", L3: "repere2",
      R1: "", R2: "", R3: "", 
      fleches: [
        ["U1", "U9", "double"],
        ["U2", "U6", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 20", nomDetail: "Y", baseImage: null, placementDefaut: "FR",
    sousMenu: "Y",
    variantes: { FR: "F R (U' R' U') (R U R' F') (R U R' U') (R' F R F')", FL: "", BR: "", BL: "" },
    pll: {
      B1: "", B2: "", B3: "",
      F1: "repere2", F2: "repere2", F3: "",
      L1: "", L2: "", L3: "",
      R1: "repere2", R2: "repere2", R3: "", 
      fleches: [
        ["U1", "U9", "double"],
        ["U2", "U4", "double"],
      ],
    },
  },
  {
    nomSimple: "PLL 21", nomDetail: "Z", baseImage: null, placementDefaut: "FR",
    sousMenu: "Z",
    variantes: { FR: "M' U' M2 U' M2 U' M' U2 M2", FL: "", BR: "", BL: "" },
    pll: {
      B1: "repere", B2: "", B3: "repere",
      F1: "repere", F2: "", F3: "repere",
      L1: "repere", L2: "repere2", L3: "repere",
      R1: "repere", R2: "repere2", R3: "repere", 
      fleches: [
        ["U1", "U7", ""],
        ["U7", "U9", ""],
        ["U9", "U3", ""],
        ["U3", "U1", ""],

        ["U2", "U8", "double"],
      ],
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