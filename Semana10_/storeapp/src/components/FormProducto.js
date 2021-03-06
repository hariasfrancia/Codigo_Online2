import React, {useState, useEffect} from 'react'

export default function FormProducto() {
  return (
    <div>
      <form>
        <div className="mb-2">
          <label className="form-label">
            nombre Producto
          </label>
          <imput 
            type="text"
            placeholder="Ej.:Chocolates"
            name="nombre"
            className="form-control"
          />
        </div>
      </form>
    </div>
  )
}
