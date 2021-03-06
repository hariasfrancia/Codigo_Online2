
// Declaramos objetos con llaves

var album_musica = {
    nombre: "Californication",
    banda: "Red Hot Chilli Peppers",
    productora: "EMI",
    anio: 1999,
    canciones: [
        {//Objetos dentro de arreglo
            titulo: "Scar Tissue",
            duracion: 3.37,
        },// La coma separa al grupo de objetos
        {
            titulo: "Around the World",
            duracion: 3.59,
        }
    ]
}

// restaurante

var restaurante = {
    nombre: "Ka Hing",
    direccion: "Av. Dolores S/N",
    cantidad_mesas: 20,
    personal: ["Meseros", "Cajero","Administrador","Chef","Ayudante de cocina","Seguridad"],
    gerente: {
        nombre:"Juan Perez",
        edad: 36,
        profesion:"Chef"
    },
    platillos:[
        {
            id:1,
            nombre: "Pollo Tipakay",
            descripcion:"Arroz Chaufa con Pollo Agridulce y Wantan Frito",
            precio:22.00
        },
        {
            id:2,
            nombre: "Sopa Wantan Especial",
            descripcion: "Caldo de pollo con verduras, tipos de carne, wantan y huevitos de codorniz",
            precio:15.00
        }
    ],
    // METODOS
    mostrar_info: function(){
        console.log("El Chifa KA HING en la Av. Dolores dispone de 20 mesas")
    },
    mostrar_platillos:function(){
        console.log(restaurante.platillos)
    }
}

// Probando Los objetos
console.log(restaurante.gerente.nombre)
console.log(restaurante.platillos[1].descripcion);


restaurante.mostrar_info();

restaurante.mostrar_platillos();