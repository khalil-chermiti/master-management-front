import { ResponseData } from "../types/types";
import { Application } from "../types/ApplicaitonTypes";

const CANCEL_APPLICATIONS_API_URL = "http://localhost:3000/application";

const CancelApplicationAPI = async (
  token: string | null,
  application_id: number
): Promise<ResponseData<Application>> => {
  try {
    const response = await fetch(CANCEL_APPLICATIONS_API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ application_id }),
    });

    return (await response.json()) as ResponseData<Application>;
  } catch (error: any) {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default CancelApplicationAPI;
