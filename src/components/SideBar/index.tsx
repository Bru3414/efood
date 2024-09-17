import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'
import * as S from './styles'
import { RootReducer } from '../../store'

type Props = {
  children: JSX.Element
}

const SideBar = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''} >
      <S.Overlay onClick={closeCart} />
      <S.SideBarContainer>
        {children}
      </S.SideBarContainer>
    </S.Container>
  )
}

export default SideBar
