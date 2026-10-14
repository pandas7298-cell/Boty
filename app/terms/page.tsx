import { LegalPage, legalPageMetadata } from "@/components/boty/legal-page"

export const metadata = legalPageMetadata(
  "利用規約",
  "Tabajoyのウェブサイトおよびサービスをご利用いただく際の規約。",
  "/terms"
)

export default function TermsPage() {
  return (
    <LegalPage title="利用規約" description="本サイトのご利用にあたっての条件です。">
      <section>
        <h2>適用範囲</h2>
        <p>[要記入]（規約の対象となるサイト・サービスと適用範囲をご確認ください。）</p>
      </section>
      <section>
        <h2>ご注文・売買契約</h2>
        <p>[要記入]（注文の成立時点、在庫切れ時の対応、契約条件をご確認ください。）</p>
      </section>
      <section>
        <h2>禁止事項</h2>
        <p>[要記入]（利用者に求める禁止事項をご確認ください。）</p>
      </section>
      <section>
        <h2>サービスの変更・停止</h2>
        <p>[要記入]（サービスの変更・停止に関する条件をご確認ください。）</p>
      </section>
      <section>
        <h2>免責・知的財産</h2>
        <p>[要記入]（免責範囲、掲載コンテンツの権利に関する条件をご確認ください。）</p>
      </section>
      <section>
        <h2>準拠法・紛争解決</h2>
        <p>[要記入]（準拠法、管轄、紛争解決方法をご確認ください。）</p>
      </section>
      <section>
        <h2>本規約に関するお問い合わせ</h2>
        <p><a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p>
      </section>
    </LegalPage>
  )
}
