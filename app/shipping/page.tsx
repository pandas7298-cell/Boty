import { LegalPage, legalPageMetadata } from "@/components/boty/legal-page"

export const metadata = legalPageMetadata(
  "配送について",
  "Tabajoyの配送方法、送料、発送時期についてのご案内。",
  "/shipping"
)

export default function ShippingPage() {
  return (
    <LegalPage title="配送について" description="商品のお届けに関するご案内です。">
      <section>
        <h2>配送対象地域</h2>
        <p>[要記入]（配送可能な国・地域をご確認ください。）</p>
      </section>
      <section>
        <h2>送料</h2>
        <p>[要記入]（地域別送料、送料無料の条件をご確認ください。）</p>
      </section>
      <section>
        <h2>発送時期・お届け日数</h2>
        <p>[要記入]（注文から発送までの日数、配送方法、お届け目安をご確認ください。）</p>
      </section>
      <section>
        <h2>配送状況・お問い合わせ</h2>
        <p>配送に関するお問い合わせは <a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a> までご連絡ください。</p>
      </section>
    </LegalPage>
  )
}
