function saludar(nombre, edad){
    var saludo = "Hola yo soy "+ nombre + " y tengo "+edad+" años";
    return saludo;
    //Todo lo que esta debajo del return no se ejecutara
    // console.log("Yo estoy despues del return");
}
//ambito/scope lo que se delcare debtro de una funcion existe ahi dentro
// console.log(saludo);

var miSaludo = saludar("Hector",35);
console.log(miSaludo);

//Sin variables

var valor = 100; // Variable global
function imprimirValor(){
    console.log(valor)
}

imprimirValor();