import { createContext, useContext, useState } from "react";


const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const[role,setRole] = useState('')


    const login = (userRole)=>{
        setIsLoggedIn(true)
        setRole(userRole)
    }

    const logout = ()=>{
        setIsLoggedIn(false)
        setRole('')
    }
    return (
        <UserContext.Provider value={{ isLoggedIn, role, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = ()=> useContext(UserContext)