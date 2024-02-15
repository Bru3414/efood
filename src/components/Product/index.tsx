import * as S from "./styles"
import close from '../../Assets/Images/close.png'
import { useState } from "react"

type Props = {
  title: string
  img: string
  description: string
  porcao: string
  preco: number
}

const formataPreco = (preco: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ title, img, description, porcao, preco }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <>
      <S.CardProduct>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button type="button" onClick={() => setModalIsVisible(true)}>Mais detalhes</button>
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
            <button>Adicionar ao carrinho - {formataPreco(preco)}</button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)} />
      </S.Modal>
    </>
  )
}

export default Product

