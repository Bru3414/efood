import { useEffect, useState } from 'react';
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

export type Estabelecimento = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}


const Home = () => {
  const [list, setList] = useState<Estabelecimento[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setList(res))
  }, [])

  if (!list) {
    return (
      <h3>Carregando...</h3>
    )
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={list} />
    </>
  )
}

export default Home
