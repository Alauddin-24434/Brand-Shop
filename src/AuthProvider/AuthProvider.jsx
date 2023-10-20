/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loader, setLoading] = useState(true)
    const [authUser, setAuthUser] = useState()

    //user create SignUp page
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login page

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // onAuth state changed
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setAuthUser(currentUser);
        })
       return()=>{
        unSubsCribe;
        setLoading
       }

    }, [])

   // log out
   const userLogOut = () => {
    setLoading(true)
    return signOut(auth)
}

    const userInfo = {
        createUser,
        userLogin,
        loader,
        authUser,
        userLogOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;