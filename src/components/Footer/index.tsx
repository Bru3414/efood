import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../Assets/Images/logo.png'
import twitter from '../../Assets/Images/twitter.png'
import instagram from '../../Assets/Images/instagram.png'
import facebook from '../../Assets/Images/facebook.png'

const Footer = () => (
  <S.FooterContainer>
    <div className='container'>
      <Link to='/'>
        <S.Logo src={logo} alt="EFOOD" />
      </Link>
      <S.Lista>
        <S.Item><a href="#"><img src={instagram} alt="instagram" /></a></S.Item>
        <S.Item><a href="#"><img src={facebook} alt="facebook" /></a></S.Item>
        <S.Item><a href="#"><img src={twitter} alt="twitter" /></a></S.Item>
      </S.Lista>
      <S.Text>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</S.Text>
    </div>
  </S.FooterContainer>
)

export default Footer
