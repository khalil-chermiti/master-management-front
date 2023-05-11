import React from "react";
import { Card } from "flowbite-react";
import BadgeComponent from "./BadgeComponent";
import { ApplicationPopulated } from "../types/ApplicaitonTypes";

const ApplicationComponent: React.FC<{ application: ApplicationPopulated }> = ({
  application,
}) => {
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
    </Card>
  );
};

export default ApplicationComponent;
