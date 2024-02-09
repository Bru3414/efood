import ProductModel from "../../Models/Product"
import Product from "../Product"
import * as S from './styles'

type Props = {
  products: ProductModel[]
}

const ProductList = ({ products }: Props) => (
  <S.ProductContainer className="container">
    <S.List>
      {products.map(product =>
        <Product
          key={product.id}
          img={product.img}
          title={product.title}
          description={product.description}
        />
      )}
    </S.List>
  </S.ProductContainer>
)

export default ProductList
