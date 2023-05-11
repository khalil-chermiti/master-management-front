import UseError from "../hooks/UseError";
import { useEffect, useState } from "react";
import { Master } from "../types/MasterTypes";
import GetMaterApi from "../apis/GetMaterApi";
import MasterCardComponent from "../components/MasterCardComponent";

const MasterListPage = () => {
  const [masterList, setMasterList] = useState<Master[]>([]);
  const { error, setIsLoading, setNotLoading, setErrorMsg } = UseError();

  useEffect(() => {
    const fetchMasterList = async () => {
      setIsLoading();
      const response = await GetMaterApi();
      console.log(response);
      if (response.success === true) setMasterList(response.data.masters);
      if (response.success === false) setErrorMsg(response.error);
      setNotLoading();
    };
    fetchMasterList();
  }, []);

  if (masterList.length === 0) return <h1>no masters</h1>;
  if (error.isError) return <h1>{error.msg}</h1>;

  return (
    <section
      style={{ marginTop: "60px" }}
      className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
    >
      <h1 className="text-center mb-8 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-6xl dark:text-white">
        Masters List
      </h1>
      {masterList.map(master => (
        <MasterCardComponent key={master.id} master={master} />
      ))}
    </section>
  );
};

export default MasterListPage;
