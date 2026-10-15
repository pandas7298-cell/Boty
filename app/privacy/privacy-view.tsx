"use client"

import { LegalPage } from "@/components/boty/legal-page"
import { useMessages } from "@/lib/i18n"

export default function PrivacyPage() {
  const t = useMessages()
  return <LegalPage title={t.privacyTitle} description={t.privacyIntro}>
    <section><h2>{t.privacyBusiness}</h2><p>Hebei Xiyatu Trading Co Ltd（Hebei, China）</p><p className="mt-2">{t.emailLabel}<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p></section>
    <section><h2>{t.collectedData}</h2><p>{t.collectedDataPlaceholder}</p></section>
    <section><h2>{t.sharing}</h2><p>{t.sharingPlaceholder}</p></section>
    <section><h2>{t.retention}</h2><p>{t.retentionPlaceholder}</p></section>
    <section><h2>{t.analytics}</h2><p>{t.analyticsText}</p></section>
    <section><h2>{t.privacyRequests}</h2><p>{t.privacyRequestsPlaceholder}</p><p className="mt-2">{t.emailLabel}<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p></section>
    <section><h2>{t.revisions}</h2><p>{t.revisionsPlaceholder}</p></section>
  </LegalPage>
}
