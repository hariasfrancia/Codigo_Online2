// Otro ejemplo para entender Clases y metodos

class Bodega{
    // definicion de propiedades (aunque no es obligatorio)
    nombre
    direccion
    productos
    // Constructor() el constructo se ejecuta penas se contruye mi objeto
    constructor(name, address){
        // this va hacer referencia al objeto creado a partir de la clase
        this.nombre = name
        this.direccion = address
        // estoy diciendo que todas las bodegas que voy a  crear no van a tener productos
        this.productos = []
        // un metodo puede utlizar otro metodo
        this.mostrarInfo()
    }

    mostrarInfo(){
        console.log(this.nombre)
    }
// push agreaga elemento al fnal del arreglo
//*****************/ ENCAPSULAMIENTO /*****************
    agregarProducto(productoNuevo){
        this.productos.push(productoNuevo)
        console.log("Producto agregado exitosamente")
    }
//*****************************************************
}


let miBodega = new Bodega("De Don PEPE", "Av. Dolores")

// miBodega.mostrarInfo()

// MODIFICAR DIRECTAMENTE EL OBJETO ESTA MAL
// console.log(miBodega.productos)

// // Estoy modificando directamentela propiedad productos
// miBodega.productos = ["arroz","pollo","azucar"]
// console.log(miBodega.productos)


// // agregar dueño, es una propiedad fuera de la clase, se puede hacer"agregar"  pero no se debe.
// miBodega.duenio = "El PEPE"
// console.log(miBodega)

miBodega.agregarProducto("Arroz")
miBodega.agregarProducto("chocolates")

console.log(miBodega)

let otraBodega = new Bodega("Norka", "Av. Los Jazmines")

console.table(otraBodega)