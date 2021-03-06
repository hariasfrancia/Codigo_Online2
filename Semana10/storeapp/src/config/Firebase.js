import firebase from 'firebase'

const config = {
  // Codigo PROF
  apiKey: "AIzaSyBDWc6glLdL7osILJ0nR1hzYw8S8CvmcqQ",
  authDomain: "codigoonline2-b650b.firebaseapp.com",
  projectId: "codigoonline2-b650b",
  storageBucket: "codigoonline2-b650b.appspot.com",
  messagingSenderId: "566336241471",
  appId: "1:566336241471:web:ee542b7c941f5151d71d8a",
  //Mi FIREBASE
  // apiKey: "AIzaSyAy1YEgnDNsqI8prANoFilDa8JZVHly9yU",
  // authDomain: "codigoonine2-haf.firebaseapp.com",
  // projectId: "codigoonine2-haf",
  // storageBucket: "codigoonine2-haf.appspot.com",
  // messagingSenderId: "381119869897",
  // appId: "1:381119869897:web:e447e65deed134868b6e18"
};


//Con esto inicializamos una instancia de Firebase dentro de nuestro proyecto React
const fire = firebase.initializeApp(config)

export {
  fire as default
}