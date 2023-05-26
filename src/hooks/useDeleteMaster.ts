import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import DeleteMasterAPI from "../apis/deleteMasterApi";
import { mastersContext } from "../contexts/MastersContext";

const useDeleteMaster = () => {
  const { auth } = useContext(authContext)!;
  const { removeMaster } = useContext(mastersContext)!;

  const handleDeleteMaster = async (masterID: number) => {
    const response = await DeleteMasterAPI(masterID, auth.token);
    if (response.success === true) removeMaster(masterID);
  };

  return { handleDeleteMaster };
};

export default useDeleteMaster;
