import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import GetMastersApplications from "../apis/GetMastersApplications";
import { ApplicationWithCandidate } from "../types/ApplicaitonTypes";

/** handles masters applications list */
const useGetMasterApplications = () => {
  const { auth } = useContext(authContext)!;
  const [applications, setApplications] = useState<ApplicationWithCandidate[]>(
    []
  );

  /* fetch applicatons list by master id */
  const handleGetMasterApplications = async (masterID: number) => {
    const response = await GetMastersApplications(auth.token, masterID);
    if (response.success === true) return setApplications(response.data);
  };

  return { handleGetMasterApplications, applications };
};

export default useGetMasterApplications;
