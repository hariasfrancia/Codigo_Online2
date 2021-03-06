import {useState, createContext} from 'react'
import {useHistory} from 'react-router-dom'

export const AuthFireContext = createContext() // crea un contxto con este nombre


const AuthContextProvider = (props) => {
    const [userId, setUserId] = useState(null)//estado inicial, no tiene nada

    const setAuthUserId = (id) => {//funcion que se encarga de actualizar el estado global
        setUserId(id)//actualizo el estado global
        // return useHistory.push('/')
    }

    return(
                                        //Estado, funcion que actualiza
        <AuthFireContext.Provider value={{userId, setAuthUserId}}>
            {props.children}
            {/* Props Children es para ue este provider pasen los props a sus componentes hijos */}
        </AuthFireContext.Provider>
    )
}

export default AuthContextProvider




