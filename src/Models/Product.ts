class ProductModel {
  id: number
  title: string
  img: string
  description: string

  constructor(id: number, title: string, img: string, description: string) {
    this.id = id,
    this.title = title,
    this.img = img,
    this.description = description
  }
}

export default ProductModel
