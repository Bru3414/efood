import { Estabelecimento } from "../../pages/Home"
import Product from "../Product"
import * as S from './styles'

type Props = {
  id: number
  products: Estabelecimento[]
}

const ProductList = ({ id, products }: Props) => (
  <div className="container">
    <S.List>
      {products[id].cardapio.map((product) =>
        <Product
          key={product.id}
          img={product.foto}
          title={product.nome}
          description={product.descricao}
          porcao={product.porcao}
          preco={product.preco}
        />
      )}
    </S.List>
  </div>
)

export default ProductList
