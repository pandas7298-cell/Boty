import type { Locale } from "@/lib/i18n"

export type ProductCopy = {
  name: string
  description: string
  categories: string[]
  tags: string[]
  specifications: { label: string; value: string }[]
  caution: string
}

export type StoreProduct = {
  id: string
  price: number
  image: string
  video?: string
  tactile: string
  copy: Record<Locale, ProductCopy>
}

const sharedSpecifications = {
  en: [
    { label: "Size", value: "10×15×5 cm" },
    { label: "Weight", value: "100 g" },
    { label: "Material", value: "TPR" },
    { label: "Recommended age", value: "6+" },
    { label: "Country of origin", value: "Mainland China" },
  ],
  zh: [
    { label: "尺寸", value: "10×15×5 cm" },
    { label: "重量", value: "100 g" },
    { label: "材质", value: "TPR" },
    { label: "适用年龄", value: "6岁以上" },
    { label: "原产地", value: "中国大陆" },
  ],
  ja: [
    { label: "サイズ", value: "10×15×5 cm" },
    { label: "重量", value: "100 g" },
    { label: "素材", value: "TPR" },
    { label: "対象年齢", value: "6歳以上" },
    { label: "原産国", value: "中国大陸" },
  ],
}

const sharedCaution = {
  en: "Keep out of reach of small children. Do not put in your mouth.",
  zh: "请放在幼儿无法触及的地方。请勿放入口中。",
  ja: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。",
}

export const products: StoreProduct[] = [
  {
    id: "croissant-cat",
    price: 1200,
    image: "/products/croissant-cat.png",
    video: "/products/croissant-cat.mp4",
    tactile: "[要記入]",
    copy: {
      en: { name: "Croissant Cat", description: "A croissant-shaped cat squeeze. Enjoy its soft feel and the way it slowly returns to shape.", categories: ["Food", "Animals"], tags: ["Food design", "Cat design"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "牛角包猫咪", description: "牛角包造型的猫咪软捏玩具。感受掌心的柔软触感，以及松手后慢慢恢复的过程。", categories: ["食物", "动物"], tags: ["食物造型", "猫咪造型"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "クロワッサンねこ", description: "クロワッサンとねこを組み合わせたスクイーズ。手のひらで押したときのやわらかさや、形の戻り方をお楽しみください。", categories: ["食べもの", "どうぶつ"], tags: ["フードモチーフ", "ねこモチーフ"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
  {
    id: "egg-rice-ball",
    price: 1200,
    image: "/products/egg-rice-ball.png",
    video: "/products/egg-rice-ball.mp4",
    tactile: "[要記入]",
    copy: {
      en: { name: "Tamago Onigiri", description: "An onigiri-inspired squeeze with an egg topping. Enjoy its satisfying feel in your hand.", categories: ["Food"], tags: ["Food design"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "鸡蛋饭团", description: "鸡蛋饭团造型的软捏玩具，握在手中感受轻轻捏压的乐趣。", categories: ["食物"], tags: ["食物造型"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "たまごおにぎり", description: "たまごおにぎりをモチーフにしたスクイーズ。手の中でぎゅっと押す感触をお楽しみください。", categories: ["食べもの"], tags: ["フードモチーフ"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
  {
    id: "salmon-sushi-cat",
    price: 1200,
    image: "/products/salmon-sushi-cat.png",
    video: "/products/salmon-sushi-cat.mp4",
    tactile: "[要記入]",
    copy: {
      en: { name: "Salmon Sushi Cat", description: "A sushi squeeze keychain with a cat design. Enjoy its soft feel at your fingertips.", categories: ["Food", "Animals", "Keychains"], tags: ["Cat design", "Keychain"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "三文鱼寿司猫", description: "猫咪造型的寿司软捏挂件。用指尖感受柔软触感。", categories: ["食物", "动物", "挂件"], tags: ["猫咪造型", "挂件"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "サーモン寿司ねこ", description: "ねこモチーフを合わせたお寿司のスクイーズキーホルダー。指先で押したときの感触をお楽しみください。", categories: ["食べもの", "どうぶつ", "キーホルダー"], tags: ["ねこモチーフ", "キーホルダー"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
  {
    id: "salmon-sushi-keychain",
    price: 1200,
    image: "/products/salmon-sushi-keychain.png",
    video: "/products/salmon-sushi-keychain.mp4",
    tactile: "[要記入]",
    copy: {
      en: { name: "Salmon Nigiri", description: "A sushi-inspired squeeze keychain. Enjoy its soft feel whenever you pick it up.", categories: ["Food", "Keychains"], tags: ["Keychain"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "三文鱼握寿司", description: "寿司造型的软捏挂件，拿在手中感受柔软触感。", categories: ["食物", "挂件"], tags: ["挂件"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "サーモン握り寿司", description: "お寿司モチーフのスクイーズキーホルダー。手に取って、やわらかな触り心地をお楽しみください。", categories: ["食べもの", "キーホルダー"], tags: ["キーホルダー"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
  {
    id: "bread-collection",
    price: 1200,
    image: "/products/bread-collection.jpg",
    tactile: "[要記入]",
    copy: {
      en: { name: "Bread Squeeze", description: "A collection of bread-inspired squeezes. Enjoy the soft feel and how they respond in your hand.", categories: ["Food"], tags: ["Food design"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "面包软捏玩具", description: "多种面包造型的软捏玩具，感受掌心的柔软触感与捏压体验。", categories: ["食物"], tags: ["食物造型"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "パンのスクイーズ", description: "パンをモチーフにしたスクイーズ。押したときのやわらかさや、手の中で触れる感触をお楽しみください。", categories: ["食べもの"], tags: ["フードモチーフ"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
  {
    id: "sleepy-star",
    price: 1200,
    image: "/products/sleepy-star.png",
    tactile: "[要記入]",
    copy: {
      en: { name: "Sleepy Star", description: "A star wearing a nightcap. Enjoy its soft feel in the palm of your hand.", categories: ["Stars"], tags: ["Star design"], specifications: sharedSpecifications.en, caution: sharedCaution.en },
      zh: { name: "戴睡帽的星星", description: "戴着睡帽的星星造型软捏玩具，在掌心感受柔软触感。", categories: ["星星"], tags: ["星星造型"], specifications: sharedSpecifications.zh, caution: sharedCaution.zh },
      ja: { name: "ナイトキャップの星", description: "ナイトキャップをかぶった星モチーフのスクイーズ。手のひらで触れたときのやわらかさをお楽しみください。", categories: ["星"], tags: ["星モチーフ"], specifications: sharedSpecifications.ja, caution: sharedCaution.ja },
    },
  },
]

export function getProduct(id: string) {
  return products.find(product => product.id === id)
}

export function getProductCopy(product: StoreProduct, locale: Locale) {
  return product.copy[locale]
}
