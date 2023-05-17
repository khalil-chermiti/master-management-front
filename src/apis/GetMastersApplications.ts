import { ApplicationWithCandidate } from "../types/ApplicaitonTypes";
import { ResponseData } from "../types/types";

const GET_MASTERS_APPLICATIONS_API_URL = "http://localhost:3000/application";

const GetMastersApplications = async (
  token: string | null,
  masterID: number
): Promise<ResponseData<ApplicationWithCandidate[]>> => {
  try {
    const response = await fetch(
      GET_MASTERS_APPLICATIONS_API_URL + `/${masterID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return (await response.json()) as ResponseData<ApplicationWithCandidate[]>;
  } catch (error) {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default GetMastersApplications;
