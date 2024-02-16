import * as S from './styles'

import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Fundo>
      <S.Container>
        <S.Title>Restaurantes</S.Title>
        <Link to='/'>
          <img src={logo} alt="EFOOD" />
        </Link>
        <S.Carrinho onClick={() => openCart()}>{items.length} produto(s) no carrinho</S.Carrinho>
      </S.Container>
    </S.Fundo>
  )
}

export default HeaderPerfil
