import { z } from "zod";
import { useState } from "react";
import UseError from "./UseError";
import { useNavigate } from "react-router-dom";
import candidateSignupAPI from "../apis/CandidateSignupApi";
import { ICandidateSignupInput } from "../types/CandidateTypes";

function UseCandidateFromInput() {
  const [candidateInput, setCandidateInput] = useState<ICandidateSignupInput>({
    first_name: "",
    last_name: "",
    login: "",
    email: "",
    password: "",
    password_match: "",
    country: "",
    city: "",
    phone_number: 0,
    address: "",
    cin: 0,
    postal_code: 0,
  });

  const { clearErrorMsg, setErrorMsg, error, setIsLoading, setNotLoading } =
    UseError();

  const navigate = useNavigate();

  const setCandidateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrorMsg();
    if (
      e.target.id === "cin" ||
      e.target.id === "phone_number" ||
      e.target.id === "postal_code"
    )
      setCandidateInput(prev => {
        return { ...prev, [e.target.id]: parseInt(e.target.value) };
      });
    else
      setCandidateInput(prev => {
        return { ...prev, [e.target.id]: e.target.value };
      });
  };

  const CandidateSignupInputSchema = z
    .object({
      cin: z.number().gte(10_000_000).lte(99_999_999),
      login: z.string().min(3),
      last_name: z.string().min(3),
      first_name: z.string().min(3),
      password: z.string().min(4),
      password_match: z.string().min(4),
      email: z.string().email(),
      phone_number: z.number().gte(10_000_000).lte(99_999_999),
      addresse: z.string(),
      postal_code: z.number(),
      country: z.string(),
      city: z.string(),
    })
    .superRefine(({ password_match, password }, ctx) => {
      if (password_match !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
        });
      }
    });

  const validateCandidateInputSchema = (
    candidateSignupInput: ICandidateSignupInput
  ): boolean => {
    clearErrorMsg();
    const result = CandidateSignupInputSchema.safeParse(candidateSignupInput);

    if (result.success === false) {
      setErrorMsg(result.error.issues[0].message);
      return false;
    }

    return true;
  };

  const handleCandidateLogin = async () => {
    clearErrorMsg();
    if (validateCandidateInputSchema(candidateInput)) {
      setIsLoading();
      const result = await candidateSignupAPI(candidateInput);
      if (result.success === false) {
        setErrorMsg(result.error);
        navigate("/candidate/signin");
      }
      setNotLoading();
    }
  };

  return {
    error,
    handleCandidateLogin,
    setCandidateInputValue,
  };
}

export default UseCandidateFromInput;
