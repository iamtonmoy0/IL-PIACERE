import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../lib/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
	const [user,setUser]=useState(); //user info
	const [loading,setLoading]=useState(true); //loading
//create user
	const createUser=(email,password)=>{
		setLoading(true);
	return createUserWithEmailAndPassword(auth,email,password)
}
//sign in
const logIn=(email,password)=>{
	setLoading(true);
	return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

	//state observer
	useEffect(()=>{
		const unsubscribe =onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			setLoading(false)
		})
		return ()=>{
			return unsubscribe
		}
	},[])

	const authInfo={
		user,
		loading,
		setLoading,
		createUser,
		logIn,
		updateUserProfile,
		logOut,

	}
	return (
		<AuthContext.Provider value={authInfo}>
				{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
