import Button from "../Button"
import SideBar from "../SideBar"
import * as S from './styles'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { formataPreco } from "../Product"
import { remove } from "../../store/reducers/cart"

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const amount = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador += valorAtual.preco
    }, 0)
  }

  return (
    <SideBar>
      <>
        <S.CartList>
          {items.map(item =>
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          )}
        </S.CartList>
        <S.Amount>
          <p>Valor total</p>
          <span>{formataPreco(amount())}</span>
        </S.Amount>
        <Button fullWidth={true}>Continuar com a entrega</Button>
      </>
    </SideBar>
  )
}

export default Cart
