import React from "react";
import { Alert, Button, Card } from "flowbite-react";
import BadgeComponent from "./BadgeComponent";
import { ApplicationPopulated } from "../types/ApplicaitonTypes";
import useCancelApplication from "../hooks/UseCancelApplication";

interface IApplicationComponentProps {
  removeApplication: (application_id: number) => void;
  application: ApplicationPopulated;
}

const ApplicationComponent: React.FC<IApplicationComponentProps> = ({
  application,
  removeApplication,
}) => {
  const { error, cancelApplication } = useCancelApplication();

  const handleRemoveApplication = async () => {
    const result = await cancelApplication(application.id);
    if (result) removeApplication(application.id);
  };
  return (
    <Card className="mb-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {application.master.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        master id : {application.master.id}
        <br></br>
        {application.master.description}
      </p>

      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>application id : {application.id}</li>
        <li>
          status : <BadgeComponent status={application.status} />
        </li>
        <li>application date : {application.application_date} </li>
        <li>closing date : {application.master.closing_date} </li>
      </ul>
      {error.isError ? (
        <Alert color="warning" rounded={true}>
          <span>
            <span className="font-medium">Error : </span> {error.msg}
          </span>
        </Alert>
      ) : (
        ""
      )}
      <Button
        onClick={() => {
          handleRemoveApplication();
        }}
        color="failure"
      >
        Cancel Application
      </Button>
    </Card>
  );
};

export default ApplicationComponent;
