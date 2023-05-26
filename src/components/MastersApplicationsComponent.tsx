import { Button } from "flowbite-react";
import BadgeComponent from "./BadgeComponent";
import { ApplicationWithCandidate } from "../types/ApplicaitonTypes";
import useGetMasterApplications from "../hooks/useGetMasterApplications";

interface IMastersApplicationsComponenet {
  application: ApplicationWithCandidate;
}

export const MastersApplicationsComponent: React.FC<
  IMastersApplicationsComponenet
> = ({ application }) => {
  const { handleAcceptApplication, handleRejectApplication } =
    useGetMasterApplications();

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {application.candidate.first_name +
              " " +
              application.candidate.last_name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {application.candidate.email}
          </p>
        </div>

        {/* show both button */}
        <BadgeComponent status={application.status} />

        {application.status === "PENDING" && (
          <>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Button
                onClick={() => handleAcceptApplication(application.id)}
                size={"xs"}
                outline={true}
                color={"success"}
              >
                Accept
              </Button>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Button
                onClick={() => handleRejectApplication(application.id)}
                size={"xs"}
                outline={true}
                color={"failure"}
              >
                Reject
              </Button>
            </div>
          </>
        )}

        {application.status === "ACCEPTED" && (
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <Button
              onClick={() => handleRejectApplication(application.id)}
              size={"xs"}
              outline={true}
              color={"failure"}
            >
              Reject
            </Button>
          </div>
        )}

        {application.status === "REJECTED" && (
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <Button
              onClick={() => handleAcceptApplication(application.id)}
              size={"xs"}
              outline={true}
              color={"success"}
            >
              Accept
            </Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default MastersApplicationsComponent;
