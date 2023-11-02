import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import UserServices from "../../services/UserServices";

export const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(false);
  const cookies = new Cookies()
  // const token = cookies.get("token");
  
  useEffect(() => {
    if(cookies.get("token")){
      console.log(1)
    }
    // setAuth(true);
    // UserServices.identifyUser(token, setAdmin)
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
