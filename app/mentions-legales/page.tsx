import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal/LegalPage"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site parcel-ia.com.",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updated="16 juillet 2026">
      <LegalSection title="Éditeur du site">
        <p><strong>PARCEL</strong>, société par actions simplifiée au capital de 100 €.</p>
        <p>Siège social : 102 rue Guy Môquet, 59420 Mouvaux, France.</p>
        <p>SIREN : 999 071 889 · SIRET : 999 071 889 00011.</p>
        <p>RCS Lille Métropole : 999 071 889 · TVA intracommunautaire : FR69999071889.</p>
        <p>Président : Balthazar Barbry · Directeur général : Vianney Mayaud.</p>
        <p>Contact : <a className="underline" href="mailto:vianney@parcel-ia.com">vianney@parcel-ia.com</a>.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>Les textes, visuels, marques, logos, interfaces et éléments techniques présents sur ce site sont protégés. Toute reproduction ou réutilisation non autorisée, totale ou partielle, est interdite.</p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>PARCEL s’efforce de maintenir des informations exactes et à jour. Les contenus du site ont une vocation informative et ne constituent ni une garantie de performance ni un engagement contractuel. Les résultats présentés par le simulateur dépendent exclusivement des hypothèses saisies.</p>
      </LegalSection>
    </LegalPage>
  )
}
