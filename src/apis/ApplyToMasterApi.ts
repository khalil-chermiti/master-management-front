import { ResponseData } from "../types/types";
import { Master } from "../types/MasterTypes";

const APPLY_FOR_MASTER_API_URL = "http://localhost:3000/application";

const ApplyToMasterAPI = async (
  master_id: number,
  token: string | null
): Promise<ResponseData<Master>> => {
  try {
    const response = await fetch(APPLY_FOR_MASTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ master_id }),
    });

    return (await response.json()) as ResponseData<Master>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default ApplyToMasterAPI;
