var mes = +prompt("Ingrese el mes en números")

switch(mes){
    // Si mes vale 1
    case 1:
        console.log("Es Enero")
        break;
    case 2:
        console.log("Es Febrero")
        break;
    case 3:
        console.log("Es Marzo")
        break;
    case 4:
        console.log("Es Abril")
        break;
    case 5:
        console.log("Es Mayo")
        break;
    case 6:
        console.log("Es Junio")
        break;
    case 7:
        console.log("Es Julio")
        break;
    case 8:
        console.log("Es Agosto")
        break;
    case 9:
        console.log("Es Septiembre")
        break;
    case 10:
        console.log("Es Octubre")
        break;
    case 11:
        console.log("Es Noviembre")
        break;
    case 12:
        console.log("Es Diciembre")
        break;
    // Si no se cumple ninguna de las condiciones anteriores, se ejecuta lo que este dentro del DEFAULT
    default:
        console.log("Error")
        break;
}