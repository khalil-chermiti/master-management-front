import { ResponseData } from "../types/types";
import { Application } from "../types/ApplicaitonTypes";

const ACCEPT_APPLICATION_API_URL = "http://localhost:3000/application/accept";

const AcceptApplicationAPI = async (
  token: string | null,
  application_id: number
): Promise<ResponseData<{ application: Application }>> => {
  try {
    const response = await fetch(ACCEPT_APPLICATION_API_URL, {
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

export default AcceptApplicationAPI;
