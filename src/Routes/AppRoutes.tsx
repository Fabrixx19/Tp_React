import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Componentes from "../Pages/Componentes"
import Administracion from "../Pages/Administracion"

export const AppRoutes: React.FC = () => {
  return (

    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/componentes" element={<Componentes/>} />
        <Route path="/administracion" element={<Administracion/>} />
    </Routes>

    )
}

export default AppRoutes
