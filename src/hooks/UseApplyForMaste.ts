import UseError from "./UseError";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import ApplyToMasterAPI from "../apis/ApplyToMasterApi";

const UseApplyForMaster = () => {
  const navigate = useNavigate();
  const { auth } = useContext(authContext)!;
  const { error, setErrorMsg, setIsLoading, setNotLoading } = UseError();

  const [success, setSuccess] = useState<{
    isSuccess: boolean;
    message: string;
  }>({ isSuccess: false, message: "" });

  const applyToMaster = async (id: number) => {
    setIsLoading();

    if (!auth.isAuth) navigate("/candidate/signin");
    const response = await ApplyToMasterAPI(id, auth.token);

    if (response.success === false) {
      setErrorMsg(response.error);
      setSuccess(prev => ({ ...prev, message: "", isSuccess: false }));
    }
    if (response.success === true)
      setSuccess(prev => ({
        ...prev,
        isSuccess: true,
        message: "applied to master successfully",
      }));

    setNotLoading();
  };

  return { applyToMaster, error, success };
};

export default UseApplyForMaster;
