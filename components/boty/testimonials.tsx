"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const reviews = [
  { product: "たまごおにぎり", rating: 5, profile: "高校生・女性", title: "おにぎりなのにスクイーズ、反則でしょ", body: "友達の誕生日に買ったけど、自分用にも欲しくなって結局２個買いました。たまごのところがつるつるで、おにぎりの部分は米粒っぽいざらつきがあって、見たままの質感なのがすごい。握るとゆっくり形が変わるので、授業の合間にずっと触ってます。" },
  { product: "たまごおにぎり", rating: 5, profile: "30代・主婦", title: "娘が取り合いになってます", body: "小２の娘に買いました。三角おにぎりの中にたまご、という見た目がど真ん中だったらしく、下校してからずっと握ってます。ほんのり甘い香りも本物みたい。弟も欲しがっているので追加購入予定です。（もちろん食べ物ではないですよ）" },
  { product: "たまごおにぎり", rating: 4, profile: "20代・会社員", title: "デスクのひと休み担当になりました", body: "仕事の合間にむにむにしてます。柔らかくて、握った跡がゆっくり戻っていくのが地味にクセになります。少し小さく感じたので星は４つ。置物としても可愛いので結果的に満足です。" },
  { product: "たまごおにぎり", rating: 5, profile: "40代・男性", title: "思ってたよりずっと本物っぽい", body: "妻が買ってきたのを借りて触ったら、そのままハマりました。米粒の粒々まで再現されていて、写真で見るより質感が良い。手のひらサイズなので、テレビを見ながらずっと触ってます。" },
  { product: "たまごおにぎり", rating: 3, profile: "20代・女性", title: "可愛いけど、思ったより小さい", body: "写真だと手のひらにしっかり乗るサイズに見えたんですが、実物はもう一回り小さめでした。手触りは良いしデザインも好きだけど、価格を考えると少し割高かな…という印象です。" },
  { product: "たまごおにぎり", rating: 5, profile: "30代・女性", title: "香りがほんのりなのがちょうどいい", body: "甘い香りがふわっとする程度で、強すぎないのが良いです。スクイーズは香りが強いものもあるので、これは当たりでした。鞄に入れて持ち歩いてます。" },
  { product: "たまごおにぎり", rating: 4, profile: "10代・学生", title: "テスト期間のお供", body: "勉強の合間に握ってます。休憩のときにちょうどいい柔らかさで、指でぐっと押したあとの戻りが遅いのも好き。友達にも好評でした。" },
  { product: "たまごおにぎり", rating: 2, profile: "30代・女性", title: "届いたときに型がついてました", body: "可愛さは文句なしです。ただ、袋から出したら側面に押されたような跡がついていました。しばらく触っていたらだいぶ戻りましたが、最初はちょっと残念でした。梱包はもう少し工夫してほしいです。" },
  { product: "たまごおにぎり", rating: 5, profile: "50代・女性", title: "懐かしい形にほっこり", body: "昔ながらの三角おにぎりにたまご。おなじみの形で、見ていると和みます。実家の母にあげたら喜んでいました。手触りも柔らかくて面白いです。" },
  { product: "たまごおにぎり", rating: 3, profile: "20代・男性", title: "柔らかくて置くなら◎", body: "柔らかいのは良いのですが、柔らかすぎて形を保つのが難しいです。ちょっと押しただけでへにゃっとなります。デスクに飾る分には可愛いので、置物として使ってます。" },

  { product: "クロワッサンねこ", rating: 5, profile: "20代・女性", title: "猫×クロワッサンが天才的", body: "「パン屋さんにいそうな猫」という説明に惹かれて買いました。クロワッサンのサクッとした感じまで質感で表現されていて、写真より実物のほうが好きです。握ると柔らかくて戻りもゆっくり。ずっと触っていられます。" },
  { product: "クロワッサンねこ", rating: 5, profile: "30代・主婦", title: "パン好きの娘へ", body: "クロワッサンが好きな娘に。猫の顔がついてるのがツボだったみたいで、リビングに飾ってあります。柔らかすぎないので触りやすいです。油分が移るので紙の上には置かないほうがいいです。" },
  { product: "クロワッサンねこ", rating: 4, profile: "20代・会社員", title: "通勤後のひと休みに", body: "満員電車のあと、鞄から出して少し触ってます。握って離したときののんびりした戻り方が好きです。ただ、香りが少し強めなので職場では出せないかな。家用にしてます。" },
  { product: "クロワッサンねこ", rating: 5, profile: "40代・女性", title: "プレゼントに喜ばれました", body: "パン好きの友人に渡しました。開けた瞬間「なにこれ可愛い」と。実物は想像よりしっかり作られていて、細かいところまで丁寧です。自分用にも買い足しました。" },
  { product: "クロワッサンねこ", rating: 3, profile: "20代・女性", title: "色が写真より濃いめでした", body: "悪くはないのですが、実物は写真より色が少し濃いめに感じました。手触りは良く、柔らかいです。色のイメージが違ったので星３つ。" },
  { product: "クロワッサンねこ", rating: 5, profile: "高校生", title: "学校で話題になりました", body: "筆箱に付けてたら、友達に「それ何？」と聞かれまくり。握るとゆっくり形が変わるのが面白いらしく、みんなに触られました。香りもほんのり甘くて好きです。" },
  { product: "クロワッサンねこ", rating: 2, profile: "30代・女性", title: "ほこりがつくのが気になります", body: "柔らかくて可愛いのですが、置いておくとすぐほこりや髪の毛がつきます。粘着クリーナーでも取りきれず、結局ケースに入れて保管するように。気軽に置けないのが残念です。" },
  { product: "クロワッサンねこ", rating: 4, profile: "30代・男性", title: "意外とクセになる", body: "妻のを触らせてもらって、自分用に買いました。硬すぎず柔らかすぎず、仕事の合間にちょうどいい。猫の顔がいい味出してます。" },
  { product: "クロワッサンねこ", rating: 5, profile: "50代・女性", title: "置いておくだけで和みます", body: "パン屋さんの棚にいそうな佇まいで、飾っておくだけでも楽しいです。手に取るとしっとり柔らかくて、何度も触ってしまいます。丁寧に作られていて感心しました。" },
  { product: "クロワッサンねこ", rating: 3, profile: "20代・男性", title: "サイズと香りは好み次第", body: "手のひらサイズと書いてありましたが、実物はもう一回り小さい印象。可愛いのは間違いないです。あと香りが少し甘めなので、好みが分かれるかもしれません。" },

  { product: "パンのスクイーズ", rating: 5, profile: "20代・女性", title: "しっとり感が想像以上", body: "表面がしっとりしていて、ぎゅっと握るとむにゅっとへこみます。一般的なスクイーズより柔らかく、指の跡がつくのが楽しい。食パンもクロワッサンもチーズケーキも、いろいろな形が気になります。" },
  { product: "パンのスクイーズ", rating: 5, profile: "30代・主婦", title: "リアルすぎて笑ってしまう", body: "食パンの形が妙にリアルで、置いてあると本物みたいです。子どもが「パンだ！」と喜んで触ってます。しっとりした触り心地で、パンの質感を表現しているのが面白い。" },
  { product: "パンのスクイーズ", rating: 4, profile: "20代・会社員", title: "デスクが一気に可愛くなりました", body: "食パンとチーズケーキを並べています。仕事の合間にむにむに。ただ、しっとり系なのでほこりがつきやすいのは注意です。そこだけ気をつければ満足です。" },
  { product: "パンのスクイーズ", rating: 5, profile: "30代・女性", title: "形の違いを楽しめます", body: "形が違うだけでこんなに楽しいとは。それぞれ戻り方の感じが少し違う気がして、そこも面白い。並べて眺めても触っても楽しいので、また購入したいです。" },
  { product: "パンのスクイーズ", rating: 3, profile: "20代・女性", title: "ベタつきが少し気になる", body: "しっとりしているのは良いのですが、触ったあとに手に少しベタつきが残る感じがします。ティッシュで軽く拭いてから使っています。可愛さは満点なので星３つ。" },
  { product: "パンのスクイーズ", rating: 5, profile: "高校生", title: "友達とおそろいにしました", body: "形が何種類もあるので、友達と違う形を選んで交換しました。しっとりふわっとした触り心地で、みんな気に入ってます。写真で見るよりずっと可愛い。" },
  { product: "パンのスクイーズ", rating: 2, profile: "30代・女性", title: "ほこりが付きやすいのが気になります", body: "しっとりした質感のせいか、ほこりや糸くずがすぐ付きます。気づいたら全体的に白っぽくなっていて、洗えないのが残念です。可愛いだけに惜しいです。" },
  { product: "パンのスクイーズ", rating: 4, profile: "40代・男性", title: "チーズケーキ型が特に良い", body: "チーズケーキ型を買いました。むにゅっとへこんでゆっくり戻る感じが気に入っています。食パンも気になっているので、追加で買うつもりです。" },
  { product: "パンのスクイーズ", rating: 5, profile: "20代・女性", title: "香りでパン屋さん気分", body: "ほんのり甘い香りがして、パン屋さんにいるような気分になります。強すぎないのでずっと触っていられます。しっとりした手触りも好きです。" },
  { product: "パンのスクイーズ", rating: 3, profile: "20代・女性", title: "質感は好みが分かれそう", body: "しっとり系が好きな人には合うと思いますが、私はもう少しさらっとした手触りのほうが好みでした。見た目の可愛さは文句なしです。" },

  { product: "サーモン寿司ねこ", rating: 5, profile: "20代・女性", title: "バッグに付けたら可愛すぎました", body: "サーモン寿司の上に猫の顔、という組み合わせが最高です。もちもちした触り心地で、ぷにっと弾む戻り方が気に入りました。バッグに付けて、待ち時間に触ってます。" },
  { product: "サーモン寿司ねこ", rating: 5, profile: "高校生", title: "友達に自慢しました", body: "通学バッグに付けてます。サーモンと猫の組み合わせがシュールで可愛い。握るともちっとした弾力があって、何度も触ってしまいます。友達みんなに「欲しい」と言われました。" },
  { product: "サーモン寿司ねこ", rating: 4, profile: "30代・会社員", title: "素材の表記が丁寧", body: "もちもちの手触りで、仕事の合間のひと休みにちょうどいい。素材についての説明もきちんとされていて好印象でした。" },
  { product: "サーモン寿司ねこ", rating: 5, profile: "20代・女性", title: "ねこ好きにはたまりません", body: "猫の顔がついたスクイーズを探していました。サーモン寿司という組み合わせが絶妙で、写真を見て即決。もちっとした弾力も好みです。色違いも出してほしい。" },
  { product: "サーモン寿司ねこ", rating: 3, profile: "20代・女性", title: "もう少し大きいと嬉しい", body: "写真のイメージだと手のひらにしっかり乗る感じでしたが、実物は小ぶりです。重さの表記で予想はしていましたが、もう一回り大きいと嬉しい。手触りはとても良いです。" },
  { product: "サーモン寿司ねこ", rating: 5, profile: "30代・女性", title: "寿司好きの友人へ", body: "寿司好きの友人の誕生日に。開けた瞬間に笑ってくれました。ぷにぷにもちもちで、ずっと触っていられるそうです。自分用にも買いました。" },
  { product: "サーモン寿司ねこ", rating: 2, profile: "30代・女性", title: "チェーンが少し心もとない", body: "本体は可愛いのですが、ボールチェーンが少し頼りなく感じます。強く引っ張ると外れそうで、小さなお子さまのいる家では少し不安かも。バッグに付けるときは気をつけています。" },
  { product: "サーモン寿司ねこ", rating: 4, profile: "20代・男性", title: "ぷにっと感が気持ちいい", body: "もちもちした弾力が気に入って、つい押してしまいます。寿司のネタ部分の色も鮮やかで、思ったよりリアル。小さいけど満足度は高いです。" },
  { product: "サーモン寿司ねこ", rating: 5, profile: "40代・女性", title: "香りがほのかで使いやすい", body: "ほんのり甘い香りがしますが、強すぎなくて気になりません。もちもちの手触りと、ゆっくり弾む戻りが好きです。鞄の中の小さな楽しみになっています。" },
  { product: "サーモン寿司ねこ", rating: 3, profile: "20代・女性", title: "使い込むと色が少し変わるかも", body: "可愛くて毎日触っていたら、少しずつ色が変わってきた気がします。手の油分かな？ 水洗いできないタイプなので、拭いて使っています。デザインは本当に好きです。" },

  { product: "ナイトキャップの星", rating: 5, profile: "20代・女性", title: "星にナイトキャップ、反則です", body: "一目惚れで買いました。ゆっくり形が変わって、ねむそうな戻り方がたまらない。デスクに置いてますが、見るたびに和みます。" },
  { product: "ナイトキャップの星", rating: 5, profile: "30代・主婦", title: "子どもが気に入ってます", body: "小１の子どもに。星の形と青いナイトキャップが気に入ったらしく、いつも触ってます。可愛い置物として楽しんでいます。握るとゆっくり戻ります。" },
  { product: "ナイトキャップの星", rating: 4, profile: "20代・会社員", title: "気分転換にちょうどいい", body: "仕事の合間に手の中でむにむに。柔らかくて、握った跡がゆっくり戻るのがクセになります。少し小さめなので星は４つ。デザインは満点です。" },
  { product: "ナイトキャップの星", rating: 5, profile: "高校生", title: "友達とおそろいに", body: "友達と同じものを２つ買って、片方は友達にあげました。柔らかな手触りが気に入って、いつも触ってます。" },
  { product: "ナイトキャップの星", rating: 3, profile: "30代・女性", title: "思ったより硬めでした", body: "写真からはもう少し柔らかいイメージでしたが、実物はやや硬めで、しっかりした質感。戻りはゆっくりで気に入っています。好みが分かれると思います。" },
  { product: "ナイトキャップの星", rating: 5, profile: "20代・女性", title: "飾っても触っても楽しい", body: "デスクに置く用に買いました。星の形が転がらずに自立するので置きやすい。触ると柔らかくて、少しだけ形を変えて遊べます。置いても触っても楽しめるのが良いです。" },
  { product: "ナイトキャップの星", rating: 2, profile: "20代・女性", title: "色が写真より明るかった", body: "写真ではもう少し落ち着いた黄色に見えたのですが、実物は明るい黄色でした。ナイトキャップの色は写真のままで可愛いのですが、本体の色のイメージが違って残念です。" },
  { product: "ナイトキャップの星", rating: 4, profile: "30代・男性", title: "プレゼントで喜ばれました", body: "同僚への贈り物に。ナイトキャップをかぶった星、という可愛さが好評でした。柔らかな手触りで、机に置いて触っているそうです。" },
  { product: "ナイトキャップの星", rating: 5, profile: "50代・女性", title: "見た目で選んで正解でした", body: "孫に買いましたが、自分も欲しくなって追加購入。星の形にナイトキャップが乗っているだけでこんなに可愛いとは。触るとゆっくり戻るので、何度も触ってしまいます。" },
  { product: "ナイトキャップの星", rating: 3, profile: "20代・女性", title: "戻りがゆっくりすぎる", body: "可愛さは文句なしですが、思ったより戻りがゆっくりで、次の形にするまでに少し待ちます。せっかちな私には少しもどかしい。見た目は本当に好きです。" },
]

export function Testimonials() {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true, align: "start", containScroll: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    if (!carouselApi) return
    const updateSelected = () => setSelectedIndex(carouselApi.selectedScrollSnap())
    updateSelected()
    carouselApi.on("select", updateSelected)
    return () => { carouselApi.off("select", updateSelected) }
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi || isPaused || prefersReducedMotion) return
    const timer = window.setInterval(() => carouselApi.scrollNext(), 4200)
    return () => window.clearInterval(timer)
  }, [carouselApi, isPaused, prefersReducedMotion])

  const reviewCount = reviews.length
  const goToPrevious = () => carouselApi?.scrollPrev()
  const goToNext = () => carouselApi?.scrollNext()

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-sm tracking-[0.2em] text-primary mb-2 block">購入者レビュー</span>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">レビュー</h2>
            <p className="text-xs text-muted-foreground mt-2">1688販売ページに寄せられたレビュー</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground" aria-live="polite">{selectedIndex + 1} / {reviewCount}</span>
            <button type="button" onClick={goToPrevious} className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center" aria-label="前のレビュー">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button type="button" onClick={goToNext} className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center" aria-label="次のレビュー">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="購入者レビュー"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
          }}
          className="overflow-hidden"
        >
          <div className="flex -ml-3">
            {reviews.map((review, index) => (
              <div key={`${review.product}-${index}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${reviews.length}`} className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-1/2 lg:basis-1/3 pl-3">
                <article className="h-full rounded-2xl p-4 md:p-5 bg-background boty-shadow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-primary truncate">{review.product}</span>
                    <span className="text-xs text-foreground shrink-0" aria-label={`${review.rating} / 5`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-2">{review.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4 mb-3">{review.body}</p>
                  <p className="text-xs text-muted-foreground">{review.profile}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
