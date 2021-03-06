
// OBJETOS
var perro = {
    nombre: "Backus",
    edad: 12,
    color: "Blanco",
    hobbies: ["Dormir","Persigue Gatos","Ladra"],

    jugar:function(){
        console.log("Backus juega")
    }
}

console.log(perro.nombre)
console.log(perro.color)

perro.edad = 13;
console.log(perro.edad)

console.log(perro.hobbies[1])

perro.color = "Blanco y Cafe"

perro.jugar();




