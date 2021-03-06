// Se podra editarlo
import React, {useState} from 'react'

    export default function InputComponent({listaTareas, actualizarLista}) {
        console.log(listaTareas)
        // const[state, SetState] = useState(estadoo inicial)
        const [tareaNueva, setTareaNueva] = useState("")

        return (
            <div>
                <input 
                type="texto" 
                placeholder="Agregar tarea"
                value={tareaNueva}
                onChange={(e)=>{setTareaNueva(e.target.value)}}
                />
                <button onClick={()=>{actualizarLista([...listaTareas, tareaNueva])}}>
                    Agregar
                </button>
            </div>
        )
    }


