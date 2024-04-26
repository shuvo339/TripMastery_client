import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const AuthInfo={
        users,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;