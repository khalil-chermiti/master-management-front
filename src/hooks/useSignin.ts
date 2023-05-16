import UseError from "./UseError";
import { USER_TYPE } from "../types/types";
import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import candidateSigninAPI from "../apis/SigninCandidateApi";
import { useNavigate } from "react-router-dom";
import ResponsibleSigninAPI from "../apis/signinResponsible";

interface IsignupInput {
  login: string;
  password: string;
}

const UseSignin = () => {
  const auth = useContext(authContext)!;

  const { error, clearErrorMsg, setErrorMsg, setIsLoading, setNotLoading } =
    UseError();

  const [signinInput, setSigninInput] = useState<IsignupInput>({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const setInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninInput(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  /**sign in Candidate or Admin*/
  const handleUserSignup = async (user: USER_TYPE) => {
    clearErrorMsg();
    setIsLoading();
    let response = null;

    if (user === "CANDIDATE") {
      response = await candidateSigninAPI(signinInput);
      if (response!.success === true) {
        auth.setRoleAndToken(response.data.token, "CANDIDATE");
        navigate("/");
      }
    }
    if (user === "ADMIN") {
      response = await ResponsibleSigninAPI(signinInput);
      if (response!.success === true) {
        auth.setRoleAndToken(response.data.token, "ADMIN");
        navigate("/");
      }
    }

    if (response!.success === false) setErrorMsg(response!.error);
    setNotLoading();
  };

  return { error, signinInput, setInputValues, handleUserSignup };
};

export default UseSignin;
