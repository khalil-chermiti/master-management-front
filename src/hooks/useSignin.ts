import { useState } from "react";
import UseError from "./UseError";
import { USER_TYPE } from "../types/types";
import candidateSigninAPI from "../apis/SigninCandidateApi";

interface IsignupInput {
  login: string;
  password: string;
}

const UseSignin = () => {
  const { error, clearErrorMsg, setErrorMsg, setIsLoading, setNotLoading } =
    UseError();

  const [signinInput, setSigninInput] = useState<IsignupInput>({
    login: "",
    password: "",
  });

  const setInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigninInput(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleUserSignup = async (user: USER_TYPE) => {
    clearErrorMsg();
    if (user === "CANDIDATE") {
      setIsLoading();
      const response = await candidateSigninAPI(signinInput);
      if (response.success === false) {
        setErrorMsg(response.error);
      }
      setNotLoading();
    }
  };

  return { error, signinInput, setInputValues, handleUserSignup };
};

export default UseSignin;
