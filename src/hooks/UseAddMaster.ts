import UseError from "./UseError";
import { Master } from "../types/MasterTypes";
import AddMasterAPI from "../apis/AddMasterApi";
import React, { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

function useAddMaster() {
  const { auth } = useContext(authContext)!;
  const { error, setErrorMsg, clearErrorMsg, setNotLoading, setIsLoading } =
    UseError();

  const [success, setSuccess] = useState<string>("");

  const [newMaster, setNewMaster] = useState<Omit<Master, "id">>({
    title: "",
    description: "",
    start_date: "",
    closing_date: "",
    is_active: true,
  });

  const setMasterInputValue = (
    e: React.ChangeEvent<HTMLInputElement | any>
  ) => {
    setNewMaster(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleMasterSubmit = async () => {
    setSuccess("");
    setIsLoading;

    const response = await AddMasterAPI(auth.token, newMaster);

    if (response.success === true) {
      clearErrorMsg();
      setSuccess("successfully add new master");
      console.log(response.data.master);
    }

    if (response.success === false) {
      setErrorMsg(response.error);
      console.log(response);
    }

    setNotLoading();
  };

  const toggleIsActive = () => {
    setNewMaster(prev => ({ ...prev, is_active: !prev.is_active }));
  };

  return {
    error,
    success,
    setMasterInputValue,
    handleMasterSubmit,
    toggleIsActive,
  };
}

export default useAddMaster;
