// El objetivo de este ejercicio es que creen una funcion que permita recibir la base y la altura como argumentos y me retorne el area de un triangulo, segun esos argumentos.

// 1. Obtene de alguna manera la base y la altura
// 2. Tener una funcion y dentro de esa funcion hacer la operacion
// 3. Retornar el resultado
// 4. Imprimir el resultado


//cuando yo reciba algo de prompt, simepre va a ser texto, entonces hayq que pasarlo a un tipo de dato number.
// Para hacer añado un + anes del prompt
//+prompt
var base = +prompt("Ingrese la base del triángulo:");// para que sea numero a prompt se le agrega un numero
//typeof es para saber el valor del dato
// console.log(typeof base);

var altura = +prompt("Ingrese la altura del triangulo:");

function calcularArea(){
    var area = base * altura / 2;
    return area;
}
// console.log(calcularArea());
var miArea = calcularArea();
console.log(miArea);

