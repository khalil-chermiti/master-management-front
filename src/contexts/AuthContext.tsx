import React, { createContext, useState } from "react";
import type { IAuth } from "../types/types";

interface IAuthContext {
  auth: IAuth;
  logout: () => void;
  setToken: (token: string) => void;
  hydrateAuth: () => void;
}

interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export const authContext = createContext<IAuthContext | null>(null);

/** auth context provicder : handles candidate and admin login
 * @description extract functions bellow using useContext hook to handle auth
 * @function logout : log current user out
 * @function setAuth : set auth token and isAuth to true
 * @function hydrate : hydrate auth object from local storage
 * @example
 * const auth = useContext(authContext)
 * // now use the methods and properties bellow :
 * auth?.auth
 * auth?.hydrateAuth()
 * auth?.setToken("some token")
 * auth?.logout()
 */
export const AuthContextProvider: React.FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState<IAuth>({
    isAuth: false,
    token: null,
    role: "CANDIDATE",
  });

  /**set new token after sign in success*/
  const setToken = (token: string) => {
    setAuth(prev => ({ ...prev, isAuth: true, token: token }));
    setAuthToLocalStorage({ isAuth: true, token: token, role: auth.role });
  };

  const getAuthFromLocalStorage = () => {
    const authFromLocal = window.localStorage.getItem("auth");
    if (authFromLocal?.length === 0 || authFromLocal === null) return "";
    return JSON.parse(window.localStorage.getItem("auth") || "") as IAuth | "";
  };

  const deleteAuthFromLocalStorage = () =>
    window.localStorage.removeItem("auth");

  /**hydrate auth from local storage */
  const hydrateAuth = () => {
    const authFromLocal = getAuthFromLocalStorage();
    if (authFromLocal !== "") setAuth(authFromLocal);
  };

  const setAuthToLocalStorage = (auth: IAuth) =>
    window.localStorage.setItem("auth", JSON.stringify(auth));

  const logout = () => {
    deleteAuthFromLocalStorage();
    setAuth(prev => ({ ...prev, isAuth: false, token: null }));
  };

  return (
    <authContext.Provider value={{ logout, setToken, auth, hydrateAuth }}>
      {children}
    </authContext.Provider>
  );
};
