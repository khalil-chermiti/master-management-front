import { ResponseData } from "../types/types";
import { Master } from "../types/MasterTypes";

const UPDATE_MASTER_STATUS_API_URL = "http://localhost:3000/master";

export const updateMasterStatusAPI = async (
  token: string | null,
  masterID: number,
  status: boolean
): Promise<ResponseData<{ master: Master }>> => {
  try {
    const response = await fetch(
      UPDATE_MASTER_STATUS_API_URL + `/${masterID}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ masterID: masterID, status: status }),
      }
    );

    return (await response.json()) as ResponseData<{ master: Master }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export const updateMasterClosingDateAPI = async (
  token: string | null,
  masterID: number,
  date: Date
): Promise<ResponseData<{ master: Master }>> => {
  try {
    const response = await fetch(
      UPDATE_MASTER_STATUS_API_URL + `/${masterID}/date`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ masterID: masterID, date: date }),
      }
    );

    return (await response.json()) as ResponseData<{ master: Master }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};
