import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../Firebase/firebase.config';
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    useEffect( () => {
        const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log("Current user", currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email : userEmail};
            setUser(currentUser)
            setLoading(false)

            // if a user exists then issue a token

            if(currentUser){
                axios.post('https://food-sharing-server-three.vercel.app/jwt',loggedUser, {withCredentials:true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }
            else{
                axios.post('https://food-sharing-server-three.vercel.app/logout', loggedUser, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        } 
    }, [])
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        setLoading(false);
        return signOut(auth)
    }
    
    const userInfo = {
        user,
        signUp,
        login,
        loading,
        logout,
        googleSignUp

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;