import { Button, Card } from "flowbite-react";
import { Master } from "../types/MasterTypes";

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

      <Button>Apply</Button>
    </Card>
  );
};

export default MasterCardComponent;
