import { useState, createContext, useContext } from "react";
import * as usersApi from "./services/Admin"

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login = async (email, password) => {
        const response = await usersApi.signInWithEmailAndPassword(email, password);
        setUser(response.data.user); 
        usersApi.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      }

    const logout = () => {
        setUser(null)
    }

    return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
