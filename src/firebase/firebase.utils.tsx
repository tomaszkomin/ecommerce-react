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
    auth.signInWithPopup(provider);
};
export default firebase;

export const createUserDocument = async (userAuth: any, additionalData: any) => {
    if (!userAuth) return;
    const userQuery = `users/${userAuth.uid}`;
    const userRef = firestore.doc(userQuery);
    const snapShot = await userRef.get();

    const collectionRef = firestore.collection('users');
    const collectionSnap = await collectionRef.get();
    console.log("====================collectionSnap===============")
    console.log(collectionSnap)
    console.log({dupa: collectionSnap.docs.map(doc => doc.data())})

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log(error);
        }
    }
    return userRef;
}