import { ResponseData } from "../types/types";

const RESPONSIBLE_SIGNIN_API_URL = "http://localhost:3000/admin/login";

interface ICandidateSigninInput {
  login: string;
  password: string;
}

const ResponsibleSigninAPI = async (
  data: ICandidateSigninInput
): Promise<ResponseData<{ token: string }>> => {
  try {
    const response = await fetch(RESPONSIBLE_SIGNIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return (await response.json()) as ResponseData<{ token: string }>;
  } catch {
    return {
      success: false,
      error: "something went wrong please try again",
      statusCode: 500,
    };
  }
};

export default ResponsibleSigninAPI;
