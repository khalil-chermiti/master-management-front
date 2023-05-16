import { createContext, useState } from "react";
import { ApplicationPopulated } from "../types/ApplicaitonTypes";

interface IApplicationsContext {
  applications: ApplicationPopulated[];
  addApplications: (application: ApplicationPopulated[]) => void;
  removeApplication: (applicationID: number) => void;
  persistApplications: () => void;
  hydrateApplications: () => void;
}

interface IApplicationsContextProviderProps {
  children: React.ReactNode;
}

export const applicationsContext = createContext<IApplicationsContext | null>(
  null
);

/** React context to store user applications */
export const ApplicationContextProvider: React.FC<
  IApplicationsContextProviderProps
> = ({ children }) => {
  const [applications, setApplications] = useState<ApplicationPopulated[]>([]);

  /** adds applications to the Candidate applications context */
  const addApplications = (applicationsList: ApplicationPopulated[]) =>
    setApplications(applicationsList);

  /** removes application from the Candidate applications context */
  const removeApplication = (applicationID: number) => {
    setApplications(prev => {
      return prev.filter(application => application.id !== applicationID);
    });
  };

  /**persist application to localstorage
   * @description when we refresh page the fetched applications are lost
   * we need to persist and then hydrate them using localstorage
   */

  const persistApplications = () =>
    window.localStorage.setItem("applications", JSON.stringify(applications));

  /** hydrate applications from localstorage */
  const hydrateApplications = () => {
    const persistedApplications = window.localStorage.getItem("applications");
    if (persistedApplications?.length === 0 || persistedApplications === null)
      return;

    try {
      const persistedApplications = JSON.parse(
        window.localStorage.getItem("applications") || ""
      ) as ApplicationPopulated[];
      setApplications(persistedApplications);
    } catch {
      console.log("error parsing json");
    }
  };

  return (
    <applicationsContext.Provider
      value={{
        applications,
        addApplications,
        removeApplication,
        persistApplications,
        hydrateApplications,
      }}
    >
      {children}
    </applicationsContext.Provider>
  );
};
