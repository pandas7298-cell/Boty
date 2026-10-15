"use client"

import { LegalPage } from "@/components/tabajoy/legal-page"
import { useMessages } from "@/lib/i18n"

export default function ReturnsPage() {
  const t = useMessages()
  return <LegalPage title={t.returnsTitle} description={t.returnsIntro}>
    <section><h2>{t.returnConditions}</h2><p>{t.returnConditionsPlaceholder}</p></section>
    <section><h2>{t.returnDeadline}</h2><p>{t.returnDeadlinePlaceholder}</p></section>
    <section><h2>{t.returnRefund}</h2><p>{t.returnRefundPlaceholder}</p></section>
    <section><h2>{t.contactInfo}</h2><p>{t.returnContact}<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p></section>
  </LegalPage>
}
