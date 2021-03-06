
import React,{useState} from 'react'
import ListaComponent from "./components/ListaComponent"
import InputComponent from "./components/InputComponent"


export default function App(){
  let [lista, setLista] = useState(["Estudiar","Ordenar","Jugar con Mascotas"])

  // recibe un arreglo 
  let actualizarLista = (arrTareas)=>{
    setLista(arrTareas)
  }
  return(
    <div>
      <h1>Tienes {lista.length} tareas</h1>
      <br/>
      {/* Levantamiento de estado - ifting state */}
      <ListaComponent listaTareas={lista}/>
      <hr/>
      <InputComponent listaTareas={lista} actualizarLista={actualizarLista}/>
    </div>
  )

}
