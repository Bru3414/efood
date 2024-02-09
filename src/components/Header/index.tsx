import * as S from './styles'
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.HeaderContainer>
    <S.Content>
      <Link to='/'>
        <img src={logo} alt='EFOOD' />
      </Link>
      <h2>Viva experiências gastronômicas <br />
      no conforto da sua casa</h2>
    </S.Content>
  </S.HeaderContainer>
)

export default Header
