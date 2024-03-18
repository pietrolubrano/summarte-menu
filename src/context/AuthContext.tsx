import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";

export interface IAuthContext {
    user: User | null | undefined
    signIn: () => Promise<void>
    signOut: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({
    children
} : {
    children: ReactNode
}) => {

   /*  const auth = getAuth() */
    const [user, setUser] = useState<User | null | undefined>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('User', currentUser)
          setLoading(false)
        });
        return () => {
          unsubscribe();
        };
    }, []);

    const signIn = async () => {
        await signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            console.log('TOKEN',token)
            /* const user = result.user; */
            setUser(result.user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
    };

    const handleSignOut = async () => {
        await signOut(auth)
        .then(() => setUser(undefined))
        .catch(err => console.log(err))
    }

    const value: IAuthContext = {
        user,
        signIn: signIn,
        signOut: handleSignOut
    }

    if(loading) return 'loading...'

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

