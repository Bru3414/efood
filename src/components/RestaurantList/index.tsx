import * as S from './styles'

import Restaurant from "../Restaurant"
import { Estabelecimento } from '../../pages/Home'

type Props = {
  restaurants: Estabelecimento[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.Container className='container'>
    <S.List>
      {restaurants.map((restaurants) =>
        <Restaurant
          key={restaurants.id}
          id={restaurants.id}
          title={restaurants.titulo}
          image={restaurants.capa}
          description={restaurants.descricao}
          info={restaurants.tipo}
          nota={restaurants.avaliacao}
          destacado={restaurants.destacado}
        />)}
    </S.List>
  </S.Container>
)

export default RestaurantList
