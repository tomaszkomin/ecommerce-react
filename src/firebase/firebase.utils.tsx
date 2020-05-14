import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyByhxScJVYBcQ4_MF4NPQUh-Am2DC8TrJI",
    authDomain: "ecommerce-react-3d97a.firebaseapp.com",
    databaseURL: "https://ecommerce-react-3d97a.firebaseio.com",
    projectId: "ecommerce-react-3d97a",
    storageBucket: "ecommerce-react-3d97a.appspot.com",
    messagingSenderId: "168653920161",
    appId: "1:168653920161:web:0d287713ae1ab162f35de0"
};

firebase.initializeApp(config);
    
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
    console.log("SING IN WITH GOOGLE");
    auth.signInWithPopup(provider).then((result)=>{
        console.log(result);
    })
};
export default firebase;