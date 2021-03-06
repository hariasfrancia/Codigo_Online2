import fire from '../config/Firebase'

// Registrar en la aplicacion
// usamo PROMESAS
const registroFire = (email, password) => {
    // return new Promise ((resolve ,reject) => {
    //     fire.auth().createUserWithEmailAndPassword(email, password)// me decucelve uan promesa porque es asincrono
    //     .then((u) => {
    //         console.log(u)
    //         resolve("Usuario Creado") // voy a resolver un usuario crado
    //     }).catch((error) => {
    //         reject(`Error al crear nuevo usuario: ${error}`)
    //     })
    // })
    return fire.auth().createUserWithEmailAndPassword(email, password) //resolve / reject firebase
}

// Que Podamosi ingresar
const loginFire = (email, password) => {
    return fire.auth().signInWithEmailAndPassword(email, password)
}


// Que podamos salir
const logoutFire = () => {
    return fire.auth().signOut()
}
//=====================================================================================
export{
    registroFire,
    loginFire,
    logoutFire
}