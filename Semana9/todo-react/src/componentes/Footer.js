import {useState} from "react"

//para que este archivo sea usado por otro dentro de l javascript
export default function Footer({miMensaje, miNumero, miFuncion}) {
// export default function Footer(props) {
    // console.log(props)
    return(
        <div>
            <hr/>
            <h4>Footer</h4>
            <h5>{miMensaje}</h5>
            <p>{miNumero}</p>
            <button onClick={()=>{miFuncion()}}>Mostrar Info</button>
        </div>
    )
}