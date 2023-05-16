import { useContext, useEffect } from "react";
import GetMasterApi from "../apis/GetMasterApi";
import { mastersContext } from "../contexts/MastersContext";
import MasterCardComponent from "../components/MasterCardComponent";

const MasterListPage = () => {
  const { masters, hydrateMasters, persistMasters, addMasters } =
    useContext(mastersContext)!;

  /**fetch and add master to context */
  useEffect(() => {
    const fetchMasterList = async () => {
      const response = await GetMasterApi();
      if (response.success === true) addMasters(response.data.masters);
    };
    fetchMasterList();
  }, []);

  /**hydrate masters list from localstorage */
  useEffect(() => {
    hydrateMasters();
  }, []);

  /**persist masters list to localstorage */
  useEffect(() => {
    if (masters.length > 0) persistMasters();
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
