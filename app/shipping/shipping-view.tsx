"use client"

import { LegalPage } from "@/components/tabajoy/legal-page"
import { useMessages } from "@/lib/i18n"

export default function ShippingPage() {
  const t = useMessages()
  return <LegalPage title={t.shippingTitle} description={t.shippingIntro}>
    <section><h2>{t.shippingArea}</h2><p>{t.shippingAreaPlaceholder}</p></section>
    <section><h2>{t.shippingFees}</h2><p>{t.shippingFeesPlaceholder}</p></section>
    <section><h2>{t.shippingTime}</h2><p>{t.shippingTimePlaceholder}</p></section>
    <section><h2>{t.contactInfo}</h2><p>{t.shippingContact}<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p></section>
  </LegalPage>
}
