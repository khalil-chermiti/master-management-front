import { useContext, useState } from "react";
import { Master } from "../types/MasterTypes";
import getMasterByIdAPI from "../apis/getMasterById";
import { authContext } from "../contexts/AuthContext";
import {
  updateMasterClosingDateAPI,
  updateMasterStatusAPI,
} from "../apis/UpdateMasterApi";
import { useNavigate } from "react-router-dom";

const useUpdateMaster = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(true);
  const [closingDate, setClosingDate] = useState<Date>(new Date());

  const { auth } = useContext(authContext)!;
  const [master, setMaster] = useState<Master>({
    id: 1,
    title: "master",
    is_active: true,
    description: "master description",
    start_date: new Date().toISOString().slice(0, 10),
    closing_date: new Date().toISOString().slice(0, 10),
  });

  const getMaster = async (master_id: number) => {
    const response = await getMasterByIdAPI(auth.token, master_id);
    if (response.success === true) setMaster(response.data.master);
  };

  const updateStatus = async () => {
    const response = await updateMasterStatusAPI(auth.token, master.id, active);
    if (response.success === true) navigate("/master");
  };

  const updateClosingDate = async () => {
    const response = await updateMasterClosingDateAPI(
      auth.token,
      master.id,
      new Date(closingDate)
    );
    if (response.success === true) navigate("/master");
  };

  const handleUpdate = async () => {
    await updateClosingDate();
    await updateStatus();
  };

  return {
    getMaster,
    master,
    auth,
    active,
    setActive,
    setClosingDate,
    handleUpdate,
    closingDate,
  };
};

export default useUpdateMaster;
