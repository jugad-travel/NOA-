export type Article = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  date: string
  intro: string
  sections: Array<{
    title: string
    paragraphs: string[]
    bullets?: string[]
  }>
  sources: Array<{ label: string; href: string }>
}

export const articles: Article[] = [
  {
    slug: "assistant-achat-ia-ecommerce",
    title: "Assistant d’achat IA : passer de la conversation à la décision",
    description: "Ce qui distingue un assistant d’achat IA d’un chatbot et comment l’intégrer au parcours e-commerce.",
    category: "Stratégie",
    readTime: "7 min",
    date: "Juillet 2026",
    intro: "Un assistant d’achat utile ne se contente pas de répondre. Il comprend un besoin, interroge le catalogue, explique ses choix et accompagne une décision mesurable.",
    sections: [
      {
        title: "Le problème n’est pas la conversation, mais la décision",
        paragraphs: [
          "Les interfaces conversationnelles sont devenues familières. Pourtant, produire une réponse agréable ne suffit pas à aider un client à choisir un produit.",
          "L’assistant doit relier la demande aux données réelles du commerce : attributs, variantes, disponibilité, politiques et contexte de navigation.",
        ],
      },
      {
        title: "Quatre capacités indispensables",
        paragraphs: ["Un assistant d’achat devient utile lorsqu’il assemble plusieurs fonctions dans un même parcours."],
        bullets: [
          "Comprendre les usages, contraintes et préférences exprimés en langage naturel.",
          "Trouver et classer les références pertinentes dans le catalogue réel.",
          "Expliquer les recommandations et les différences entre produits.",
          "Conserver le contexte jusqu’à la décision ou au passage de relais.",
        ],
      },
      {
        title: "La bonne place dans le funnel",
        paragraphs: [
          "L’assistant ne doit pas être limité à une bulle flottante. Il peut intervenir sur la home, la catégorie, la fiche produit, la comparaison, le panier et l’après-vente.",
          "Cette continuité évite de recommencer la qualification à chaque page et permet d’analyser le parcours dans son ensemble.",
        ],
      },
    ],
    sources: [
      { label: "Google Cloud — Conversational commerce", href: "https://docs.cloud.google.com/retail/conversational_search_backup/conversational-search" },
      { label: "iAdvize — Choisir un assistant shopping IA", href: "https://www.iadvize.com/fr/blog/choisir-assistant-shopping-ia" },
    ],
  },
  {
    slug: "recherche-conversationnelle-catalogue",
    title: "Recherche conversationnelle : guider les clients dans un catalogue complexe",
    description: "Comment la recherche conversationnelle complète les mots-clés et les filtres sur les catalogues vastes ou techniques.",
    category: "Product discovery",
    readTime: "6 min",
    date: "Juillet 2026",
    intro: "La recherche par mots-clés fonctionne lorsqu’un visiteur connaît déjà le nom du produit. Elle devient moins efficace quand il décrit un usage, un projet ou une contrainte.",
    sections: [
      {
        title: "Des requêtes qui ressemblent à un besoin",
        paragraphs: [
          "« Une veste pour aller au bureau à vélo sous la pluie » contient plusieurs critères, mais aucun nom de produit précis.",
          "La recherche conversationnelle extrait les contraintes, demande les précisions utiles et transforme l’intention en critères de sélection.",
        ],
      },
      {
        title: "Compléter, pas supprimer, les outils existants",
        paragraphs: [
          "Les filtres restent efficaces pour les visiteurs qui savent déjà ce qu’ils veulent. La conversation ajoute une porte d’entrée pour ceux qui raisonnent par usage.",
          "Les deux approches peuvent partager le même catalogue, la même disponibilité et les mêmes règles de classement.",
        ],
      },
      {
        title: "Ce qu’il faut mesurer",
        paragraphs: ["La qualité ne se limite pas au nombre de conversations ouvertes."],
        bullets: [
          "Les demandes comprises et celles qui nécessitent une reformulation.",
          "Les produits consultés après une recommandation.",
          "Les recherches sans réponse satisfaisante.",
          "La conversion des parcours assistés comparée à une référence pertinente.",
        ],
      },
    ],
    sources: [
      { label: "Google Cloud — Conversational filtering", href: "https://docs.cloud.google.com/retail/docs/conversational-filtering" },
      { label: "Algolia — AI Search", href: "https://www.algolia.com/products/ai-search" },
    ],
  },
  {
    slug: "mesurer-conversion-assistee",
    title: "Mesurer la conversion assistée sans inventer un ROI",
    description: "Une méthode transparente pour évaluer l’impact d’un assistant d’achat sur son propre trafic.",
    category: "Mesure",
    readTime: "6 min",
    date: "Juillet 2026",
    intro: "Un ROI crédible ne doit pas partir d’un multiplicateur universel. Il se construit avec une référence, des hypothèses visibles et une mesure sur le trafic du marchand.",
    sections: [
      {
        title: "Séparer scénario et résultat",
        paragraphs: [
          "Un simulateur sert à tester une hypothèse : trafic, conversion actuelle, panier, coût et hausse envisagée. Il ne prouve pas que cette hausse se produira.",
          "Le résultat réel vient ensuite d’un déploiement instrumenté et d’une période de mesure suffisamment représentative.",
        ],
      },
      {
        title: "Choisir des indicateurs reliés au funnel",
        paragraphs: ["Chaque usage appelle un indicateur principal et quelques signaux de diagnostic."],
        bullets: [
          "Recherche : demandes comprises, clics vers les produits, absence de résultat.",
          "Aide au choix : produits consultés, comparaison, ajout au panier.",
          "Panier : compléments acceptés, valeur du panier assisté.",
          "Insights : freins récurrents et demandes non couvertes par le catalogue.",
        ],
      },
      {
        title: "Comparer avec méthode",
        paragraphs: [
          "Lorsque le trafic le permet, un test comparatif réduit les biais liés à la saisonnalité, aux promotions et aux changements de mix produit.",
          "Les résultats doivent rester rattachés au périmètre observé : type de catalogue, emplacement, audience et période.",
        ],
      },
    ],
    sources: [
      { label: "iAdvize — Critères de choix et mesure", href: "https://www.iadvize.com/fr/blog/choisir-assistant-shopping-ia" },
      { label: "Algolia — Search, merchandising et analytics", href: "https://www.algolia.com/products/ai-search" },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
