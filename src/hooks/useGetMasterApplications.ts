import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import AcceptApplicationAPI from "../apis/AcceptApplicationApi";
import RejectApplicationAPI from "../apis/RejectApplicationApi";
import GetMastersApplications from "../apis/GetMastersApplications";
import { ApplicationWithCandidate } from "../types/ApplicaitonTypes";

/** handles masters applications list */
const useGetMasterApplications = () => {
  const navigate = useNavigate();
  const { auth } = useContext(authContext)!;
  const [applications, setApplications] = useState<ApplicationWithCandidate[]>(
    []
  );

  /* fetch applicatons list by master id */
  const handleGetMasterApplications = async (masterID: number) => {
    const response = await GetMastersApplications(auth.token, masterID);
    if (response.success === true) return setApplications(response.data);
  };

  // reject application
  const handleRejectApplication = async (application_id: number) => {
    await RejectApplicationAPI(auth.token, application_id);
    navigate(0);
  };

  // accept application
  const handleAcceptApplication = async (application_id: number) => {
    await AcceptApplicationAPI(auth.token, application_id);
    navigate(0);
  };

  return {
    applications,
    handleAcceptApplication,
    handleRejectApplication,
    handleGetMasterApplications,
  };
};

export default useGetMasterApplications;
