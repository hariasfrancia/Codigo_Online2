// objetivo: HAcer las peticiones GET, POST, PUT, DELETE
// Croe una constante con url de mokapi
const URL = 'https://600f6a6f6c21e1001704eaf3.mockapi.io/'

class Network {
    obtenerProductos(){//GET
        return new Promise((resolve, reject)=>{
            fetch(`${URL}productos`)   //hace una peticion
            .then(respuesta => {
                return respuesta.json() //El "json" con los datos de la peticion
            })
            .then(misProductos =>{
                resolve(misProductos)
            })
            .catch(error => reject(error))
        })
    }
    
    crearProducto(objProducto){//POST, va a crear necesito recibir que va a crear
        return new Promise((resolve, reject) => {
            let configuracion = {
                method:"POST",
                body:JSON.stringify(objProducto), //lo tengo que convertir a JSON (Texto)
                headers:{"Content-type":"application/json"}
            }
            fetch(`${URL}productos`, configuracion)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(productoCreado => {
                resolve(productoCreado)
            })
            .catch(error => reject(error))
        })
    }
}


