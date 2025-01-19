import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
// import { axiosPublic } from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            dasplayName: name, photoURL: photo
        })
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("loggrdin user -->", currentUser);
            // if(currentUser){
            //     const userInfo = { email: currentUser.email };
            //     axiosPublic.post('/jwt', userInfo)
            //     .then(res => {
            //         if(res.data.token){
            //             localStorage.setItem('access-token', res.data.token);
            //         }
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token');
            // }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    // [axiosPublic]
    const authInfo = {
        user, loading, createUser, signInUser, googleSignIn, updateUser, logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;