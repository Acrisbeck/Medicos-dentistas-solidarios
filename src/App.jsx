import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './GlobalStyle.scss'
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'

import Footer from './components/footer/Footer' // Verifique se o caminho está correto

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* ROTAS INTERNAS JÁ ESTÃO CORRETAS */}
        <Route path='/' element={<Home />} />
        <Route path='/voluntario' element={<Voluntario />} />
      </Routes>
      
      {/* 2. INSERIR O FOOTER FORA DO <Routes> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App