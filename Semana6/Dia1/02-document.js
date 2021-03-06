
// Obtener elementos a partir del ID
var parrafo = document.getElementById("parrafo")
console.log(parrafo)

parrafo.style.color = "red";// referencia a parrafo para modificarlo
parrafo.style.padding = "35px";

// Obtener leementos a partir de clases
var elemetosSecundarios = document.getElementsByClassName("secundario");
console.log(elemetosSecundarios);

// Obtener leementos por su Etiqueta

var misParrafos = document.getElementsByTagName("p");
console.log(misParrafos);

// for(var i= 0; i< misParrafos.length; i++){
//     misParrafos[i].style.border = "2px solid green"
// }


// selecciona lementos por su clase

// var query = document.querySelector("#parrafo")
var query = document.querySelector(".titulo");

console.log(query);

//si son varios
var queries = document.querySelectorAll(".secundario");

console.log(queries)