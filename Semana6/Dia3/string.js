
// platillos

var platillos = [
    {
        nombre: "Caldo Blanco",
        descripcion: "CAldo cocinado a partir de apio, cordero y gallina, tradicional de Arequipa",
        precio: 15.00,
        stock: 20,
        imagen: "https://cde.peru.com//ima/0/1/8/4/2/1842580/380x300/arequipa.jpg"
    },
    {
        nombre: "Triple",
        descripcion: "Rocoto Relleno, Pastel de papa, chicahrron de chancho",
        precio: 40.00,
        stock: 10,
        imagen: "https://farm6.static.flickr.com/5605/15803801842_021a35aebe.jpg",
    },
    {
        nombre: "Escribano",
        descripcion: "Plato de entrada, bastante picante a base de papa, rocoto, habas, tomate y aliño",
        precio: 10.00,
        stock: 15,
        imagen: "https://miqueridaarequipa.info/wp-content/uploads/2018/08/Escribano-plato-juridico-de-Arequipa.jpg"
    },
    {
        nombre: "Ceviche",
        descripcion: "Pescado cocinado a base de limon, plato tradicional del Perú",
        precio: 25.00,
        stock: 20,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFctDamRJWoL_YEXQIy1bPxAjUyjr_EupAA&usqp=CAU"
    },
    {
        nombre:"Picante Cuy",
        descripcion:"Cuy, aji dorado, aderezado, acompañado de papas",
        precio:40.00,
        stock:6,
        imagen: "https://unacomidaperuana.com/wp-content/uploads/2020/03/cuy-frito.jpg"
    }
]

// -----------------------------------------------------
// Creo una funcion, se encarga de dibujar mis platillos en HTML

// var divplatillos = document.getElementById("divplatillos");

// var tarjetaPlatillos = "";


// function imprimirPlatillos(){
//     for(var i = 0; i < platillos.length; i++){
//         // template string
//         tarjetaPlatillos = tarjetaPlatillos+
//         `<div class="tarjetaplatillo">
//             <h4>${platillos[i].nombre}</h4>
//             <img class="imgplatillo" src="${platillos[i].imagen}">
//             <p>${platillos[i].descripcion}</p>
//             <label class="etiquetaplatillo">Precio</label>
//             <span>${platillo[i].precio}</span>
//             <br>
//             <label class="etiquetaplatillo">Stock</label>
//             <span>${platillos[i].stock}</span>
//         </div>`
//     }
//     divplatillos.innerHTML = tarjetaPlatillos;
// }
// imprimirPlatillos();
function obtenerBotones(){
    var botonesPlatillos = document.getElementByIdClassName("anadir");
    // console.log(botonesPlatillos);
    for(var j=0; j < botonesPlatillos[j]; j++){
        botonesPlatillos[j].addEventListener("click", function(){
            var idplatillo = botonesPlatillos[j].getAttribute("id-platillo");
            console.log(idplatillo);
        })
    }
}

// Creo una funcion, se encarga de dibujar mis platillos en HTML

var divplatillos = document.getElementById("divplatillos");

var tarjetaPlatillos = "";

var tarjetasPlatillos = "";

function imprimirPlatillos() {
   for(var i = 0; i < platillos.length; i++){
     //template string
     tarjetasPlatillos = tarjetasPlatillos + 
     `<div class="tarjetaplatillo">
        <h4>${platillos[i].nombre}</h4>
        <img class="imgplatillo" src="${platillos[i].imagen}">
        <p>${platillos[i].descripcion}</p>
        <label class="etiquetaplatillo" >Precio</label>
        <span>${platillos[i].precio}</span>
        <br>
        <label class="etiquetaplatillo">Stock</label>
        <span>${platillos[i].stock}</span>
        <button class="anadir" id-platillo="${platillos[i].id}">
        Añadir al carrito
        </button>
      </div>`
   }

   divplatillos.innerHTML = tarjetasPlatillos;
   obtenerBotones();
}

imprimirPlatillos();