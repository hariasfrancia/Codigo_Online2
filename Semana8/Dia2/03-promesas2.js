// creo funcion que use settimeout
// La idea es simular 02 tareas asincronas:
// 01-encontrar un cliente
// 02-buscar los pedidos, esta ya para MOCKAP

let obtenerCliente = () =>{
    return new Promise((resolve, reject) => {
        //mi funcion asincrona
        setTimeout(() => {
            resolve("Se encontro al cliente")
            // reject("No se encontro el cliente")
        },4000);
    })
}

let obtenerPedidos = () => {
    return new Promise((resolve, reject) => {
        let asistente = new XMLHttpRequest();

        asistente.addEventListener("readystatechange", () => {
            // Pregunto el codigo de respuesta de mi peticion, 200 es que fue bien
            if(asistente.readyState === 4){
                // Preguntar el status de la peticion, preguntando el codigo de respuesta de mi peticion
                if(asistente.status === 200){
                    resolve(JSON.parse(asistente.responseText))
                }else{
                    reject("No hay!!!!!!")
                }
            }
        })

        asistente.open("GET", "https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos");
        asistente.send(null)
    })
}

// Vamos a consumir las promesas

obtenerCliente()
.then((rpta) => {
    console.log(rpta)
    // Dentro de este "THEN", retorno la funcion obtener perdidos
    return obtenerPedidos();//Esto me retorna otra promesa
})

.then((rptaPedidos) => {
    console.log(rptaPedidos)
})

// el "CATCH" capturara el error de cualquiera de las promesas que esten antes
.catch((error) => {
    console.log(error)
})
