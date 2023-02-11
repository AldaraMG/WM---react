import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../src/Componentes/Navigation'
import LogoTitulo from '../src/Componentes/LogoTitulo'
import Carrusel from '../src/Componentes/Carrusel'
import Vision from '../src/Componentes/Vision'
import Equipo from '../src/Componentes/Equipo'
import Footer from '../src/Componentes/Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <LogoTitulo/>
    <Carrusel/>
    <Vision/>
    <Equipo/>
    <Footer/>  
    
  </React.StrictMode>,
)
