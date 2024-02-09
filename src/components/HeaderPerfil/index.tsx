import * as S from './styles'

import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <S.Fundo>
    <S.Container>
      <S.Title>Restaurantes</S.Title>
      <Link to='/'>
        <img src={logo} alt="EFOOD" />
      </Link>
      <S.Carrinho>0 produto(s) no carrinho</S.Carrinho>
    </S.Container>
  </S.Fundo>
)

export default HeaderPerfil
