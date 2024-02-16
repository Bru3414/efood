import * as S from "./styles"
import close from '../../Assets/Images/close.png'
import { useState } from "react"
import Button from "../Button"
import { useDispatch } from "react-redux"
import { add, open, idItemMenu } from "../../store/reducers/cart"
import { Cardapio } from "../../pages/Home"

type Props = {
  cardapio: Cardapio
  title: string
  img: string
  description: string
  porcao: string
  preco: number
  id: number
}

export const formataPreco = (preco: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ cardapio, title, img, description, porcao, preco, id }: Props) => {
  const dispatch = useDispatch()
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addItem = (item: Cardapio, idItem: number) => {
    dispatch(idItemMenu(idItem))
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
      <S.CardProduct>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={() => setModalIsVisible(true)}>Mais detalhes</Button>
      </S.CardProduct>
      <S.Modal className={modalIsVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img src={close} alt="Fechar" className="close" onClick={() => setModalIsVisible(false)} />
          <img src={img} alt={title} className="foto" />
          <div>
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <span>Serve: {porcao}</span>
            <Button onClick={() => addItem(cardapio, id)}>{`Adicionar ao carrinho - ${formataPreco(preco)}`}</Button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)} />
      </S.Modal>
    </>
  )
}

export default Product

