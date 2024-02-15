import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil/:id' element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
