"use client"

import { LegalPage } from "@/components/tabajoy/legal-page"
import { useMessages } from "@/lib/i18n"

export default function TermsPage() {
  const t = useMessages()
  return <LegalPage title={t.termsTitle} description={t.termsIntro}>
    <section><h2>{t.termsScope}</h2><p>{t.termsScopePlaceholder}</p></section>
    <section><h2>{t.orders}</h2><p>{t.ordersPlaceholder}</p></section>
    <section><h2>{t.prohibited}</h2><p>{t.prohibitedPlaceholder}</p></section>
    <section><h2>{t.serviceChanges}</h2><p>{t.serviceChangesPlaceholder}</p></section>
    <section><h2>{t.liability}</h2><p>{t.liabilityPlaceholder}</p></section>
    <section><h2>{t.governingLaw}</h2><p>{t.governingLawPlaceholder}</p></section>
    <section><h2>{t.termsContact}</h2><p><a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p></section>
  </LegalPage>
}
