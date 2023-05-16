import { ResponseData, Responsible } from "../types/types";

const GET_LOGGED_ADMIN_API_URL = "http://localhost:3000/responsible";

const getLoggedAdminAPI = async (
  token: string | null
): Promise<ResponseData<Responsible>> => {
  try {
    const response = await fetch(GET_LOGGED_ADMIN_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return (await response.json()) as ResponseData<Responsible>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default getLoggedAdminAPI;
