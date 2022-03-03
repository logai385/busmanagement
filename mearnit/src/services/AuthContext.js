import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer } from "../redux/reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_MEARNIT_TOKEN } from "./Constants";
import SetAuthToken from "../util/SetAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  useEffect(() => checkAuthState(), []);

  const checkAuthState = async () => {
    if (localStorage[LOCAL_STORAGE_MEARNIT_TOKEN]) {
      const token = localStorage[LOCAL_STORAGE_MEARNIT_TOKEN];
      SetAuthToken(token);
    }
    try {
      const res = await axios.get(`${apiUrl}/api/auth`);
      if (res.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: res.data.user,
          },
        });
      } else {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_MEARNIT_TOKEN);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
      SetAuthToken(null);
    }
  };
  //Login
  const loginUser = async (loginForm) => {
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, loginForm);
      if (res.data.success) {
        localStorage.setItem(LOCAL_STORAGE_MEARNIT_TOKEN, res.data.accessToken);
      }
      checkAuthState();
      return res.data;
    } catch (err) {
      if (err.response.data) return err.response.data;
      else return { sucess: false, message: err.message };
    }
  };
  //Context Data
  const authContextData = { loginUser, authState };

  //Return Provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
