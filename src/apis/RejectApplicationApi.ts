import { ResponseData } from "../types/types";
import { Application } from "../types/ApplicaitonTypes";

const REJECT_APPLICATION_API_URL = "http://localhost:3000/application/reject";

const RejectApplicationAPI = async (
  token: string | null,
  application_id: number
): Promise<ResponseData<{ application: Application }>> => {
  try {
    const response = await fetch(REJECT_APPLICATION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ application_id: application_id }),
    });

    return (await response.json()) as ResponseData<{
      application: Application;
    }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default RejectApplicationAPI;
