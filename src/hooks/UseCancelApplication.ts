import UseError from "./UseError";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import CancelApplicationAPI from "../apis/CancelApplicationApi";

const useCancelApplication = () => {
  const { auth } = useContext(authContext)!;
  const { error, setErrorMsg, clearErrorMsg } = UseError();

  const cancelApplication = async (application_id: number) => {
    const response = await CancelApplicationAPI(auth.token, application_id);

    if (response.success === false) {
      setErrorMsg(response.error);
      console.log(response.error);
      return false;
    }
    if (response.success === true) {
      clearErrorMsg();
      return true;
    }
  };

  return { error, cancelApplication };
};

export default useCancelApplication;
