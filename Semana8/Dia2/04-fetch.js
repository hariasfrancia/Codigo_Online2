
//"fetch = atrapar" 
// hace peticiones de manera sencilla pero haciendo promesas
// Haciendo una peticion GET con fetch
fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos")
.then(respuesta => {
    // console.log(respuesta)
    if(respuesta.status === 200){
        return respuesta.json()
    }else{
        console.log("Algo salio mal")
        return
    }
    return respuesta.json()
})

.then(datos => {
    console.log(datos)
})
.catch((error) => {
    // console.log(error)
    // console.log("Algo salio mal")
    alert("Algo salio mal")
})

// haciendo una peticion de tipo POST
// 1. Voy a crear un objeto con la estructura que me pide mi API
let objPedido = {
    nombrePedido: "Visión",
    dni_pedido: 43257984,
    platillos_pedido:["Estofado con chicha","Chicha de jora"],
    // recordemos que mockapi en las fechas, me lo guarda en segundos
    // y para eso crea una nueva fecha, gettime lo ontiene en milisegundos
    // 
    fecha_pedido: new Date().getTime() / 1000,
    total_pedido:40.00
}


// 2. En el caso de FETCH, cuando hago un POST/PUT tengo que mandar los "headers", par indicar que tipo de info estoy enviando
let cabecera = {
    // Tipo de metodo HTTP
    method:"POST",
    headers:{
        'Content-type': "application/json"
    },//headers, que contenido y mas informacion de mi peticion
    body: JSON.stringify(objPedido)//contenido y lo tengo que convertir a texto
}

// 3. Ya teniendo los datos amandar y las cabeceras don la info, nos tica hacer la peticion
// 3.1 cuando hago un POST/PUT, tengo que pasasrlo como 2do parametro la cabecera
fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos", cabecera)


.then((respuesta) => {
    return respuesta.json() //obtengo la respuesta, aqui esta el status
})

.then(datos => {
    console.log(datos)//COn json() ya me da los datos de la peticion
})

.catch(error => {
    console.log(error)// por si hay algun error
})