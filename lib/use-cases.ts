import { VIDEOS } from "@/lib/videos"

export type UseCase = {
  slug: string
  path: string
  step: string
  capability: string
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  videoId: string
  videoTitle: string
  benefits: Array<{ title: string; copy: string }>
  steps: Array<{ title: string; copy: string }>
  faq: Array<{ question: string; answer: string }>
  legacyAnchor: string
}

export const USE_CASES: UseCase[] = [
  {
    slug: "recherche-conversationnelle",
    path: "/moteur-recherche-conversationnel-ecommerce",
    step: "Recherche",
    capability: "Recherche hybride Parcel",
    navLabel: "Recherche & aide au choix",
    title: "Le moteur de recherche IA qui sait quand il faut conseiller",
    metaTitle: "Moteur de recherche IA e-commerce conversationnel",
    metaDescription: "Parcel combine recherche e-commerce déterministe gratuite et assistance IA pour comprendre les besoins complexes, qualifier et recommander.",
    intro: "Une recherche précise obtient immédiatement ses résultats. Un besoin complexe déclenche un parcours de conseil capable de comprendre l’usage, poser les bonnes questions et recommander.",
    videoId: VIDEOS.match,
    videoTitle: "Recherche déterministe et aide au choix IA dans Parcel",
    benefits: [
      { title: "Deux niveaux de réponse", copy: "Les requêtes précises restent directes ; les demandes par usage ouvrent un parcours guidé." },
      { title: "Votre logique métier", copy: "Critères de choix, compatibilités, exclusions et priorités structurent les résultats." },
      { title: "Une décision expliquée", copy: "Les recommandations rendent visibles les critères retenus et les limites importantes." },
    ],
    steps: [
      { title: "La demande est identifiée", copy: "Parcel distingue une recherche précise d’un besoin qui demande du conseil." },
      { title: "Les critères utiles sont qualifiés", copy: "Usage, budget et contraintes sont précisés uniquement lorsque cela aide à trancher." },
      { title: "Les résultats deviennent actionnables", copy: "Produits, explications, comparaison et ajout au panier s’enchaînent dans la même expérience." },
    ],
    faq: [
      { question: "Qu’est-ce qu’un moteur de recherche IA e-commerce ?", answer: "Il comprend les requêtes formulées en langage naturel et relie le besoin aux produits du catalogue, tout en conservant un chemin direct pour les recherches précises." },
      { question: "Une recherche simple consomme-t-elle une session IA ?", answer: "Non. Une recherche déterministe précise peut afficher directement ses résultats sans consommer de session Parcel assistée." },
      { question: "Avec quelles plateformes Parcel est-il compatible ?", answer: "Parcel dispose d’une application Shopify native, installable en environ 2 minutes, et d’une API back-end permettant des intégrations adaptées à d’autres architectures. Les autres connecteurs dédiés sont en préparation." },
    ],
    legacyAnchor: "parcel-recherche",
  },
  {
    slug: "besoin-global",
    path: "/produits/besoin-global",
    step: "Découverte / projet",
    capability: "Parcel Projet",
    navLabel: "Besoin global",
    title: "Transformer un besoin complet en panier cohérent",
    metaTitle: "Assistant IA cross-sell & panier complet e-commerce",
    metaDescription: "Parcel décompose un projet complexe et construit une sélection cohérente de produits à partir du catalogue et des règles du marchand.",
    intro: "Quand un client prépare un trek, une chambre, une routine beauté ou un chantier, il cherche une solution complète. Parcel décompose son projet et construit une sélection adaptée.",
    videoId: VIDEOS.projet,
    videoTitle: "Construire un équipement complet pour le GR20",
    benefits: [
      { title: "Faire émerger tous les besoins", copy: "Le projet est décomposé en postes compréhensibles avant de sélectionner les produits." },
      { title: "Construire une sélection cohérente", copy: "Compatibilités, contraintes, budget et règles métier relient les choix entre catégories." },
      { title: "Créer un panier ajustable", copy: "Le visiteur peut conserver, remplacer ou retirer chaque élément avant l’ajout au panier." },
    ],
    steps: [
      { title: "Le projet est qualifié", copy: "Durée, contexte, contraintes et budget précisent le besoin global." },
      { title: "Les postes utiles sont proposés", copy: "Parcel structure les catégories nécessaires et distingue leur rôle dans le projet." },
      { title: "La sélection est assemblée", copy: "Les produits retenus forment un panier cohérent, explicable et modifiable." },
    ],
    faq: [
      { question: "Sur quels catalogues cet usage a-t-il du sens ?", answer: "Sur les catalogues où un projet demande plusieurs produits complémentaires : outdoor, sport, maison, bricolage, beauté ou équipement professionnel. Son apport est plus limité pour un achat strictement unitaire." },
      { question: "Comment Parcel décompose-t-il un projet ?", answer: "À partir des informations du catalogue, des compatibilités et des règles métier configurées avec le marchand." },
      { question: "Le visiteur peut-il modifier la sélection ?", answer: "Oui. Chaque poste et chaque produit peuvent être ajustés avant l’ajout au panier." },
    ],
    legacyAnchor: "parcel-projet",
  },
  {
    slug: "questions-produit",
    path: "/produits/questions-produit",
    step: "Fiche produit",
    capability: "Parcel Expert",
    navLabel: "Questions produit",
    title: "Répondre au doute avant qu’il ne devienne un abandon",
    metaTitle: "Assistant IA fiche produit e-commerce & FAQ produit",
    metaDescription: "Taille, compatibilité, usage, composition ou entretien : Parcel répond sur la fiche produit à partir des données disponibles.",
    intro: "Taille, compatibilité, usage, composition ou entretien : Parcel répond directement sur la fiche produit à partir des données disponibles, sans obliger le visiteur à quitter son parcours.",
    videoId: VIDEOS.expert,
    videoTitle: "Répondre aux questions directement sur la fiche produit",
    benefits: [
      { title: "Répondre dans le bon contexte", copy: "La question est traitée sur la fiche du produit concerné, au moment où elle apparaît." },
      { title: "Rendre les limites visibles", copy: "Les réponses précisent les points de vigilance utiles à la décision." },
      { title: "Signaler l’information manquante", copy: "Lorsque la donnée nécessaire n’est pas disponible, Parcel le signale clairement." },
    ],
    steps: [
      { title: "La question est reliée au produit", copy: "Le contexte de la fiche et les données disponibles structurent la réponse." },
      { title: "Les informations utiles sont sélectionnées", copy: "Attributs, variantes et règles pertinentes sont mobilisés selon la demande." },
      { title: "La suite reste actionnable", copy: "Le visiteur peut poursuivre, comparer ou demander un relais selon l’information obtenue." },
    ],
    faq: [
      { question: "D’où viennent les réponses ?", answer: "Des données produit, variantes, attributs et politiques effectivement mises à disposition de Parcel dans l’intégration retenue." },
      { question: "Que se passe-t-il lorsque l’information manque ?", answer: "Parcel le signale clairement et peut proposer le relais approprié, sans compléter la réponse avec une caractéristique non vérifiée." },
      { question: "Cela remplace-t-il la description produit ?", answer: "La description reste le socle. Parcel rend ses informations accessibles dans le contexte d’une question précise et aide à identifier les sujets encore peu documentés." },
    ],
    legacyAnchor: "parcel-expert",
  },
  {
    slug: "comparaison",
    path: "/produits/comparaison",
    step: "Comparaison",
    capability: "Parcel Comparaison",
    navLabel: "Comparaison",
    title: "Comparer selon le besoin et les critères qui comptent réellement",
    metaTitle: "Comparateur de produits IA pour e-commerce",
    metaDescription: "Parcel compare les produits selon l’usage exprimé, explique les différences et peut conclure qu’aucun choix n’est adapté.",
    intro: "Parcel sélectionne les critères qui comptent pour l’usage exprimé, explique les différences et peut conclure qu’aucun des produits comparés n’est réellement adapté.",
    videoId: VIDEOS.comparaison,
    videoTitle: "Comparer plusieurs produits selon le besoin exprimé",
    benefits: [
      { title: "Des critères contextualisés", copy: "Les lignes utiles dépendent de la catégorie et de l’usage exprimé par le visiteur." },
      { title: "Un verdict par usage", copy: "Les arbitrages rendent visibles les situations dans lesquelles chaque produit convient le mieux." },
      { title: "Une conclusion honnête", copy: "Parcel peut indiquer qu’aucun produit comparé ne répond correctement au besoin." },
    ],
    steps: [
      { title: "Les produits sont sélectionnés", copy: "Le visiteur choisit deux à quatre références depuis les résultats ou les fiches." },
      { title: "Les critères décisifs sont retenus", copy: "Les caractéristiques sont filtrées selon l’usage, les contraintes et les règles de la catégorie." },
      { title: "Les différences sont expliquées", copy: "La synthèse fait ressortir les avantages, limites et alternatives pertinentes." },
    ],
    faq: [
      { question: "Combien de produits peut-on comparer ?", answer: "L’expérience présentée par Parcel compare de deux à quatre produits afin de conserver une lecture claire." },
      { question: "Les critères sont-ils toujours identiques ?", answer: "Ils varient selon la catégorie et l’usage. Une comparaison de chaussures et une comparaison d’ordinateurs mobilisent des critères différents." },
      { question: "Parcel peut-il conclure qu’aucun produit ne convient ?", answer: "Oui. La conclusion peut recommander une autre référence ou signaler une incompatibilité avec le besoin exprimé." },
    ],
    legacyAnchor: "parcel-comparaison",
  },
  {
    slug: "panier-complements",
    path: "/produits/panier-complements",
    step: "Panier",
    capability: "Continuité Parcel",
    navLabel: "Compléments au panier",
    title: "Compléter le panier à partir du besoin réel",
    metaTitle: "Cross-sell IA e-commerce & recommandations panier",
    metaDescription: "Parcel contextualise les recommandations complémentaires avec le besoin explicitement exprimé par le visiteur.",
    intro: "Les recommandations e-commerce peuvent s’appuyer sur le comportement, la similarité produit ou des règles prédéfinies. Parcel exploite également le besoin explicitement exprimé pour contextualiser les compléments proposés.",
    videoId: VIDEOS.panier,
    videoTitle: "Compléter un panier à partir du contexte d’achat",
    benefits: [
      { title: "Conserver le contexte", copy: "Le besoin exprimé plus tôt continue d’informer les recommandations au panier." },
      { title: "Justifier chaque complément", copy: "La proposition explique le rôle du produit complémentaire dans l’usage du client." },
      { title: "Faire émerger un panier plus complet", copy: "Les produits nécessaires au projet deviennent visibles au bon moment du parcours." },
    ],
    steps: [
      { title: "Le contexte est repris", copy: "Usage, contraintes et produits déjà choisis servent de point de départ." },
      { title: "Les compléments sont filtrés", copy: "Compatibilités, disponibilité et règles du marchand déterminent les propositions pertinentes." },
      { title: "Le visiteur garde le choix", copy: "Chaque ajout reste explicable et peut être accepté ou écarté individuellement." },
    ],
    faq: [
      { question: "Quels signaux alimentent les recommandations ?", answer: "De nombreux moteurs exploitent des signaux comportementaux, des similarités et des règles. Parcel ajoute à ces signaux le contexte explicite de la demande lorsqu’il est disponible." },
      { question: "À quel moment les compléments apparaissent-ils ?", answer: "Ils peuvent être présentés au moment de l’ajout au panier, dans le contexte du produit et du besoin déjà exprimé." },
      { question: "Comment mesurer leur apport ?", answer: "Les compléments acceptés et la valeur du panier assisté peuvent être comparés sur un périmètre et une période cohérents, sans appliquer de gain théorique universel." },
    ],
    legacyAnchor: "parcel-panier",
  },
  {
    slug: "service-apres-vente",
    path: "/produits/service-apres-vente",
    step: "Après-vente",
    capability: "Parcel SAV",
    navLabel: "Service après-vente",
    title: "Automatiser les questions simples et transmettre les situations qui demandent une intervention humaine",
    metaTitle: "Assistant SAV IA e-commerce : réponses automatisées",
    metaDescription: "Parcel répond aux demandes après-vente à partir des politiques et données disponibles, puis propose un relais lorsque la situation le demande.",
    intro: "Parcel répond aux demandes après-vente à partir des politiques et données disponibles de la boutique. Lorsqu’une situation demande une décision humaine, il propose le relais approprié.",
    videoId: VIDEOS.sav,
    videoTitle: "Répondre aux questions après-vente documentées",
    benefits: [
      { title: "Appliquer les politiques disponibles", copy: "Les réponses sont structurées à partir des règles effectivement fournies par la boutique." },
      { title: "Rester dans le périmètre connecté", copy: "Parcel utilise uniquement les données rendues accessibles dans l’intégration mise en place." },
      { title: "Proposer un relais", copy: "Une situation qui demande une décision humaine peut être transmise selon le processus défini avec le marchand." },
    ],
    steps: [
      { title: "La demande est qualifiée", copy: "Parcel identifie la politique ou l’information nécessaire pour répondre." },
      { title: "Le périmètre disponible est vérifié", copy: "La réponse s’appuie sur les règles et données effectivement connectées." },
      { title: "La suite appropriée est proposée", copy: "Une réponse documentée est fournie ou la situation est orientée vers l’équipe compétente." },
    ],
    faq: [
      { question: "Parcel remplace-t-il le service client ?", answer: "Parcel traite les questions simples qui peuvent être répondues à partir des politiques et données disponibles. Les situations qui demandent une décision restent orientées vers une équipe humaine." },
      { question: "Parcel accède-t-il aux commandes ?", answer: "L’accès dépend de l’intégration et des autorisations explicitement mises en place. Cette page ne suppose pas qu’une donnée de commande soit disponible par défaut." },
      { question: "Comment éviter une réponse non vérifiée ?", answer: "Le périmètre des données et politiques est défini avant l’activation. Lorsqu’une information nécessaire manque, Parcel peut signaler cette limite et proposer un relais." },
    ],
    legacyAnchor: "parcel-sav",
  },
]

export function getUseCase(slug: string) {
  return USE_CASES.find((useCase) => useCase.slug === slug)
}

export const NESTED_USE_CASES = USE_CASES.filter((useCase) => useCase.path.startsWith("/produits/"))
