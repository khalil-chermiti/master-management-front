import UseSignin from "../hooks/useSignin";
import { USER_TYPE } from "../types/types";
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";

interface ISignin {
  USER_TYPE: USER_TYPE;
}

const Signin: React.FC<ISignin> = ({ USER_TYPE }) => {
  const { error, handleUserSignup, setInputValues } = UseSignin();
  return (
    <form
      className="flex flex-col gap-4  xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
      onSubmit={event => {
        event.preventDefault();
        handleUserSignup(USER_TYPE);
      }}
    >
      <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-6xl dark:text-white">
        Sign In
      </h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="login" value="username" />
        </div>
        <TextInput
          onChange={e => setInputValues(e)}
          id="login"
          type="text"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          onChange={e => setInputValues(e)}
          id="password"
          type="password"
          required={true}
        />
      </div>

      {error.isError ? (
        <Alert color="warning" rounded={true}>
          <span>
            <span className="font-medium">Error : </span> {error.msg}
          </span>
        </Alert>
      ) : (
        ""
      )}

      {error.isLoading ? (
        <Spinner style={{ margin: "auto" }} size="xl" />
      ) : (
        <Button type="submit">Sign in</Button>
      )}
    </form>
  );
};

export default Signin;
