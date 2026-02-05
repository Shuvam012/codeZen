// import { createContext, useState,useEffect,useContext } from "react";
// import API from "../api/axios";

// export const AuthContext = createContext();



// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const fetchUser = async () =>{
//         try{
//             const res = await API.get('/auth.me')
//             setUser(res.data)
//         }catch(err){
//             console.log(err);
//             setUser(null)
//         }
//     }
//     useEffect(() => {
//         fetchUser()
//     }, [])
    
//     const login = async (email,password) =>{
//       const res =  await API.post('/auth/login' ,{email,password})
//       setUser(res.data)

//     }

//     const logout = async() =>{
//         await API.post("auth/logout")
//         setUser(null)
//     }
//     return(
//         <AuthContext.Provider value = {{user,login,logout}}>
//             {children}
//         </AuthContext.Provider>

//     )
    
// }
// export const useAuth = () => useContext(AuthContext);


import { createContext, useState, useEffect, useContext } from "react";
import API from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  // Fetch current user on page load
  const fetchUser = async () => {
    try {
      const res = await API.get("/auth/me"); // ensure backend route matches
      setUser(res.data);
    } catch (err) {
      console.log("Fetch user error:", err);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      setUser(res.data); // backend should return user object
      return res.data;
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      throw err; // so UI can show error
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await API.post("/auth/logout");
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
