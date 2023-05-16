import React, { createContext, useState } from "react";
import { Master } from "../types/MasterTypes";

interface IMasterContext {
  masters: Master[];
  addMaster: (master: Master) => void;
  addMasters: (masterList: Master[]) => void;
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
    console.log(exist);
    if (exist) return;
    setMasters(prev => [...prev, newMaster]);
  };

  const addMasters = (mastersList: Master[]) => setMasters(mastersList);

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
    if (persistedMasters?.length === 0 || persistedMasters === null) return;

    try {
      const persistedMasters = JSON.parse(
        window.localStorage.getItem("masters") || ""
      ) as Master[];
      setMasters(persistedMasters);
      // persistedMasters.forEach(master => addMaster(master));
    } catch {
      console.log("error parsing json");
    }
  };

  return (
    <mastersContext.Provider
      value={{
        masters,
        addMasters,
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
