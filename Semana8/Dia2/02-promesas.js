let miHorno = () => {
    // PAra manejar la tarea asincrona de hornear, vamos a utilizar "PROMESAS"
    // La "PROMESA" tendra dentro una funcion, esa fucnion recibira un resolve (si va bien) o reject (si va mal) 
    return new Promise((resolve, reject) => {
        // Aquí voy a poner la tarea que es asincrona la que demora
        // Para simular que la tarea demora, de forma artificial estoy poniendo un setTimeOut
        
        setTimeout(() => {
            // aca la idea es que haya una condicional una evaluacion
            // si la evaliacion fue bien, damos resolve
            // si fue mal, damos reject
            // resolve("La torata esta ready")//fue bien
            reject("La torta se quemo, que sad :(")
        }, 5000)
    })
}

// ejecuto la funcion y le añado el .then() para saber si fue bien
// dentro de "then" tendre una funcion donde podre recibir el resultado

// miHorno().then((resultado) => {
//     console.log(resultado)
// })

miHorno()
.then((resultado) => {
    console.log(resultado)
})
.catch((error) =>{
    console.log(error)
})