let numeros = [20,10,15,60,85,11,16]

// EJEMPLO==================================
// let nombres = ["Piero","Ana","Marco"]
// nombres.forEach((nom)=>{
//     console.log(nom)
// })
// =========================================

// .foreach(c_item, indice_c_item, arreglo_completo)
numeros.forEach((num, indice, arreglo) => {//inidice me da la posicion
    // console.log(num)
    // console.log(indice)// imprimo los indice de cada item 
    // console.log(arreglo)
})

// MAP - transformacion

let otrosNumeros = [10,20,45,60]

// en la funcion que recibe "MAP" ya tengo que retornar cada item transformado
let numerosTransformados = otrosNumeros.map((item)=>{
    return item / 2
})
console.log(numerosTransformados)


// Arreglo de ciudades
let lugares = ["Arequeipa","Lima","Cañete","Huancayo","Piura"]

let lugaresMayus = lugares.map((ciudad)=>{
    let lugaresMayus = ciudad.toUpperCase()
    return lugaresMayus
})
console.log(lugaresMayus)

// FILTER

let notas = [20,19,18,14,12,13,11,06,15]

let aprobados = notas.filter((item)=>{
    // if(item > 13){
    //     return item
    // }
    return item > 13
})
console.log(aprobados)