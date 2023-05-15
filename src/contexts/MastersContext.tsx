import React, { createContext, useState } from "react";
import { Master } from "../types/MasterTypes";

interface IMasterContext {
  masters: Master[];
  addMaster: (master: Master) => void;
  removeMaster: (masterID: number) => void;
  persistMasters: () => void;
  hydrateMasters: () => void;
}

interface IApplicationsContextProviderProps {
  children: React.ReactNode;
}

export const mastersContext = createContext<IMasterContext | null>(null);

export const MasterContextProvider: React.FC<
  IApplicationsContextProviderProps
> = ({ children }) => {
  const [masters, setMasters] = useState<Master[]>([]);

  /** adds master to context */
  const addMaster = (newMaster: Master) => {
    const exist = masters.find(master => master.id === newMaster.id);
    if (!exist) setMasters(prev => [...prev, newMaster]);
  };

  /** removes master from context */
  const removeMaster = (masterID: number) => {
    setMasters(prev => {
      return prev.filter(master => master.id !== masterID);
    });
  };

  const persistMasters = () =>
    window.localStorage.setItem("masters", JSON.stringify(masters));

  /** hydrate masters from localstorage */
  const hydrateMasters = () => {
    const persistedMasters = window.localStorage.getItem("masters");
    if (persistedMasters?.length === 0 || persistedMasters === null) return [];

    return JSON.parse(
      window.localStorage.getItem("applications") || ""
    ) as Master[];
  };

  return (
    <mastersContext.Provider
      value={{
        masters,
        addMaster,
        removeMaster,
        persistMasters,
        hydrateMasters,
      }}
    >
      {children}
    </mastersContext.Provider>
  );
};
