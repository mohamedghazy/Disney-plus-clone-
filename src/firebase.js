import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyDolqVrVHIiBbb_carqhV0H0HPa_ZQyzBc",
   authDomain: "desiney-plus.firebaseapp.com",
   projectId: "desiney-plus",
   storageBucket: "desiney-plus.appspot.com",
   messagingSenderId: "981897271217",
   appId: "1:981897271217:web:df2931d7316a883e2e0f90",
   measurementId: "G-2LD3STFL1G"
 };
 //initialization for the app
 const firebaseApp=firebase.initializeApp(firebaseConfig)
 //conecting to the database
 const db=firebaseApp.firestore()
//getting the authantication for the sign in and sing up process
 const auth=firebase.auth()
//provider for sing in or sing up using google account
 const providor= new firebase.auth.GoogleAuthProvider()
//to store our videos and images
 const storage=firebase.storage()

 
export{auth,providor,storage};
export default db