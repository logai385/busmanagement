import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../redux/reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_MEARNIT_TOKEN } from "./Constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const [authState, authDispatch] = useReducer(authReducer, {
    authLoading: false,
    isAuthenticated: false,
    user: null,
  });

  //Login
  const loginUser = async (loginForm) => {
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, loginForm);
      if (res.data.success) {
        localStorage.setItem(LOCAL_STORAGE_MEARNIT_TOKEN, res.data.accessToken);
      }
      return res.data;
    } catch (err) {
      if (err.response.data) return err.response.data;
      else return { sucess: false, message: err.message };
      
    }
  };
  //Context Data
  const authContextData = {loginUser}

  //Return Provider
  return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>
};
export default AuthContextProvider;
