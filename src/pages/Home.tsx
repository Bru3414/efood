import Restaurants from "../Models/Restaurants";
import restaurant_1 from '../Assets/Images/restaurant_1.png'
import restaurant_2 from '../Assets/Images/restaurant_2.png'
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

const list: Restaurants[] = [
  {
    id: 1,
    image: restaurant_1,
    title: 'Hioki Sushi',
    nota: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: restaurant_2,
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 3,
    image: restaurant_2,
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 4,
    image: restaurant_2,
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 5,
    image: restaurant_2,
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 6,
    image: restaurant_2,
    title: 'La Dolce Vita Trattoria',
    nota: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={list} />
  </>
)

export default Home
