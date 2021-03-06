// Creando clases y constructores
// Sintaxis: Class Nombre_class{}
class Gatete{
    // Toda clase va a tener un constructor (así no lo pongamos nosotros)
    // El constructor va a ser el primero que se va a ejecutar
    // Los "metodos" de una clase van solamente con su nombre, entonces creo "constructor"
    constructor(nombre, edad, raza, color, peso){
        // this.propiedad = valor
        this.name = nombre
        this.age = edad
        this.breed = raza
        this.colour = color
        this.wight = peso
    }
    // un metodo es una funcion, una accion que puede realizar el objeto creado a partir de la funcion
    // nombre_metodo(args){}
    maullar(veces){
        console.log(`miau miau miauuuuuu ${veces} veces`)
    }

    cumpleanios(){
        this.age = this.age + 1
    }

    yomismo(){
        console.log(this)
    }
}

// Creamos la variable
// al utilizar la palabra "new" lo que hago es crear una nueva instancia de mi clase
let Gato1 = new Gatete("Abby",7,"angora","blanco",2)
console.log(Gato1.colour)

let Gato2 = new Gatete("Colorina",4,"carei","naranja",1.5)
console.log(Gato2.name)

// ejecutando el metodo maullar
Gato2.maullar(3)

Gato2.yomismo()
Gato1.yomismo()

// console.log(Gato1.age)

// Gato1.cumpleanios()

// console.log(Gato1.age)
