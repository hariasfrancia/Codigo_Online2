// 
// 

var btndatos = document.getElementById("boton");

btndatos.addEventListener("click", function(){

    // vamos a configurar nuestro asistente que va enviar la perticion y va esperar su respuesta

    var asistente = new XMLHttpRequest(); // nueva instancia de xml a http

    // Este asistente va a tener sus propios eventos
    asistente.addEventListener("readystatechange", function(){

        // readestate me indica cual es el estado de mi peticion, va del 1 al 4
        switch(asistente.readyState){
            case 1:
                console.log("OPEN", asistente.readyState);//configuracion
                break;
            case 2:
                console.log("SEND",asistente.readyState);
                break;
            case 3:
                console.log("DATA, esperando", asistente.readyState);
                break;
            case 4:
                console.log("YA RECIBI LA RPTA", asistente.readyState);
                // responseText es un apropiedad donde se guarda mi respuesta de la peticion
                var objRespuesta = JSON.parse(asistente.responseText)
                break;
            default:
                console.log("Sucedió un error");
                break;
        }
    })// aca finaliza el readyState

    //open hace la configuracion del envio de datos
    asistente.open("GET", "https://reqres.in/api/users?page=2")

    // Send, cuando ya enviamos la peticion a la API
    asistente.send(null);

})
