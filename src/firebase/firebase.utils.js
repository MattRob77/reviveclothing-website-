import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuwkX-KZjE5uVE4HBuGIKCJGvH3IG7YMI",
  authDomain: "rvive-db.firebaseapp.com",
  databaseURL: "https://rvive-db.firebaseio.com",
  projectId: "rvive-db",
  storageBucket: "rvive-db.appspot.com",
  messagingSenderId: "253008585456",
  appId: "1:253008585456:web:5c554dbd90f49292531835",
  measurementId: "G-SFF9F7ZTEE"
};

 export const createUserProfileDocument = async (userAuth, data) => { //Async API request to firebase User
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);


  const snapShot =  await userRef.get(); //get the snapshot object data


  if(!snapShot.exists) { //if document does not exist
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //create new document object

    try {
      await userRef.set({ //new document object inside userRef
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();




const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


//rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     allow read, write: if false;
//   }
// }

export default firebase;
