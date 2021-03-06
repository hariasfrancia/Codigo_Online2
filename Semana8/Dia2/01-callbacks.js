// Simulo creando mi base de datos
let db_alumnos = ["Ricardo","Sandra","Juan","David","Paul"]

// Esta funcion va a recibir 2 cosas,
// 1.el nombre a buscar
// 2.una funcion ... un callback

let buscarAlumnos = (nombre, functioncallback) => {
    // vamos a poner la forma de buscar a mi alumno
    // Para simular que esa busqueda va a demorar utilizaremos un setTimeout
    
    setTimeout(()=>{
        for(let i = 0; i < db_alumnos.length; i++){
            // El nombre que estoy revisando es el que he recibido?
            if(nombre === db_alumnos[i]){
                // encontrado
                functioncallback(i)
                return//cuando ejecuto return, se corta la ejecucion de mi funcion buscarAlumnos
            }
        }
        // Si este for termina y nunca encontramos nada, igual hay que darle una respuesta.
        // y dare -1 en la funcion callback para indicar que no encontro nada
        functioncallback(-1)
    }, 3000)
}

// antes de continuar buscaralumno vou a poner
// La idea de utilizar un callback es darle una tarea a ejecutar despues que termine de realzar una tarea que demore 

let funcionAPasar = (posicion) => {
    if(posicion != -1){
        console.log(`El alumno existe! y esta en la posicion ${posicion}`)
    }else{
        console.log("No existe :(")
    }
}
buscarAlumnos("David", funcionAPasar)

// buscarAlumnos("David", (posicion) => {
//     if(posicion != -1){
//         console.log(`El alumno existe! y esta en la posicion ${posicion}`)
//     }else{
//         console.log("No existe :(")
//     }
// })










