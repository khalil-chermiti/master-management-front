import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import DeleteMasterAPI from "../apis/deleteMasterApi";
import { mastersContext } from "../contexts/MastersContext";

const useDeleteMaster = () => {
  const { auth } = useContext(authContext)!;
  const { removeMaster } = useContext(mastersContext)!;

  const handleDeleteMaster = async (masterID: number) => {
    console.log("id :", masterID);
    const response = await DeleteMasterAPI(masterID, auth.token);
    if (response.success === true) {
      removeMaster(masterID);
      console.log("master was deleted");
    }

    console.log(response);
  };

  return { handleDeleteMaster };
};

export default useDeleteMaster;
