// src/data/projects.js
export const projects = [
  {
    title: "EcoShop - Scan Produits Durables",
    description: "Application mobile/web pour scanner les produits et vérifier leur impact écologique via OpenFoodFacts + IA.",
    image: "/projects/ecoshop.png", // mets une image dans public/projects/ecoshop.png
    tags: ["React Native", "Node.js", "OpenFoodFacts API", "IA"],
    github: "https://github.com/Moubssite/ecoshop",
    demo: "https://ecoshop.vercel.app",
  },
  {
    title: "SIG-IA pour UAV",
    description: "Projet de détection d'objets par drone avec CNN et traitement SIG (Université Cadi Ayyad).",
    image: "/projects/uav-sig.png",
    tags: ["Python", "TensorFlow", "QGIS", "Deep Learning"],
    github: "https://github.com/Moubssite/uav-detection",
    demo: null,
  },
  {
    title: "Portfolio Personnel (ce site !)",
    description: "Mon portfolio moderne avec React, Vite, Tailwind, shadcn/ui et thème violet électrique.",
    image: "/projects/portfolio.png",
    tags: ["React", "Vite", "Tailwind", "shadcn/ui"],
    github: "https://github.com/Moubssite/mon-portfolio",
    demo: "https://mon-portfolio.vercel.app",
  },
  // Ajoute tes autres projets ici...
]