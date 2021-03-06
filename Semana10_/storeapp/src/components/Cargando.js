import React from 'react'

export default function Cargando() {
  return (
    <div
    // Con estos estilos hago que el <div> ocupe todo el ancho y alto, si o si y que este por encima
        style={{
        position:'fixed',
          top:'0',
          left:'0',
          width:'100vw',
          height:'100vh',
          backgroeundColor:'white',
          zindex:'999'
        }}
    >
      
      <i 
        className="fas fa-spinner fa-spin fa-6x"
        style={{
          color:'#DD5E89',
          position:'relative',
          top:'calc(50% - 50px)',
          left:'calc(50% - 50px)'
        }}
      >
      </i>
    </div>
  )
}
