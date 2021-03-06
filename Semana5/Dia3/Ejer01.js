

// var num = + prompt("ingrese numero");

// function esPar(num){
//     console.log("tu numero es par")
// }



// function
// var num = + prompt("ingrese numero");


// Desarrolle un algoritmo que le permita vender dos tipos de Hamburguesa, los tipos son Simple (5 Soles) y Doble (9 Soles), aparte el usuario puede indicar una cantidad de hamburguesas según el tipo que haya pedido, se debe mostrar el costo total (Tipo de Hamburguesa x Cantidad)


// Realice un algoritmo que me sirva para hacer un inventario de 03 tipos de producto (jugo, galletas y jabón), el algoritmo preguntara primero cuántos productos tienen, y después debe preguntar qué tipo de producto está contando y sumar las cantidades por tipo.
// Al Final, Debe mostrar un resumen de las cantidades por tipo.


var cantidadProductos = +prompt("Cuantos Productos tienes en total: ");

var jugo = 0;
var galletas = 0;
var jabon = 0;


for(var i=0; i < cantidadProductos; i++){
    var producto = +prompt("Ingrese 1 - jugo, 2 - galletas, 3 - jabon");
    switch(producto){
        case 1:
            jugo++;
            break;
        case 2:
            galletas++;
            break;
        case 3:
            jabon++;
            break;
        default:
            console.log("Número erroneo, vuelve a intentar")
            i--;
            break;
    }
}
console.log("En total tenemos: jugo "+jugo)
console.log("En total tenemos: galletas "+galletas)
console.log("En total tenemos: jabon "+jabon)