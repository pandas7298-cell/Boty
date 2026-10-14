import { LegalPage, legalPageMetadata } from "@/components/boty/legal-page"

export const metadata = legalPageMetadata(
  "特定商取引法に基づく表記",
  "Tabajoyの販売事業者、販売価格、お支払い方法などの表示。",
  "/tokushoho"
)

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記" description="通信販売に関する事業者情報と販売条件を表示しています。">
      <section>
        <h2>販売事業者</h2>
        <p>Hebei Xiyatu Trading Co Ltd</p>
      </section>
      <section>
        <h2>所在地</h2>
        <p>Hebei, China</p>
      </section>
      <section>
        <h2>運営責任者</h2>
        <p>[要記入]</p>
      </section>
      <section>
        <h2>お問い合わせ先</h2>
        <p><a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p>
        <p className="mt-2">電話番号：[要記入]</p>
      </section>
      <section>
        <h2>販売価格・商品代金以外の必要料金</h2>
        <p>各商品ページに表示する価格をご確認ください。送料、その他の費用：[要記入]</p>
      </section>
      <section>
        <h2>お支払い方法・お支払い時期</h2>
        <p>[要記入]</p>
      </section>
      <section>
        <h2>商品の引渡時期</h2>
        <p>[要記入]</p>
      </section>
      <section>
        <h2>返品・キャンセルについて</h2>
        <p>[要記入]（条件は「<a href="/returns">返品・交換について</a>」をご確認ください。）</p>
      </section>
    </LegalPage>
  )
}
