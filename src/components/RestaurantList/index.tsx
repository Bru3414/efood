import * as S from './styles'

import Restaurants from "../../Models/Restaurants"
import Restaurant from "../Restaurant"

type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.Container className='container'>
    <S.List>
      {restaurants.map((restaurants) =>
        <Restaurant
          key={restaurants.id}
          title={restaurants.title}
          image={restaurants.image}
          description={restaurants.description}
          infos={restaurants.infos}
          nota={restaurants.nota}
        />)}
    </S.List>
  </S.Container>
)

export default RestaurantList
