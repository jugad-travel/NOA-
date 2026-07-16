import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal/LegalPage"

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation",
  description: "Conditions générales d’utilisation du site parcel-ia.com.",
  alternates: { canonical: "/cgu" },
}

export default function CGUPage() {
  return (
    <LegalPage eyebrow="Utilisation du site" title="Conditions générales d’utilisation" updated="16 juillet 2026">
      <LegalSection title="Objet">
        <p>Les présentes conditions encadrent l’accès au site parcel-ia.com et à ses contenus de présentation. L’utilisation des solutions Parcel dans un environnement marchand fait l’objet de conditions contractuelles distinctes.</p>
      </LegalSection>

      <LegalSection title="Accès au site">
        <p>Le site est accessible gratuitement. PARCEL peut en modifier, suspendre ou interrompre tout ou partie pour maintenance, sécurité ou évolution du service.</p>
      </LegalSection>

      <LegalSection title="Contenus et estimations">
        <p>Les informations, démonstrations et scénarios présentés sont indicatifs. Le simulateur applique uniquement les valeurs renseignées par l’utilisateur et ne constitue pas une promesse de résultat.</p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>Le site peut renvoyer vers des services tiers, notamment Shopify, YouTube et Planify. PARCEL ne contrôle pas leurs contenus, leurs disponibilités ni leurs propres conditions d’utilisation.</p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>Les présentes conditions sont soumises au droit français. En cas de difficulté, les parties rechercheront d’abord une solution amiable avant toute procédure.</p>
      </LegalSection>
    </LegalPage>
  )
}
