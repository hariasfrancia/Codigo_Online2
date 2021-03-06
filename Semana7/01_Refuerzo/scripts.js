

// console.log(platillos); solo para mostrar que esta ejecutando el arreglo
//1 . Obtenemos los elemento de DOM, con los que se va a trabajar, estos ya estan en el HTML
// usamos LET
let lista = document.getElementById("divplatillos");
let compra = document.getElementById("divcarrito");

// 2. creamos la variable carrito que va a servir para despues utlizar para meter los platillos que el usuario va a comprar, NOTA: como limitacion el usuario podra comprar un unidad de cada platillo

let carrito = [];


// 3. crear una funcion que se encargue de recoger todos estod datos y ponerlos en el navegador.
// imprimirPlatillos, se encargara a partir de los elementos en platillos convertiorlos a HTML y agregarlos en divplatillos

function imprimirPlatillos(){
    // 3.1 me va sa servir para acumular el texto HTML de cada platillo
    let platillosHtml = "";
    // 3.2 comencemos a recorrer el arreglo de los platillos
    for(let i = 0; i < platillos.length; i++){
        // console.log(platillosHtml);
        // 3.3 a partir de las propiedades de cada objeto (platllo), creamos un div con otras etirquetas html que contengan esas propiedades
        platillosHtml = platillosHtml + 
        `<div class="tarjeta">
            <h4>${platillos[i].nombre}</h4>
            <div class="imagen">
                <img src="${platillos[i].imagen}">
            </div>
            <p>
                ${platillos[i].descripcion}
            </p>
            <p>
                <span>Precio: </span>
                ${platillos[i].precio}
            </p>
            <p>
                <span>Stock: </span>
                ${platillos[i].stock}
            </p>
            <button class="boton">
                Agregar al carrito
            </button>
        </div>`
    }
    lista.innerHTML = platillosHtml;
// 4.1.1 yo necesito llamar a mi funcion que obtiene los botones despues de ya tenerlos en el DOM(html)
    obtenerBotones();
}
imprimirPlatillos();

// 4. vamos a crear una funcion que me perita obener el elemento clic en cada boton agregado anteriormente.

function obtenerBotones(){
    //4.1 obtener lso elementeos por el nombre de su clase. cokñmo los he generado dinamicamente utilizo getElementsByClassName para tener un arreglo de sos botones
    "obtenerElemetoPorSuClase"
    let listaBotones = document.getElementsByClassName("boton")
    // 4.2 como he obtenido los botones en un arreglo los recorro 1 x1
    // console.log(listaBotones)
    for(let j = 0; j < listaBotones.length; j++){
        // 4.2.1 y cada vez que lso recorro les añado un listener del evento clic
        listaBotones[j].addEventListener("click", function(){
            // cada vez que le haga clic añada un platillo a mi variable carrito
            // console.log(`Click! ${j}`);
            anadirACarrito(j);
        });
        // console.log(`Click! ${listaBotones[j]}`)
    }
}

// 5.Esta funcion se encargar de reducir el stock y añadir los producntos a carrito y para eso va a recibir el indice de cada producto

function anadirACarrito(indice){
    // 5.1 Aca validare si carrito esta vacio, imprimire un mensaje que carrito esta vacio
    if(platillos[indice].stock <= 0){
        alert(" No hay Stock");
        // 5.1.1 peros si no añade el producnto a carrito
    }else{
        // añado el platillo al arreglo carrito
        carrito.push(platillos[indice])
        // disminuyo el stock del platillo que estoy agregando en 1 => a-- = a = a -1
        platillos[indice].stock--
        // Para poder visualizar el cambio de stock, deespues que he cambiado el stock de un platillo, vuelvo a imprimir todo gracias a imprimirPlatillos
        imprimirPlatillos();
        // Nota; de la parte 6 de abajo ejecutanos la function imprimir carrito para que cambie el contenido 
        imprimirCarrito();
    }
    // console.table(carrito);
}

// 6. creamos una funcion que se encargue de imprimir el carrito en divcarrito

function imprimirCarrito(){
    // Contenido boleta seran los platillos en HTML
    let contenidoBoleta = "";
    // Total  Boleta sera el monto total
    let totalBoleta = 0;
    // 6.1 si no hay productos en carrtio dadre u nmensaje que diga que no hay nada todavia
    if(carrito.length <=0){
        compra.innerHTML = "El carrito esta vacio"
    }else{
        // vamos a crear como una tabla para tener los porductos listados
        for(let x=0; x < carrito.length; x++){
            // Agregamos por cada platillo en el carrito una fila con el nombre y precio de ese platillo
            contenidoBoleta = contenidoBoleta +
            `
             <tr>
                <td>${carrito[x].nombre}</td>
                <td>${carrito[x].precio}</td>
             </tr>   
            `
            // iremos sumando el precio de todos los platillo dentro de carrito
            totalBoleta = totalBoleta + carrito[x].precio
        }
        // Despues que he creado el contenido html de los platillos y he sumado el total
        // crear el cuerpo para la boleta, en HTML
        let boletaHtml = `
            <table class="boleta">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                <!--Añadimos las filasy columnas que creamos antes -->
                    ${contenidoBoleta}
                    <tr>
                        <td>IGV</td>
                        <td>${totalBoleta*0.18}</td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td>${totalBoleta}</td>
                    </tr>
                </tbody>
            </table>
        
        `
        // añadimos el contenido de la boleta al divcarrito
        compra.innerHTML = boletaHtml;
    }
}
imprimirCarrito();