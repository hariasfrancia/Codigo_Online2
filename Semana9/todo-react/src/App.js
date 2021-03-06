
// Hooks
// useState es el que se va encargar de manejar el estado en un componente funcional
import {useState} from 'react'
import Footer from './componentes/Footer'

export default function App() {
  // let[estado, funcionActualizaEstado] = useState(EstadoInicial)
  let [tarea, setTarea] = useState("Escribir")
  // let [descripcion, setDescripcion] = useState("Hola")
  // Puedo tener mas estados
  let [lista, setLista] = useState([])


  let titulo = "To-do App"

  let mensaje = "Creado por Héctor Arias Francia"

  let agregarTarea = () =>{
    // Esta funcion se va encargar de agregar tarea al estado de mi lista
    // ...Lista -> desestructurando
    // spread-operator - esparcir
    setLista([...lista, tarea])
  }

  // creo funcion nostrarDerechos
  let mostrarDerechos = () =>{
    alert("Derechos Reservados Tecsup 2021")
  }

  // Componentes controlados
  // Todo input debe estar amarrado a un estado
  // <button onClick={()=>{setTarea("Comer")}}>Agregar</button>, es de la linea 28
  return(
    <div>
      <h4>{titulo}</h4>
      <input 
      type="texto" 
      placeholder="Agregar tarea" 
      value={tarea}
      // onChange={(evento)=>{console.log(evento.target.value)}}
      onChange={(evento)=>{setTarea(evento.target.value)}}
      />
      <button onClick={()=>{agregarTarea()}}>Agregar</button>
      <hr/>
      {tarea}
      <hr/>
      {/* Iteradores para renderizar */}
      {/* {lista.map((item)=>{
        return (<p>{item}</p>)
      })} */}

      {lista.map((item)=> (
        <p>{item}</p>
      ))}
      {/* Footer, lo importamos  y ñe doy una props*/}
      <Footer 
        miMensaje={mensaje} 
        miNumero="43310318" 
        miFuncion={mostrarDerechos}
        />
    </div>
  )
}
















