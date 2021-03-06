console.log("1. Jueguemos Monopolio")

console.log("2. Toca Arca Comunal")

console.log("3. Me dio hambre !!!")

let pedirPizza2 = async() => {
    let aleatorio = Math.random()
    console.log("El numero es ", aleatorio)
    if(aleatorio< 0.5){
      return("llego la piza")// return = resolve
    }else{
      throw "El rappi se lo comio"//throw = reject
    }
}

// pedirPizza2().then((respuesta) =>{
//   console.log(respuesta)
//   console.log("4. comamos y juguemos")
// })


let pediryjugar = async() => {
  
  try {//captura el return
    let respuesta = await pedirPizza2()//se pausa ejecucion del codigo
    console.log(respuesta)
    console.log("4. comamos y juguemos")
  } catch (error) {//captura el throw
    console.log(":( im saaaad")
  }
}
pediryjugar()


