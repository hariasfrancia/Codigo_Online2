import fire from '../config/Firebase'

let db = fire.firestore() // est es una referenia a mi BD
//Documnetacion: https://firebase.google.com/docs/firestore/query-data/get-data?auhuser=0


let getVentas = () => {
    return new Promise ((resolve, reject) => {
        let peticionAMisVentas = db.collection("ventas")//esta es mi referencia a mi coleccion de ventas

        peticionAMisVentas.get().then((misVentas) => {
            let arregloVentas = []

            misVentas.forEach((venta) => {
                arregloVentas.push(venta.data())
            })
            
            resolve(arregloVentas) 
        })
    })
}

let registrarVenta = (venta) => {
    return new Promise((resolve, reject) => {
        let peticionCrearVenta = db.collection("ventas")

        peticionCrearVenta.add(venta).then((nuevaVenta) => {
            resolve(nuevaVenta.id)
        })
    })
}


export{
    getVentas,
    registrarVenta
}