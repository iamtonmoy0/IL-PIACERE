import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../lib/firebase.config";
import axios from "axios";

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
    //google login
     const googleProvider = new GoogleAuthProvider();
        const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

	//state observer
	useEffect(()=>{
		const unsubscribe =onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			//token set and get
			if(currentUser){
			axios.post('https://il-piacere-server-p2dv47q30-iamtonmoy0.vercel.app/jwt',{email:currentUser.email})
			.then(data=>{
				localStorage.setItem('access-token',data.data.token)
			})
			}else{
				localStorage.removeItem('access-token')
			}
			//loading state
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
		googleSignIn

	}
	return (
		<AuthContext.Provider value={authInfo}>
				{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
