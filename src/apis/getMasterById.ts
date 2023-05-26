import { ResponseData } from "../types/types";
import { Master } from "../types/MasterTypes";

const ADD_MASTER_API_URL = "http://localhost:3000/master";

const getMasterByIdAPI = async (
  token: string | null,
  master_id: number
): Promise<ResponseData<{ master: Master }>> => {
  try {
    const response = await fetch(ADD_MASTER_API_URL + `/${master_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as ResponseData<{ master: Master }>;
  } catch (error: any) {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default getMasterByIdAPI;
