export interface ICandidateSignupInput {
  cin: number;
  last_name: string;
  first_name: string;
  login: string;
  password: string;
  password_match: string;
  email: string;
  phone_number: number;
  address: string;
  postal_code: number;
  country: string;
  city: string;
}

export type Candidate = {
  cin: number;
  id: number;
  last_name: string;
  first_name: string;
  login: string;
  password: string;
  email: string;
  phone_number: number;
  addresse: string | null;
  postal_code: number | null;
  country: string | null;
  city: string | null;
};
