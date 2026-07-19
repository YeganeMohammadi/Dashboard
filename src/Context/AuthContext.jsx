import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser]=useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : {};
})
  const [isLoading, setIsLoading] = useState(true);
  const handleToken = (tk) => {
    setToken(tk);
  }
  const handleUser =(user)=>{
    setUser(user)
  }
  const logout=()=>{
    setToken(null)
    localStorage.removeItem("token")
  }
  useEffect(() => {
    // اینجا چون مقدار اولیه رو از localStorage گرفتیم، لودینگ رو تموم کن
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ token,user,isLoading, handleToken, logout, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
}
