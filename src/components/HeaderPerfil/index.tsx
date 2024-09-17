import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../Assets/Images/logo.png'
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
        <S.DivTitle>
          <S.Title to='/'>Restaurantes</S.Title>
        </S.DivTitle>
        <Link to='/'>
          <img src={logo} alt="EFOOD" />
        </Link>
        <S.DivCarrinho>
          <S.Carrinho onClick={() => openCart()}>{items.length} produto(s) no carrinho</S.Carrinho>
        </S.DivCarrinho>
      </S.Container>
    </S.Fundo>
  )
}

export default HeaderPerfil
