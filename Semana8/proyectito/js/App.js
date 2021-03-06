let network = new Network()
let interface = new Interface()
let btnModal = document.getElementById("btnAgregarModal")
let btnGuardar = document.getElementById("btnGuardar")


let getProductos = () => {
    // 1.se ejecuta network con obtener Productos y me devuelve el arreglo de Objtos Producto de mpckApi
    network.obtenerProductos()
    .then(productos => {//aca tengo el arreglo de productos
        // console.table(productos)
        // despues ese arrglo de productos, se lo paso a imprimir a productos
        interface.imprimirProductos(productos)
    })
    .catch(error => console.log(error))
}
getProductos()

// Obteniendo Modal
let modal = new bootstrap.Modal(document.getElementById("modalProducto1"))

// Abriendo el Modal

btnModal.addEventListener("click", ()=>{
    modal.show();
})

// Mediante ese btnGiuardar voya autilizar crearProducto de network para guardar un Producto
btnGuardar.addEventListener("click",()=>{
    // voy a obtener el formualrio del HTML
    let formulario = document.getElementById("formcrearproducto")
    // Obtengo el value por el nameformulario["name"].value
    // console.log(formulario["producto_nombre"].value)
    let nuevoProducto = new Producto(formulario["producto_nombre"].value,
                                    formulario["producto_descripcion"].value,
                                    formulario["producto_precio"].value,
                                    formulario["producto_imagen"].value)
    // console.log(nuevoProducto)
    network.crearProducto(nuevoProducto)
    .then(productoCreado =>{
        // console.log(productoCreado)
        // Reset me limpia los input del formulario
        formulario.reset()
        // cerramos el modal
        modal.hide()
        // llamamos de nuevo a...DESPUES que ceramos un nuevo porducto, obtenemos los productos actualizados y los imrpimo de nuevo en le HTML
        getProductos()
    })
    .catch(error => console.log(error))
})

