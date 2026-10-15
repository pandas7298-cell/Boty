"use client"

import { LegalPage } from "@/components/tabajoy/legal-page"
import { useMessages, useLocale, useLocalizedPath } from "@/lib/i18n"

export default function TokushohoPage() {
  const t = useMessages()
  const locale = useLocale()
  const localize = useLocalizedPath()
  return <LegalPage title={t.tokushoTitle} description={t.tokushoIntro}>
    <section><h2>{t.seller}</h2><p>Hebei Xiyatu Trading Co Ltd</p></section>
    <section><h2>{t.address}</h2><p>Hebei, China</p></section>
    <section><h2>{t.representative}</h2><p>{t.tokushoRepPlaceholder}</p></section>
    <section><h2>{t.contactInfo}</h2><p><a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p><p className="mt-2">{t.phone}: {t.tokushoPhonePlaceholder}</p></section>
    <section><h2>{t.tokushoPrice}</h2><p>{t.tokushoPriceText}</p></section>
    <section><h2>{t.tokushoPayment}</h2><p>{t.tokushoPaymentPlaceholder}</p></section>
    <section><h2>{t.tokushoDelivery}</h2><p>{t.tokushoDeliveryPlaceholder}</p></section>
    <section><h2>{t.tokushoReturns}</h2><p>{t.tokushoReturnsPlaceholder}<a href={localize("/returns")}>{t.returns}</a>{locale === "ja" ? "」をご確認ください。" : "."}</p></section>
  </LegalPage>
}
