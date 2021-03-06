// Vamos a utilizar "axios" importando, como esta los nodes_module lo importo directamente

const axios = require ('axios')

// Utilizo el metodo .get que tiene axios para peticion
// similar a fetch

axios.get("https://reqres.in/api/users?page=2")// Get devuelve funcion en base a promesas
.then(respuesta =>{
    console.log(respuesta)
})
.catch(error => console.log(error))
