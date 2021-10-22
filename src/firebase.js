import firebase from "firebase/app";   //imports its self.
import "firebase/auth";           // imports firebase features.
import 'firebase/firestore'
import config from './config'   // import for using config key.


firebase.initializeApp(config)

  const auth = firebase.auth()
 const db = firebase.firestore()

 export {auth,db}   // only exports some features of fb.
