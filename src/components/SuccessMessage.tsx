import { Alert } from "flowbite-react";

const SuccessMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Alert color="success">
      <span>
        <span className="font-medium">Info : </span> {message}
      </span>
    </Alert>
  );
};

export default SuccessMessage;
