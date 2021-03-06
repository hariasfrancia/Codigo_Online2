// 
let objVehiculo = {
    marca:"Nissan",
    modelo:"Datsun",
    anio:1982,
    colores:["Gris","Azúl"]
}
// Mucho repite el objeto vehiculo
// console.log(objVehiculo.modelo)
// console.log(objVehiculo.marca)
// console.log(objVehiculo.anio)
// console.log(objVehiculo.colores)

//*************/ DESESTRUCTURACION...................

// let{propiedades de mi objet} = el objeto
let {marca, modelo, anio, colores} = objVehiculo
// console.log(modelo)
// console.log(marca)
// console.log(anio)
// console.log(colores)

// *************SPREAD OPERATOR*********************
// va a crear una copia de las propiedades y valores del objeto al que le aplique el "spred operator"
let copiaVehiculo = {...objVehiculo, placa:"JS-2341"}

// console.log(copiaVehiculo)

let objPersona = {
    nombre:"Juan",
    edad:"18",
    genero:"masculino"
}

let objTrabajador = {
    cargo:"Ninja",
    empresa:"ACME",
    genero:"femenino"
}

let empleado = {...objPersona, ...objTrabajador}
console.log(empleado)











