import UseError from "./UseError";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import CancelApplicationAPI from "../apis/CancelApplicationApi";

const useCancelApplication = () => {
  const { auth } = useContext(authContext)!;
  const { error, setErrorMsg, clearErrorMsg } = UseError();

  const cancelApplication = async (application_id: number) => {
    const response = await CancelApplicationAPI(auth.token, application_id);

    // in case of success
    if (response.success === true) {
      clearErrorMsg();
      return true;
    }

    // in case of an error
    setErrorMsg(response.error);
    return false;
  };

  return { error, cancelApplication };
};

export default useCancelApplication;
