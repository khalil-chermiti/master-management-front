import { ResponseData } from "../types/types";
import { Candidate, ICandidateSignupInput } from "../types/CandidateTypes";

const CANDIDATE_SIGNUP_API_URL = "http://localhost:3000/candidate/signup";

const candidateSignupAPI = async (
  candidate: ICandidateSignupInput
): Promise<ResponseData<Candidate>> => {
  try {
    const response = await fetch(CANDIDATE_SIGNUP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidate),
    });

    return (await response.json()) as ResponseData<Candidate>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default candidateSignupAPI;
