// Este contenedor va manejar las rutas
import React, {Fragment} from 'react'
import {Route} from "react-router-dom"
// Importando componentes Viwe
import HomeView from "./views/HomeView"
import DetalleView from "./views/DetalleView"
import CrearCategoriaView from './views/CrearCategoriaView'


export default function routes() {
  return (
    // cada componente solo retorna uno solo
    // cunado yo quiero un contenedor, no quiero que se dibuje ningun "<div></div>", no se renderiza así mismo
    <Fragment>
      {/* Definir las rutas */}
      <Route path="/" exact component={HomeView} />
      <Route path="/detalle/:id" exact component={DetalleView} />
      <Route path="/crearcategoria" exact component={CrearCategoriaView}/>
    </Fragment>
  )
}
