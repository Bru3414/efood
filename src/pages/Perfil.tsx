import HeaderPerfil from "../components/HeaderPerfil";
import HeroPerfil from "../components/HeroPerfil";
import pizza from "../Assets/Images/pizza.png";
import ProductModel from "../Models/Product";
import ProductList from "../components/ProductList";

const Products: ProductModel[] = [
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  },
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  },
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  },
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  },
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  },
  {
    id: 1,
    title: "Pizza Marguerita",
    img: pizza,
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <HeroPerfil />
    <ProductList products={Products} />
  </>
)

export default Perfil
