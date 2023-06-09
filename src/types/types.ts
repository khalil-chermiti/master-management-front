import { Candidate } from "./CandidateTypes";

export class ResponseSuccess<T> {
  public success: true;

  public statusCode: number;

  public data: T;

  constructor(success: true, statusCode: number, data: T) {
    this.success = success;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export class ResponseError {
  public success: false;

  public statusCode: number;

  public error: string;

  constructor(success: false, statusCode: number, error: string) {
    this.success = success;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export type ResponseData<T> = ResponseSuccess<T> | ResponseError;

export type USER_TYPE = "ADMIN" | "CANDIDATE";

export interface IAuth {
  isAuth: boolean;
  token: string | null;
  role: USER_TYPE;
  user: Omit<Candidate, "password"> | Responsible | null;
}

export type Responsible = {
  id: number;
  cin: number;
  last_name: string;
  first_name: string;
  login: string;
};
