// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>Hola React</div>
//   );
// }

// export default App;

////////////////////////////////////////////////
////////////////////////////////////////////////
// PARTES DE UN COMPONENTE DE REACT
// 1. Imporrtar REact, ya no es necesario desde la v.17
// import React from 'react';


// 2. crear una funcion con el mismo nombre que el archivo del componente
// // 2.1. exportar esa funcion, export=exporto, default = por defecto
// export default function App() {
//   // 2.2 Aca dentro de la funciokn yo podre ezcribir mas codigo de JS

//   // code code

//   // 3. return, pero tiene que tener árentesis o aqui ya va mi codigo HTML
//   return(
//     <div>
//       Hola React!!!!!
//     </div>
//   )
// }

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Import nombre_funcion from "ubicacion"
import Hijo from "./Hijo"

export default function  App() {

  return(
    <div>
      <Hijo/>
      <hr/>
      <p>Holaaaaaa Mundo</p>
    </div>
  )
  
}