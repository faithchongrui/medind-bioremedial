import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}



export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function SignOut(email, password) {
        return signOut(auth, email, password)
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function getUser() {
        return auth.currentUser
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        getUser,
        login,
        signOut,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )

}

