import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyClIm9K3H8CDiYFNHWAS4bQPSqdn3jLVKo",
    authDomain: "crown-db-90c75.firebaseapp.com",
    projectId: "crown-db-90c75",
    storageBucket: "crown-db-90c75.appspot.com",
    messagingSenderId: "252985358678",
    appId: "1:252985358678:web:82d7d4b723bf39dbb67ef7",
    measurementId: "G-G0ZSW5R59F"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});

export const createUserProfileDocument=async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot=await userRef.get()
    if(!userSnapshot.exists){
        const {displayName,email}=userAuth;
        const createdAt = new Date();
        
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating the user',error.message);
        }
    }
    return userRef;
}

export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;