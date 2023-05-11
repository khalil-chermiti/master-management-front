import { Master } from "./MasterTypes";

export type Application = {
  id: number;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  application_date: number;
  candidate_id: number;
  master_id: number;
};

export type ApplicationPopulated = Application & {
  master: Master;
};
