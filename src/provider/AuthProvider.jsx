import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
 }
 const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
 }

 useEffect(()=>{
    const unSubscribedUser= onAuthStateChanged (auth, currentUser => {
        if (currentUser){
            setUser(currentUser);
            setLoading(false);
        }else{
            setUser(null);
        }
    })
    return ()=>{
        unSubscribedUser();
    }
 },[])

 const signOutUser = () => {
    setLoading(true);
     return signOut(auth);
 }

    const AuthInfo = {
            user,
            setUser,
            loading,
            signOutUser,
            createUser,
            signInUser
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;