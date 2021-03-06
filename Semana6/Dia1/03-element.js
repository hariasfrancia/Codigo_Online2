


var miContenedor = document.querySelector(".contenedor");

miContenedor.style.color = "#ED20FF";
miContenedor.style.opacity = 0.5;

//
miContenedor.style.borderRaius = "20px";

// Añade una clase a las clases que ya tiene este contenedor
miContenedor.classList.add("brillo");
//tambien lo puedo quitar
miContenedor.classList.remove("brillo");


//Set Interval ejecuta uan funcion cada X tiempo de forma repetitiva Recive una funcion y tiempo en milisegundos
window.setInterval(function(){
    // añade o remueve una clase en caso la encuentre o no
    miContenedor.classList.toggle("brillo");
},500)


window.setInterval(function(){
    console.log("Hola cada segundo")
},1000)


// Jugando con el título

var h1 = document.querySelector("h1");
console.log(h1)

h1.innerHTML = "<code>Título de mi página web</code>";

// AGREGANDO ELEMENTOS (nodos)
var cajaVacia = document.getElementById("cajavacia");

// CreateElement nos permite crear un nuevo HTML
var nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML = "Hoola soy un nuevo párrafo";

cajaVacia.appendChild(nuevoParrafo);

// Crea un nuevo elemento de tipo <img>
var imagen = document.createElement("img");

//setAttribute, modifica un atributo de un elemnto HTML, por eso necesita dos argumentos setAttribute("queAtributo","ElValorDelAtributo")
imagen.setAttribute("src","https://i.redd.it/6ooxjjkd204y.jpg");

cajaVacia.appendChild(imagen);
// cambiar tamaño
imagen.style.width = "400px"