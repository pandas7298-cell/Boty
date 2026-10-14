import type { ProductDetail } from "./product-types"

export const products: Record<string, ProductDetail> = {
  "croissant-cat": {
    id: "croissant-cat",
    name: "クロワッサンねこ",
    description: "クロワッサンとねこを組み合わせたスクイーズ。手のひらで押したときのやわらかさや、形の戻り方をお楽しみください。",
    price: 1200,
    image: "/products/croissant-cat.png",
    video: "/products/croissant-cat.mp4",
    categories: ["食べもの", "どうぶつ"],
    tags: ["フードモチーフ", "ねこモチーフ"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  },
  "egg-rice-ball": {
    id: "egg-rice-ball",
    name: "たまごおにぎり",
    description: "たまごおにぎりをモチーフにしたスクイーズ。手の中でぎゅっと押す感触をお楽しみください。",
    price: 1200,
    image: "/products/egg-rice-ball.png",
    video: "/products/egg-rice-ball.mp4",
    categories: ["食べもの"],
    tags: ["フードモチーフ"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  },
  "salmon-sushi-cat": {
    id: "salmon-sushi-cat",
    name: "サーモン寿司ねこ",
    description: "ねこモチーフを合わせたお寿司のスクイーズキーホルダー。指先で押したときの感触をお楽しみください。",
    price: 1200,
    image: "/products/salmon-sushi-cat.png",
    video: "/products/salmon-sushi-cat.mp4",
    categories: ["食べもの", "どうぶつ", "キーホルダー"],
    tags: ["ねこモチーフ", "キーホルダー"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  },
  "salmon-sushi-keychain": {
    id: "salmon-sushi-keychain",
    name: "サーモン握り寿司",
    description: "お寿司モチーフのスクイーズキーホルダー。手に取って、やわらかな触り心地をお楽しみください。",
    price: 1200,
    image: "/products/salmon-sushi-keychain.png",
    video: "/products/salmon-sushi-keychain.mp4",
    categories: ["食べもの", "キーホルダー"],
    tags: ["キーホルダー"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  },
  "bread-collection": {
    id: "bread-collection",
    name: "パンのスクイーズ",
    description: "パンをモチーフにしたスクイーズ。押したときのやわらかさや、手の中で触れる感触をお楽しみください。",
    price: 1200,
    image: "/products/bread-collection.jpg",
    categories: ["食べもの"],
    tags: ["フードモチーフ"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  },
  "sleepy-star": {
    id: "sleepy-star",
    name: "ナイトキャップの星",
    description: "ナイトキャップをかぶった星モチーフのスクイーズ。手のひらで触れたときのやわらかさをお楽しみください。",
    price: 1200,
    image: "/products/sleepy-star.png",
    categories: ["星"],
    tags: ["星モチーフ"],
    tactile: "[要記入]",
    specifications: [
      { label: "サイズ", value: "10×15×5 cm" },
      { label: "重量", value: "100 g" },
      { label: "素材", value: "TPR" },
      { label: "対象年齢", value: "6歳以上" },
      { label: "原産国", value: "中国大陸" },
    ],
    caution: "小さなお子さまの手の届かない場所に保管してください。口に入れないでください。"
  }
}
