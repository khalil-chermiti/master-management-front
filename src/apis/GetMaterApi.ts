import { Master } from "../types/MasterTypes";
import { ResponseData } from "../types/types";

const GET_MASTER_API_URL = "http://localhost:3000/master";

const GetMaterApi = async (): Promise<ResponseData<{ masters: Master[] }>> => {
  try {
    const response = await fetch(GET_MASTER_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return (await response.json()) as ResponseData<{ masters: Master[] }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default GetMaterApi;
