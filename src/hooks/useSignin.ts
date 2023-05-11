import UseError from "./UseError";
import { USER_TYPE } from "../types/types";
import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import candidateSigninAPI from "../apis/SigninCandidateApi";
import { useNavigate } from "react-router-dom";

interface IsignupInput {
  login: string;
  password: string;
}

const UseSignin = () => {
  const auth = useContext(authContext);

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

  const handleUserSignup = async (user: USER_TYPE) => {
    clearErrorMsg();
    if (user === "CANDIDATE") {
      setIsLoading();
      const response = await candidateSigninAPI(signinInput);
      if (response.success === true && auth) {
        auth.setToken(response.data.token);
        navigate("/master");
      }
      if (response.success === false) setErrorMsg(response.error);
      setNotLoading();
    }
  };

  return { error, signinInput, setInputValues, handleUserSignup };
};

export default UseSignin;
