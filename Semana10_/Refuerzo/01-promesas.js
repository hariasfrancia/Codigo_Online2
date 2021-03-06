// console.log("1. Jueguemos Monopolio")

// console.log("2. Toca Arca Comunal")

// console.log("3. Me dio hambre !!!")

// setTimeout(() => {
//   console.log("4. Una pizza")
// },2000)

// console.log("5. Seguimos Jugando")

// console.log("6. Paga el Alquiler")

console.log("1. Jueguemos Monopolio")

console.log("2. Toca Arca Comunal")

console.log("3. Me dio hambre !!!")


let pedirPizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4. Una pizza")
    },2000)
  })
}
pedirPizza().then((respuesta) => {
  console.log(respuesta)
  console.log("5. Seguimos Jugando")
  console.log("6. Paga el Alquiler")
}).catch((error) => {
  console.log(error)
  console.log("5. Seguimos Jugando")
  console.log("6. Paga el Alquiler!!")
})



