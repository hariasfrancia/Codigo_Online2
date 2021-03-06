// 
// function Saludar(){
//     return `Hola soy ${nombre}`
// }

// let Saludar = (nombre) => {
//     return `Hola soy ${nombre}, pero en una funcion flecha`
// }

// Si recibe 01 solo argumento le puedo quitar los parentesis
// let Saludar = nombre => {
//     return `Hola soy ${nombre}, pero en una funcion flecha`
// }

// Si solamente vamos a retornar algo de forma inmediata, puedo obviar las llaves y ponerlas en una sola linea, obviando el return
let Saludar = (nombre) => `Hola soy ${nombre}, pero mas simple`


console.log(Saludar("Jorge"))