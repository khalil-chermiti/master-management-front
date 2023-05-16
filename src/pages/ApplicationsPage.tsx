import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import FetchApplicationsApi from "../apis/FetchApplicationsApi";
import ApplicationComponent from "../components/ApplicationComponent";
import { applicationsContext } from "../contexts/ApplicationsContext";

const ApplicationsPage = () => {
  const { auth } = useContext(authContext)!;

  const {
    applications,
    addApplications,
    hydrateApplications,
    persistApplications,
  } = useContext(applicationsContext)!;

  // fetch applications when token is hydrated from local storage
  useEffect(() => {
    async function getApplications() {
      if (auth.token) {
        const response = await FetchApplicationsApi(auth.token);
        if (response.success === true) addApplications(response.data);
      }
    }
    getApplications();
  }, [auth.token]);

  // hydrate Applications list from local storage
  useEffect(() => {
    hydrateApplications();
  }, []);

  // persist Applications to local storage
  useEffect(() => {
    if (applications.length != 0) persistApplications();
  }, [applications]);

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
