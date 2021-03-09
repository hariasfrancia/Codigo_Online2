// ************************************************************************************
// Una interfaz es como un contrato, vas a tener objetos que van a tener una estructura
// ************************************************************************************

interface iGato {
    nombre:string
    edad:number
    raza:string
}
// **********************************************************
// Necesariamente va a tener que tener todas las propiedades
// **********************************************************

let gatita:iGato = {
    nombre:"Gatita",
    raza:"Siames",
    edad:4
}

