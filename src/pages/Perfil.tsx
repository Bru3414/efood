import HeaderPerfil from "../components/HeaderPerfil";
import HeroPerfil from "../components/HeroPerfil";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../services/api";

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantsQuery()

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
      <ProductList cardapio={restaurantIndex.cardapio} id={id as unknown as number - 1} products={restaurant} />
    </>
  )
}

export default Perfil
