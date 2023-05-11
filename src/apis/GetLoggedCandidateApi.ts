import { ResponseData } from "../types/types";
import { Candidate } from "../types/CandidateTypes";

const GET_LOGGED_CANDIDATE_API_URL = "http://localhost:3000/candidate";

const getLoggedCandidateAPI = async (
  token: string | null
): Promise<ResponseData<Omit<Candidate, "password">>> => {
  try {
    const response = await fetch(GET_LOGGED_CANDIDATE_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as ResponseData<Omit<Candidate, "password">>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default getLoggedCandidateAPI;
