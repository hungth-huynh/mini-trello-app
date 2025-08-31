import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { signIn, signUp, logOut } from "../services/auth";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, logOut }}>
            {!loadingchildren}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
