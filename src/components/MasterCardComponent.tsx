import ErrorMessage from "./ErrorComponenet";
import { Button, Card } from "flowbite-react";
import { Master } from "../types/MasterTypes";
import SuccessMessage from "./SuccessMessage";
import UseApplyForMaster from "../hooks/UseApplyForMaste";

interface IMasterCardComponentProps {
  master: Master;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
};

const MasterCardComponent: React.FC<IMasterCardComponentProps> = ({
  master,
}) => {
  const { success, applyToMaster, error } = UseApplyForMaster();

  return (
    <Card className="mb-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {master.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {master.description}
      </p>

      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>start date : {formatDate(master.start_date)} </li>
        <li>closing date : {formatDate(master.closing_date)} </li>
      </ul>

      {error.isError && <ErrorMessage message={error.msg} />}
      {success.isSuccess && <SuccessMessage message={success.message} />}
      <Button onClick={() => applyToMaster(master.id)}>Apply</Button>
    </Card>
  );
};

export default MasterCardComponent;
