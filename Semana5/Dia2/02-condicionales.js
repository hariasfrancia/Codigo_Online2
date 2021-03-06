var sueldo = 2400;

if (sueldo > 2000){
    // Aca pongo el codigo si la condicion anterior se cumple, si es verdadero (true)
    console.log("Puedes comprar una Pc")
}else{
    // Aca pongo todo el codigo si es que la condicon previa es falsa
    console.log("Es recomendable que ahorres...")
}

// ---------------------------------------------------

var edad=25;
// var edad = +prompt("Ingrese su edad:")
// Para que esta evaluacion me de verdadero todas las condicionales tienen que dar verdadero.
// console.log(prompt(edad))

if(edad < 18 && edad >= 0){
    console.log("Tienes DNI amarillo");
}else if (edad >= 18){
    console.log("Tienes DNI azúl");
}else{
    console.log("No ingrese valores extraños")
}

/*
OPERADORES LOGICOS EN JS, para cuando se evaluan varias condicionales a la vez

&& - Y - AND - Todo tiene que ser verdadero, vasta que una sea falsa y todo sera falso
|| - O - OR - Basta que una de las condiciones sea verdadera para que la evaluacion sea verdadera
*/

if("0" === 0){
    // Doble igual, evalua solo el contenido
    // Triple igual, evalua y compara
    console.log("esto es un número")
}else{
    console.log("falso, eso no es un número")
}


var numero = 0;

if(numero !== 0){
    console.log("Esto no es 0")
}else{
    console.log("Es 0")
}



if("15" == 15){
    console.log("esto es un numero")
}else{
    console.log("falso, esto no es un numero")
}