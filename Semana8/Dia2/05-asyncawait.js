// traerDatos va hacer mi funcion asincrono
// ASYNC
// Para convertirla a sincrona, le agrego "async" antes del parentesis ()=>
let traerDatos = async () => {
    //el return va a equivaler a un resolve
    // return "mi respuesta asíncrona!"
    // el "throw" equivale a un reject
    // throw "Error!"
    if(false){
        return "Todo bien"
    }else{
        throw "Algo salio mal"
    }
}

// traerDatos()
// .then(respuesta => {//return
//     console.log(respuesta)
// })

// .catch(error => {//throw
//     console.log(error)
// })

// AWAIT: con await yo consumo/utilizo promesas sin necesidad de then y catch
// que necesit?, ncesito una funcion y dentro  de esta llamar a mi funcion async

// A la funcion que consume, tambien le tengo que poner async antes
let usarDatos = async () => {
    try{//intenta esto y si ....try  = then
        let miRespuesta = await traerDatos()// aca espera
        console.log(miRespuesta)// y recien cuando se resuelve la promesa
    }catch(error){//... no funciona, has esto .... catch = catch
        console.log(error)
    }
    // await va antes de traerDatos, es una promesa
    
}
usarDatos()