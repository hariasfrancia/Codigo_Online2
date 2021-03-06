import React, {useState} from 'react'
import {crearCategoria} from "../services/categoriaService"


export default function FormCategoria() {

  const [nombreCategoria, setNombreCategoria] = useState("")
  // Esta funcion va a recibir el evento
  const manejarSubmit = async(ev) => {
    // Prevenimos que se ejecute elevento predeterminado de Submit
    ev.preventDefault()
    // creamos el objeto tal como me lo pde el backend
    let objCategoria = {
      nombre: nombreCategoria
    }
    // hago la peticion
    let response = await crearCategoria(objCategoria)
    console.log(response)
  }

  return (
    <div>
      <form onSubmit={(ev)=> manejarSubmit(ev)}>
        <div className="mb-2">
          <label className="form-label">Nombre de la Categoria</label>
          <input 
            className="form-control" 
            type="text"
            value={nombreCategoria}
            onChange={(e) => {setNombreCategoria(e.target.value)}}
          />
          <small className="form-text">
            Ej.: Ofertas ó Regalos
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Categoría
        </button>
      </form>
    </div>
  )
}
