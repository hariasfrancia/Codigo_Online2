
function decorador(texto:string){
    // Un decorador se uso para, modificar algo, agregar algo o inspeccionar algo
    return function(target){ // Target representa lo que estamos modificando, representa a persona
        target.prototype.saludar = function () { // Aqui tengo que utilizar function
           console.log(`Buen día voy hacer compras con mi mascarilla ${texto}`)
        }
    }
}

@decorador(" y me llevo un alcohol en spray")


class Persona{
    public nombre: string


    constructor(nombre:string){
        this.nombre = nombre
    }
    saludar(texto:string){
        console.log(`Hola que tal, como van yo soy ${this.nombre} ${texto}`)
    }
}

let Jhonny = new Persona("Jhonnny")

Jhonny.saludar("y quiero salir")
    