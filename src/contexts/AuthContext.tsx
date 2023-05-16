import { Candidate } from "../types/CandidateTypes";
import React, { createContext, useState } from "react";
import type { IAuth, Responsible, USER_TYPE } from "../types/types";
interface IAuthContext {
  auth: IAuth;
  logout: () => void;
  hydrateAuth: () => void;
  persistAuth: () => void;
  setUser: (user: Omit<Candidate, "password"> | Responsible) => void;
  setRoleAndToken: (token: string, role: USER_TYPE) => void;
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
 * now use the methods and properties bellow :
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
    user: null,
  });

  /**set new token after sign in success*/
  const setRoleAndToken = (token: string, role: USER_TYPE) =>
    setAuth(prev => ({ ...prev, isAuth: true, token, role }));

  /**set current user data */
  const setUser = (user: Omit<Candidate, "password"> | Responsible) => {
    setAuth(prev => ({ ...prev, user }));
  };

  /**delete user from local storage */
  const deleteAuthFromLocalStorage = () =>
    window.localStorage.removeItem("auth");

  /**hydrate auth from local storage */
  const hydrateAuth = () => {
    const authFromLocal = window.localStorage.getItem("auth");
    if (authFromLocal?.length === 0 || authFromLocal === null) return;
    setAuth(JSON.parse(window.localStorage.getItem("auth") || "") as IAuth);
  };

  const persistAuth = () =>
    window.localStorage.setItem("auth", JSON.stringify(auth));

  const logout = () => {
    deleteAuthFromLocalStorage();
    setAuth(prev => ({ ...prev, isAuth: false, token: null, user: null }));
  };

  return (
    <authContext.Provider
      value={{
        logout,
        auth,
        hydrateAuth,
        setUser,
        setRoleAndToken,
        persistAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
