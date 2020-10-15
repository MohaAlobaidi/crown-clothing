import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
const config = {
  apiKey: "AIzaSyAnTrWWHOkxgCSHNCP6tYDZ_bFUzyGRzTQ",
  authDomain: "crow-db-836ac.firebaseapp.com",
  databaseURL: "https://crow-db-836ac.firebaseio.com",
  projectId: "crow-db-836ac",
  storageBucket: "crow-db-836ac.appspot.com",
  messagingSenderId: "49576998781",
  appId: "1:49576998781:web:25d9066cb0ac4a7287fe14"
}; 

export const createUserProfileDocument =async (userAuth,additionalData)=>{
if(!userAuth) return;

const userRef =  firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get()



if (!snapShot.exists) {
  const {displayName,email} = userAuth;
  const createdAt = new Date();

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })

  }catch(error){
    console.log('error creating user ',error.message)
    console.log(`error creating user ${error.message}`)
  }
}
return userRef;
}



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle =()=> auth.signInWithPopup(provider)

  export default firebase

