// "var", es muy insegura tanto en ambito como en su uso

var manzana = "apple"
var manzana = "Manzana acamelada"

console.log(manzana)

// -------------------------------------------------------------
// La variable "let", es similar a "var", pero mucho mas seguro

let potato = "papa amarilla"
// let potato = "pure de papas"
console.log(potato)
// ---------------------------------------------------------------
// for con var
for(var i = 0; i < 3; i++){
    console.log(i)
// Puedo llamar a una variable declarada con "var" afuera de su bloque de codigo, lo llamo con console.log
}
console.log("contador con i", i)
// ---------------------------------------------------------------
// for con let
for(let j = 0; j < 3; j++){
    console.log(j)
}
// console.log("contador con j", j),  no se puede llamar a un #let
//  fuera de un bloque de codigo

// ------------------------------------------------------------------
// const, no cambia su valor nunca
const pi = 3.1415
// pi=42
console.log(pi)

const nombre = "wanda";
console.log(nombre)

// cambiando valor de "let"

let anio = 2020
anio = 2021
console.log(anio)