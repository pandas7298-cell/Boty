export type ProductDetail = {
  id: string
  name: string
  description: string
  price: number
  image: string
  video?: string
  categories: string[]
  tags: string[]
  tactile: string
  specifications: { label: string; value: string }[]
  caution: string
}
