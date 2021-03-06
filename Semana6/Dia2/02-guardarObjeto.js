// 
// LocalStorage, solo guarda texto

// Iniciamos por el formulario

var formulario = document.getElementById("registro");

// obtenerlo cada uno de los datos ingresados por teclado, los llamo
// 1. obtener elementos que se necesita
var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var inputEdad = document.getElementById("edad");

// 2. Ponermos un evenListener
formulario.addEventListener("submit", function(evento){
    // En el caso de un evento submit, tengo que hacer un preventDefault para que no recargue la pestaña
    evento.preventDefault();
    // console.log("submit")

    var objUsuario = {
        nombre: inputNombre.value,
        apellidos: inputApellidos.value,
        edad: inputEdad.value
    }
    // imprimo el objeto
    // console.log(objUsuario)

    // Me toca guardar los datos, pero para guardarlos voy a tener que convertirlos a texto

    // JSON, es un objeto que exite dentro del navegador
    var objATexto = JSON.stringify(objUsuario)
    // console.log(objATexto)

    // 4. como ya esta el texto, lo guardo en el LocalStorage
    localStorage.setItem("usuario", objATexto)
})

// ------------------------------------------------------------------

var btnVerUsuario = document.getElementById("verusuario");

btnVerUsuario.addEventListener("click", function(){
    var usuarioObtenido = localStorage.getItem("usuario");
    // console.log(usuarioObtenido)
    // Transformar texto a JS
    // JASON.parse  convierte texto a una estructura de JavaScript
    var TextoAJavaScript = JSON.parse(usuarioObtenido);
    console.log(TextoAJavaScript);
})






