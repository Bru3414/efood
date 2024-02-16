import { Cardapio, Estabelecimento } from "../../pages/Home"
import Product from "../Product"
import * as S from './styles'

type Props = {
  id: number
  products: Estabelecimento[]
  cardapio: Cardapio
}

const ProductList = ({ id, products, cardapio }: Props) => (
  <div className="container">
    <S.List>
      {products[id].cardapio.map((product) =>
        <Product
          key={product.id}
          id={product.id}
          cardapio={cardapio}
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
