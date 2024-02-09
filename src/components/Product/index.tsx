import CardProduct from "./styles"

type Props = {
  title: string
  img: string
  description: string
  onClick?: () => void
}

const Product = ({ title, img, description, onClick }: Props) => (
  <CardProduct>
    <img src={img} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button type="button" onClick={onClick}>Adicionar ao carrinho</button>
  </CardProduct>
)

export default Product
