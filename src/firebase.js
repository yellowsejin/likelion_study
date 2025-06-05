import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore, signOut } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBjrBZ5bVxwbgHQiyf4g33K_3564fQLwIg",
    authDomain: "netflix-clone-15462.firebaseapp.com",
    projectId: "netflix-clone-15462",
    storageBucket: "netflix-clone-15462.firebasestorage.app",
    messagingSenderId: "91185192980",
    appId: "1:91185192980:web:c5f4a734a6f64151e64701",
    measurementId: "G-JGSYZLFS17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authPrevider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth,db,login,signup,logout};