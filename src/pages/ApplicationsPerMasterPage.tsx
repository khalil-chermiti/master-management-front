import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import useGetMasterApplications from "../hooks/useGetMasterApplications";
import MastersApplicationsComponent from "../components/MastersApplicationsComponent";

const ApplicationsPerMasterPage = () => {
  const { masterID } = useParams();
  const { auth } = useContext(authContext)!;

  const { handleGetMasterApplications, applications } =
    useGetMasterApplications();

  /** fetch applications list when there is a jwt token (auth) */
  useEffect(() => {
    if (!masterID || !auth.token) return;
    handleGetMasterApplications(parseInt(masterID));
  }, [auth.token]);

  return (
    <section
      style={{ marginTop: "60px" }}
      className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
    >
      <div className="m-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            applications
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {applications.map(application => (
              <MastersApplicationsComponent
                key={application.id}
                application={application}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsPerMasterPage;
