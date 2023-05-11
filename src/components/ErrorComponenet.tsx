import { Alert } from "flowbite-react";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Alert color="warning">
      <span>
        <span className="font-medium">Info : </span> {message}
      </span>
    </Alert>
  );
};

export default ErrorMessage;
