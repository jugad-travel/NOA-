import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal/LegalPage"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données du site Parcel.",
  alternates: { canonical: "/confidentialite" },
}

export default function ConfidentialitePage() {
  return (
    <LegalPage eyebrow="Données personnelles" title="Politique de confidentialité" updated="16 juillet 2026">
      <LegalSection title="Responsable du traitement">
        <p>PARCEL, 102 rue Guy Môquet, 59420 Mouvaux, est responsable des traitements réalisés directement depuis le site. Pour toute question ou demande : <a className="underline" href="mailto:vianney@parcel-ia.com">vianney@parcel-ia.com</a>.</p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>Le site ne comporte actuellement aucun compte utilisateur et n’enregistre pas directement de demande de rendez-vous. Lorsque vous contactez PARCEL par email, nous recevons les informations que vous choisissez de transmettre.</p>
        <p>Lorsque la réservation Planify est activée, le lien ouvre le service de réservation externe. Les données nécessaires au rendez-vous sont alors traitées selon les informations affichées par ce prestataire.</p>
      </LegalSection>

      <LegalSection title="Finalités et durée">
        <p>Les données de contact sont utilisées pour répondre à votre demande, préparer une démonstration et assurer le suivi de la relation commerciale. Elles sont conservées pendant la durée nécessaire à ces échanges et aux obligations légales applicables.</p>
      </LegalSection>

      <LegalSection title="Services externes">
        <p>Les vidéos sont diffusées via YouTube. Leur lecture peut entraîner des échanges techniques avec Google/YouTube. Les prises de rendez-vous pourront être opérées via Planify. Nous vous invitons à consulter les politiques de ces services lors de leur utilisation.</p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données en écrivant à l’adresse de contact ci-dessus. Vous pouvez également introduire une réclamation auprès de la CNIL.</p>
      </LegalSection>
    </LegalPage>
  )
}
