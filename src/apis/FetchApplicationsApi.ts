import { ResponseData } from "../types/types";
import { ApplicationPopulated } from "../types/ApplicaitonTypes";

const FETCH_APPLICATIONS_API_URL = "http://localhost:3000/application";

const FetchApplicationsApi = async (
  token: string | null
): Promise<ResponseData<ApplicationPopulated[]>> => {
  try {
    const response = await fetch(FETCH_APPLICATIONS_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as ResponseData<ApplicationPopulated[]>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default FetchApplicationsApi;
