import { useContext, useEffect } from "react";
import GetMasterApi from "../apis/GetMasterApi";
import { mastersContext } from "../contexts/MastersContext";
import MasterCardComponent from "../components/MasterCardComponent";

const MasterListPage = () => {
  const { masters, hydrateMasters, persistMasters, addMaster } =
    useContext(mastersContext)!;

  /**fetch and add master to context */
  useEffect(() => {
    const fetchMasterList = async () => {
      const response = await GetMasterApi();
      if (response.success === true)
        response.data.masters.forEach(master => addMaster(master));
    };
    fetchMasterList();
  }, []);

  /**hydrate masters list from localstorage */
  useEffect(() => {
    hydrateMasters();
  });

  /**persist masters list to localstorage */
  useEffect(() => {
    persistMasters();
  }, [masters]);

  return (
    <section
      style={{ marginTop: "60px" }}
      className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
    >
      <h1 className="text-center mb-8 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-6xl dark:text-white">
        Masters List
      </h1>
      {masters.map(master => (
        <MasterCardComponent key={master.id} master={master} />
      ))}
    </section>
  );
};

export default MasterListPage;
