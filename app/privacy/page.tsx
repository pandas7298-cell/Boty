import { LegalPage, legalPageMetadata } from "@/components/boty/legal-page"

export const metadata = legalPageMetadata(
  "プライバシーポリシー",
  "Tabajoyにおける個人情報の取り扱いについて。"
)

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー" description="お客様の情報の取り扱いに関する方針です。">
      <section>
        <h2>事業者情報</h2>
        <p>Hebei Xiyatu Trading Co Ltd（Hebei, China）</p>
        <p className="mt-2">お問い合わせ先：<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p>
      </section>
      <section>
        <h2>取得する情報と利用目的</h2>
        <p>[要記入]（取得する情報、利用目的、取得方法をご確認ください。）</p>
      </section>
      <section>
        <h2>第三者提供・委託</h2>
        <p>[要記入]（第三者提供、業務委託、提供先・目的をご確認ください。）</p>
      </section>
      <section>
        <h2>保存期間・安全管理</h2>
        <p>[要記入]（保存期間と安全管理措置をご確認ください。）</p>
      </section>
      <section>
        <h2>アクセス解析等</h2>
        <p>本サイトでは Vercel Analytics を利用しています。収集される情報、利用目的、保存期間、提供先、および利用者が選択できる設定については、公開前に確認のうえ記載します：[要記入]</p>
      </section>
      <section>
        <h2>開示・訂正・削除等のお問い合わせ</h2>
        <p>[要記入]（本人確認の方法と対応手続きをご確認ください。）</p>
        <p className="mt-2">連絡先：<a href="mailto:tabajoy_jp@outlook.com">tabajoy_jp@outlook.com</a></p>
      </section>
      <section>
        <h2>改定</h2>
        <p>[要記入]（改定時の告知方法をご確認ください。）</p>
      </section>
    </LegalPage>
  )
}
