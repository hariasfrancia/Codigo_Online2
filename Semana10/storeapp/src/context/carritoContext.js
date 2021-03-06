import Ract, {useState, createContext} from 'react'


export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const anadirProducto = (producto) => {
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i]._id === producto._id){//Si detecto que el producto ya estane el carrito
                // como detecto que el producto ya esta ne le carrito solamente aumento su cantidad
                let nuevoProducto = {...carrito[i], cantidad:carrito[i].cantidad +=  producto.cantidad} 
                let carritoTmp = [...carrito]
                carritoTmp.splice(i, 1)//Estoy removiendo un producto en la posicion "i"
                carritoTmp.push(nuevoProducto)//añadp el nuevo porducto con la cantidad actualizada
                setCarrito([...carritoTmp])//
                return
            }
        }
        setCarrito([...carrito, producto])
    }

    
    const removerProducto = (indice) => {
        let carritoTmp = [...carrito]
        carritoTmp.splice(indice, 1)//como aqui ya removi el producto a retirar
        setCarrito(carritoTmp) //actualizo elestado con el carrito removido
    }

    return(
    
        <CarritoContext.Provider value={{carrito, anadirProducto, removerProducto}}>
            {props.children}
        </CarritoContext.Provider>
    )
}


export default CarritoContextProvider