import { ResponseData } from "../types/types";
import { Master } from "../types/MasterTypes";

const ADD_MASTER_API_URL = "http://localhost:3000/master";

const AddMasterAPI = async (
  token: string | null,
  master: Omit<Master, "id">
): Promise<ResponseData<{ master: Master }>> => {
  try {
    const response = await fetch(ADD_MASTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(master),
    });

    return (await response.json()) as ResponseData<{ master: Master }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default AddMasterAPI;
