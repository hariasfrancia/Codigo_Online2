

var nombre = "Rosa";

var arreglo = [0,1,2,3,4,5];

console.log(arreglo.length);
console.log(nombre.length);

// PUSH.- añade un item al final de mi arreglo
arreglo.push(20,15);
console.log(arreglo)

// TODO ES UN OBJETO

var bebida = new String("Margarita") ;
// console.log(typeof bebida);
// console.log(bebida);

// OBJETOS NATURALES
// instanciar
var hoy = new Date();
console.log(hoy);

console.log(hoy.getFullYear())


var fecha = new Date("Saturday, 4 Feb 2012");
console.log(fecha)

// año, mes, dia
// Detalle, en elcaso de mes va de 0 a 11
var fecha2 = new Date(2021,0,6);
console.log(fecha2)

// Cambiar a milisegundos, 1970-01-01
console.log(fecha2.getTime());