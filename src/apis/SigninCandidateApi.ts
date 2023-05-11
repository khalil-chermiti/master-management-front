import { ResponseData } from "../types/types";

const CANDIDATE_SIGNIN_API_URL = "http://localhost:3000/candidate/signin";

interface ICandidateSigninInput {
  login: string;
  password: string;
}

const candidateSigninAPI = async (
  data: ICandidateSigninInput
): Promise<ResponseData<{ token: string }>> => {
  try {
    const response = await fetch(CANDIDATE_SIGNIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return (await response.json()) as ResponseData<{ token: string }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default candidateSigninAPI;
