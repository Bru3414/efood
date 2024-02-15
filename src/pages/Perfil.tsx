import HeaderPerfil from "../components/HeaderPerfil";
import HeroPerfil from "../components/HeroPerfil";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { Estabelecimento } from "./Home";
import { useParams } from "react-router-dom";

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Estabelecimento[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setRestaurant(res))
  }, [])


  if (!restaurant) {
    return (
      <h3>Carregando...</h3>
      )
    }

  const restaurantIndex = restaurant[id as unknown as number - 1]

  return (
    <>
      <HeaderPerfil />
      <HeroPerfil capa={restaurantIndex.capa} name={restaurantIndex.titulo} tipo={restaurantIndex.tipo} />
      <ProductList id={id as unknown as number - 1} products={restaurant} />
    </>
  )
}

export default Perfil
