import { VIDEOS } from "@/lib/videos"

/**
 * Les usages Parcel, un par page.
 *
 * Ils vivaient jusqu'ici comme six ancres d'une seule page `/produits`, ce qui
 * donnait une seule URL indexable pour six sujets distincts — et un
 * déséquilibre avec la page « recherche conversationnelle », qui avait déjà
 * la sienne. Chaque usage a désormais sa page, avec son mot-clé, sa
 * démonstration et ses questions.
 *
 * `path` est absolu : la recherche conserve son URL historique et son
 * référencement acquis, les autres vivent sous `/produits/`.
 */

export type UseCase = {
  slug: string
  path: string
  /** Étape du parcours d'achat, affichée en surtitre. */
  step: string
  /** Nom de la capacité côté produit. */
  capability: string
  /** Titre court, pour les cartes et la navigation. */
  navLabel: string
  /** H1 de la page. */
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  videoId: string
  videoTitle: string
  /** Ce que l'usage change, côté marchand. */
  benefits: Array<{ title: string; copy: string }>
  /** Le déroulé concret, tel qu'un visiteur le vit. */
  steps: Array<{ title: string; copy: string }>
  faq: Array<{ question: string; answer: string }>
  /** Ancien fragment sur /produits, conservé pour les redirections. */
  legacyAnchor: string
}

export const USE_CASES: UseCase[] = [
  /* ────────────────────────────── Recherche ───────────────────────────── */
  {
    slug: "recherche-conversationnelle",
    // URL historique : elle porte le référencement déjà acquis sur ce mot-clé.
    path: "/moteur-recherche-conversationnel-ecommerce",
    step: "Recherche",
    capability: "Parcel Recherche",
    navLabel: "Recherche conversationnelle",
    title: "Le moteur de recherche conversationnel pensé pour l’e-commerce",
    metaTitle: "Moteur de recherche conversationnel e-commerce",
    metaDescription:
      "Une recherche qui comprend l’intention, pas seulement les mots-clés. Parcel qualifie le besoin, interroge votre catalogue et explique ses recommandations.",
    intro:
      "La recherche par mots-clés fonctionne quand le client connaît le nom du produit. Elle décroche dès qu’il décrit un usage. Parcel garde la recherche classique et prend le relais quand la demande la dépasse.",
    videoId: VIDEOS.match,
    videoTitle: "Trouver le bon produit : recherche classique et recherche IA",
    benefits: [
      { title: "Comprendre le besoin réel", copy: "Le client formule sa demande avec ses mots. Parcel identifie l’intention, l’usage, le budget et les contraintes." },
      { title: "Respecter vos règles business", copy: "Les recommandations tiennent compte du catalogue, du stock, de la marge, des priorités commerciales et de vos exclusions." },
      { title: "Guider jusqu’à l’achat", copy: "Parcel explique ses choix et accompagne la décision au lieu de renvoyer une liste de résultats." },
    ],
    steps: [
      { title: "La recherche classique d’abord", copy: "Mots-clés, complétion, tri, filtres : le geste habituel reste intact, avec les critères compris affichés en clair." },
      { title: "La bascule quand c’est utile", copy: "Si la requête dépasse le mot-clé, une invite discrète propose l’assistant. Jamais une fenêtre qui s’ouvre d’elle-même." },
      { title: "Les questions qui trient", copy: "Parcel demande seulement ce qui écarte réellement des options : pointure disponible, usage, budget." },
    ],
    faq: [
      { question: "Qu’est-ce qu’un moteur de recherche conversationnel e-commerce ?", answer: "C’est un moteur qui comprend des demandes formulées en langage naturel. Il précise le besoin, conserve le contexte et recommande les produits les plus adaptés du catalogue réel." },
      { question: "Quelle différence avec un chatbot e-commerce ?", answer: "Un chatbot répond à des questions prédéfinies. Parcel interroge le catalogue, raisonne sur les critères produit et applique les règles commerciales du marchand pour aider à choisir." },
      { question: "Parcel remplace-t-il mon moteur de recherche actuel ?", answer: "Non, il le complète. La recherche par mots-clés reste le chemin le plus court pour un rachat ; l’assistant s’ajoute pour les demandes exprimées par usage." },
      { question: "Avec quelles plateformes est-il compatible ?", answer: "Application sur le Shopify App Store, et API back-end CMS-agnostique pour Magento, WooCommerce, PrestaShop, Webflow et les architectures headless." },
    ],
    legacyAnchor: "parcel-recherche",
  },

  /* ─────────────────────────────── Projet ─────────────────────────────── */
  {
    slug: "besoin-global",
    path: "/produits/besoin-global",
    step: "Découverte",
    capability: "Parcel Projet",
    navLabel: "Besoin global",
    title: "Transformer un projet en sélection de produits",
    metaTitle: "Vendre un projet complet, pas un produit isolé",
    metaDescription:
      "Vos clients décrivent un projet sans connaître les références. Parcel qualifie le contexte, décompose le besoin par poste et construit une sélection cohérente.",
    intro:
      "« Je pars quinze jours sur le GR20 » n’est pas une requête produit : c’est un projet. Parcel le décompose en postes, distingue l’indispensable de l’optionnel, et construit le panier en une conversation au lieu de six recherches successives.",
    videoId: VIDEOS.projet,
    videoTitle: "Construire un équipement complet pour le GR20",
    benefits: [
      { title: "Un panier au lieu d’un article", copy: "Le client repart avec ce qu’il lui faut pour son projet, pas avec le seul produit qu’il savait nommer." },
      { title: "Une décomposition explicite", copy: "Chaque poste est justifié. Le client comprend pourquoi tel élément est indispensable et tel autre optionnel." },
      { title: "Un choix par catégorie", copy: "Parcel propose plusieurs options par poste avec un choix par défaut. Un kit imposé se refuse ; un kit qu’on ajuste s’achète." },
    ],
    steps: [
      { title: "Le projet est qualifié", copy: "Durée, conditions, niveau d’autonomie : Parcel demande ce qui change réellement la sélection." },
      { title: "Les postes sont proposés", copy: "Portage, couchage, protection… Le client coche ce qu’il n’a pas déjà, indispensable et recommandé séparés." },
      { title: "Le panier est construit", copy: "Une sélection par poste, avec les alternatives et le budget total, ajustable avant l’ajout au panier." },
    ],
    faq: [
      { question: "Sur quels catalogues cet usage a-t-il du sens ?", answer: "Sur ceux où un besoin se traduit par plusieurs produits complémentaires : outdoor, sport, bricolage, puériculture, équipement professionnel. Sur un catalogue d’achats unitaires, l’apport est faible." },
      { question: "Comment Parcel sait-il ce qui compose un projet ?", answer: "À partir de vos données produit — types, attributs, compatibilités — et de vos règles métier. La décomposition n’est pas générique : elle vient de votre catalogue." },
      { question: "Le client peut-il modifier la sélection ?", answer: "Oui, à chaque étape. Il choisit les postes, puis les produits dans chaque poste. Le budget se met à jour en conséquence." },
    ],
    legacyAnchor: "parcel-projet",
  },

  /* ──────────────────────────── Aide au choix ─────────────────────────── */
  {
    slug: "aide-au-choix",
    path: "/produits/aide-au-choix",
    step: "Page catégorie",
    capability: "Parcel Match",
    navLabel: "Aide au choix",
    title: "Aide au choix sur les catégories à forte profondeur",
    metaTitle: "Aide au choix produit pour e-commerce",
    metaDescription:
      "Quarante références pertinentes ne valent pas mieux que zéro : la décision reste entière. Parcel interroge l’usage et le budget, puis explique sa recommandation.",
    intro:
      "Sur une page catégorie, le client connaît le rayon mais hésite entre des dizaines de modèles. Les filtres supposent qu’il sait déjà ce qu’il cherche. Parcel pose les questions qui écartent réellement des options, puis explique pourquoi tel produit lui convient.",
    videoId: VIDEOS.match,
    videoTitle: "Trouver le bon produit : recherche classique et recherche IA",
    benefits: [
      { title: "Moins d’allers-retours", copy: "Le client arrête de comparer des fiches à l’aveugle : la sélection lui arrive déjà triée sur son usage." },
      { title: "Une recommandation justifiée", copy: "Chaque produit porte sa raison. Un classement sans explication ne rassure personne." },
      { title: "La disponibilité intégrée", copy: "Taille, variante, stock : Parcel ne recommande pas ce qu’il ne peut pas livrer." },
    ],
    steps: [
      { title: "Deux questions, pas dix", copy: "Chaque question supplémentaire fait chuter le taux d’aboutissement. Parcel demande ce qui trie vraiment." },
      { title: "Le classement s’explique", copy: "Score de correspondance, raison par produit, points de vigilance — y compris quand un modèle a un défaut." },
      { title: "L’alternative budget est nommée", copy: "Quand un modèle moins cher tient la comparaison, il est proposé comme tel, pas dissimulé." },
    ],
    faq: [
      { question: "En quoi est-ce différent de filtres à facettes ?", answer: "Les filtres demandent au client de connaître les critères. Parcel part de son usage — « quinze jours avec onze kilos » — et en déduit les critères techniques lui-même." },
      { question: "Faut-il enrichir le catalogue au préalable ?", answer: "La qualité des recommandations est plafonnée par celle des attributs produit. Un travail d’enrichissement est souvent utile, ciblé sur les attributs qui pèsent dans la décision." },
      { question: "Que se passe-t-il si aucun produit ne convient ?", answer: "Parcel le dit, et remonte la demande non couverte dans les insights. C’est un signal d’assortiment, pas un échec à masquer." },
    ],
    legacyAnchor: "parcel-match",
  },

  /* ─────────────────────────── Questions produit ──────────────────────── */
  {
    slug: "questions-produit",
    path: "/produits/questions-produit",
    step: "Fiche produit",
    capability: "Parcel Expert",
    navLabel: "Questions produit",
    title: "Répondre aux questions qui bloquent l’ajout au panier",
    metaTitle: "Répondre aux questions produit sur la fiche",
    metaDescription:
      "Taille, compatibilité, entretien : les questions sans réponse font sortir le client de la page. Parcel répond depuis vos données produit, sans ticket support.",
    intro:
      "« Ça taille comment ? », « C’est vraiment étanche ? » : la description ne le dit pas, le client sort de la page pour chercher ailleurs, et souvent ne revient pas. Parcel répond sur place, à partir de la fiche et des retours clients.",
    videoId: VIDEOS.expert,
    videoTitle: "Un expert produit directement sur la fiche produit",
    benefits: [
      { title: "Pas de sortie de page", copy: "La réponse arrive là où la question se pose. Le client ne part pas la chercher sur un forum." },
      { title: "Moins de tickets", copy: "Les questions récurrentes sont absorbées avant d’arriver au service client." },
      { title: "Moins de retours", copy: "Une réponse honnête sur la taille évite la commande qui reviendra." },
    ],
    steps: [
      { title: "La réponse vient de vos données", copy: "Fiche produit, attributs, avis clients, politiques de la boutique. Pas de généralité inventée." },
      { title: "Ce pour quoi le produit convient", copy: "Parcel énonce les usages où le produit est bon, et ceux où il ne l’est pas." },
      { title: "Les points de vigilance sont dits", copy: "« Chausse petit », « pointure 45 en rupture ». Taire un défaut se paie en retour." },
    ],
    faq: [
      { question: "D’où viennent les réponses ?", answer: "De vos données : fiche produit, attributs, variantes, avis, politiques de la boutique. Parcel n’invente pas de caractéristique absente du catalogue." },
      { question: "Que fait Parcel s’il ne sait pas ?", answer: "Il le dit et propose le relais vers un conseiller, plutôt que de produire une réponse plausible mais invérifiable." },
      { question: "Cela remplace-t-il la description produit ?", answer: "Non. La description reste le socle. Parcel répond aux questions qu’elle ne couvre pas, et signale les manques récurrents." },
    ],
    legacyAnchor: "parcel-expert",
  },

  /* ───────────────────────────── Comparaison ──────────────────────────── */
  {
    slug: "comparaison",
    path: "/produits/comparaison",
    step: "Comparaison",
    capability: "Parcel Comparaison",
    navLabel: "Comparaison",
    title: "Comparer deux produits selon l’usage réel",
    metaTitle: "Comparateur de produits pour e-commerce",
    metaDescription:
      "Un tableau de specs ne tranche pas. Parcel compare critère par critère et formule un verdict par usage — y compris quand la réponse est « aucun des deux ».",
    intro:
      "Deux modèles en tête, et le client bloque. Un tableau de caractéristiques aligne des chiffres sans dire lequel choisir. Parcel compare sur les critères qui comptent pour son usage, et tranche.",
    videoId: VIDEOS.comparaison,
    videoTitle: "Comparer deux produits selon son besoin",
    benefits: [
      { title: "Un verdict, pas un tableau", copy: "Le client repart avec une décision, pas avec une ligne de plus à interpréter." },
      { title: "Contextualisé par usage", copy: "Le meilleur modèle dépend de ce qu’on en fait. Parcel le dit usage par usage." },
      { title: "Honnête sur les cas limites", copy: "Quand aucun des deux ne convient, Parcel le dit et propose le bon." },
    ],
    steps: [
      { title: "La sélection se fait partout", copy: "Le client coche « Comparer » depuis les résultats ou la fiche. La comparaison est une action, pas une destination." },
      { title: "Les critères sont ceux du client", copy: "Poids, tenue sous charge, adhérence : les lignes retenues sont celles qui décident, pas la totalité de la fiche technique." },
      { title: "Le verdict est découpé", copy: "Un gagnant par usage, plutôt qu’un vainqueur unique qui ne vaudrait pour personne." },
    ],
    faq: [
      { question: "Combien de produits peut-on comparer ?", answer: "De deux à quatre. Au-delà, le tableau devient illisible et la comparaison perd son intérêt." },
      { question: "Les critères sont-ils les mêmes pour tous les produits ?", answer: "Non. Ils sont choisis selon la catégorie et l’usage exprimé : comparer deux chaussures et deux ordinateurs n’appelle pas les mêmes lignes." },
      { question: "Parcel peut-il conclure qu’aucun ne convient ?", answer: "Oui, et c’est important. Un comparateur qui désigne toujours un gagnant perd la confiance du client dès la première déception." },
    ],
    legacyAnchor: "parcel-comparaison",
  },

  /* ────────────────────────────── Panier ──────────────────────────────── */
  {
    slug: "panier-complements",
    path: "/produits/panier-complements",
    step: "Panier",
    capability: "Continuité Parcel",
    navLabel: "Compléments au panier",
    title: "Des compléments utiles, pas un cross-sell générique",
    metaTitle: "Augmenter le panier moyen sans harceler le client",
    metaDescription:
      "« Les clients ont aussi acheté » propose la même chose à tout le monde. Parcel garde le contexte du besoin et ne propose que ce qui complète réellement l’achat.",
    intro:
      "Le cross-sell classique applique la même liste à tous les visiteurs. Parcel a suivi la conversation : il sait pourquoi ce produit a été choisi, et ne propose que ce qui manque vraiment au projet.",
    videoId: VIDEOS.panier,
    videoTitle: "Compléter intelligemment un achat",
    benefits: [
      { title: "Le contexte est conservé", copy: "Le besoin exprimé plus tôt sert encore au moment du panier. Rien à re-qualifier." },
      { title: "Une proposition, pas une relance", copy: "Les compléments arrivent au moment de l’ajout, discrètement, et jamais en boucle." },
      { title: "Un panier moyen qui change d’échelle", copy: "Compléter un projet fait plus d’effet que suggérer un accessoire au hasard." },
    ],
    steps: [
      { title: "Déclenché par l’ajout", copy: "Les compléments apparaissent quand un produit entre au panier, pas en fenêtre surgissante à l’arrivée." },
      { title: "Justifiés un par un", copy: "« Les cols sont exposés, même en juin » vaut mieux que « souvent acheté ensemble »." },
      { title: "Ouvre sur le projet complet", copy: "Si la demande évoque un usage plus large, Parcel propose de compléter l’équipement entier." },
    ],
    faq: [
      { question: "En quoi est-ce différent d’un moteur de recommandation ?", answer: "Un moteur classique s’appuie sur des corrélations d’achat. Parcel s’appuie sur le besoin que le client vient d’exprimer, ce qui donne des compléments explicables." },
      { question: "Le client peut-il être sollicité trop souvent ?", answer: "Les compléments ne sont proposés qu’à l’ajout au panier, et seulement quand la demande évoque un usage plus large qu’un achat isolé." },
      { question: "Comment mesurer l’effet ?", answer: "Compléments acceptés, valeur du panier assisté comparée au panier moyen, sur un périmètre comparable. Voir notre guide sur la mesure de la conversion assistée." },
    ],
    legacyAnchor: "parcel-panier",
  },

  /* ───────────────────────────── Après-vente ──────────────────────────── */
  {
    slug: "service-apres-vente",
    path: "/produits/service-apres-vente",
    step: "Après-vente",
    capability: "Parcel SAV",
    navLabel: "Service après-vente",
    title: "Répondre aux demandes après-vente depuis vos vraies règles",
    metaTitle: "Automatiser le service après-vente e-commerce",
    metaDescription:
      "Retours, livraison, échanges : Parcel répond depuis les politiques réelles de la boutique et la commande du client, et passe la main dès que c’est nécessaire.",
    intro:
      "Les demandes après-vente sont répétitives, arrivent en volume et à toute heure. Parcel répond à partir de la commande réelle et des politiques de la boutique — et sait s’arrêter quand la demande dépasse ce cadre.",
    videoId: VIDEOS.sav,
    videoTitle: "Répondre aux questions SAV directement sur le site",
    benefits: [
      { title: "Adossé à vos politiques", copy: "Délais, conditions, prise en charge : la réponse vient de vos règles, pas d’un texte générique." },
      { title: "Ancré sur la commande", copy: "Parcel voit la commande concernée, sa date et son état. La réponse est vérifiable." },
      { title: "Le relais reste ouvert", copy: "Dès qu’une intervention humaine s’impose, le passage de main est proposé sans faire répéter le client." },
    ],
    steps: [
      { title: "La demande est située", copy: "Commande, article, date de livraison : le contexte est repris sans redemander un numéro." },
      { title: "La règle est appliquée", copy: "« Neuf jours, l’échange est ouvert jusqu’à trente » : une réponse datée, pas une paraphrase de CGV." },
      { title: "L’action est engagée", copy: "Échange lancé, étiquette envoyée — ou transmission à un conseiller quand le cas sort du cadre." },
    ],
    faq: [
      { question: "Parcel remplace-t-il mon service client ?", answer: "Non. Il absorbe les demandes répétitives et documentées, et libère du temps humain pour les cas à forte valeur. Le relais est toujours disponible." },
      { question: "Comment éviter une réponse fausse sur un retour ?", answer: "Les réponses sont adossées aux politiques que vous fournissez et à la commande réelle. Hors de ce cadre, Parcel oriente vers un conseiller plutôt que d’extrapoler." },
      { question: "Quelles données sont nécessaires ?", answer: "Les politiques de la boutique et un accès en lecture aux commandes concernées. Le périmètre est défini avec vous avant le déploiement." },
    ],
    legacyAnchor: "parcel-sav",
  },
]

export function getUseCase(slug: string) {
  return USE_CASES.find((useCase) => useCase.slug === slug)
}

/** Les usages qui vivent sous /produits/ — la recherche garde son URL propre. */
export const NESTED_USE_CASES = USE_CASES.filter((u) => u.path.startsWith("/produits/"))
