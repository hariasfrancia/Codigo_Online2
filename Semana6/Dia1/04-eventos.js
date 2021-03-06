// Selecciono mi elemento
var miBoton = document.getElementById("boton");
// añadir un evento (addEventListener, ejecuta el evento y una funcion)
// El evento tambien es un objeto
miBoton.addEventListener("click",function(event){
    console.log(event)
    // Dentro de esta funcion se coloca el codigo que deseo que ejecute
    alert("Haz dado click!!!");
})

var miLink = document.getElementById("link");

miLink.setAttribute("target","_blank")

miLink.addEventListener("click",function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log("Click en el link")
});
// -------------------------------------------------------

var inputtexto = document.getElementById("inputtexto")

var btntexto = document.getElementById("botoninput")

var divLista = document.getElementById("lista");

btntexto.addEventListener("click",function(){
    console.log(inputtexto.value);
})

// -------------------------------------------------------

// keyup
inputtexto.addEventListener("keyup",function(e){
    if(e.keyCode =="Enter")
    console.log(inputtexto.value)
})




inputtexto.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        console.log("Enter!!!")
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = inputtexto.value;
        divLista.appendChild(nuevoParrafo);
        inputtexto.value = "";
    }
})