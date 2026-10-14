import { LegalPage, legalPageMetadata } from "@/components/boty/legal-page"

export const metadata = legalPageMetadata(
  "返品・交換について",
  "Tabajoyでご購入いただいた商品の返品・交換に関するご案内。",
  "/returns"
)

export default function ReturnsPage() {
  return (
    <LegalPage title="返品・交換について" description="返品・交換をご希望の場合のご案内です。">
      <section>
        <h2>返品・交換の条件</h2>
        <p>[要記入]（お客様都合・初期不良・誤配送それぞれの対応条件をご確認ください。）</p>
      </section>
      <section>
        <h2>ご連絡の期限・方法</h2>
        <p>[要記入]（ご連絡期限と必要な情報・画像をご確認ください。）</p>
      </section>
      <section>
        <h2>返送・交換・返金</h2>
        <p>[要記入]（返送料の負担、返送先、交換または返金方法・時期をご確認ください。）</p>
      </section>
      <section>
        <h2>お問い合わせ</h2>
        <p>返品・交換のご相談は <a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a> までご連絡ください。</p>
      </section>
    </LegalPage>
  )
}
