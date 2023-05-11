import { useState } from "react";

function UseError() {
  const [error, setError] = useState({
    isError: false,
    isLoading: false,
    msg: "",
  });

  const setErrorMsg = (msg: string) => {
    setError({ isError: true, isLoading: false, msg });
  };

  const clearErrorMsg = () => {
    setError({
      isError: false,
      isLoading: false,
      msg: "",
    });
  };

  const setNotLoading = () => setError(prev => ({ ...prev, isLoading: false }));

  const setIsLoading = () => setError(prev => ({ ...prev, isLoading: true }));

  return {
    error,
    setErrorMsg,
    clearErrorMsg,
    setIsLoading,
    setNotLoading,
  };
}

export default UseError;
