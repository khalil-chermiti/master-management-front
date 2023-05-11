import { authContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import FetchApplicationsApi from "../apis/FetchApplicationsApi";
import { ApplicationPopulated } from "../types/ApplicaitonTypes";
import ApplicationComponent from "../components/ApplicationComponent";

const ApplicationsPage = () => {
  const [applications, setApplicaitons] = useState<ApplicationPopulated[]>([]);
  const { auth, hydrateAuth } = useContext(authContext)!;

  useEffect(() => {
    hydrateAuth();
    async function getApplications() {
      const response = await FetchApplicationsApi(auth.token);
      if (response.success === true) setApplicaitons([...response.data]);
    }
    getApplications();
  }, [auth.token]);

  return (
    <section
      style={{ marginTop: "60px" }}
      className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
    >
      <h1 className="text-center mb-8 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-6xl dark:text-white">
        Applications
      </h1>
      {applications.map(application => (
        <ApplicationComponent key={application.id} application={application} />
      ))}
    </section>
  );
};

export default ApplicationsPage;
