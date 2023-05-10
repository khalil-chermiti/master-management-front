import UseCandidateFromInput from "./UseCandidateSignup";
import { Label, Button, TextInput, Alert, Spinner } from "flowbite-react";

function CandidateSignup() {
  const { signupError, handleCandidateLogin, setCandidateInputValue } =
    UseCandidateFromInput();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={event => {
        event.preventDefault();
        handleCandidateLogin();
      }}
    >
      {/* first_name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="first_name" value="first name" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="first_name"
          type="text"
          required={true}
        />
      </div>

      {/* last_name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="last_name" value="last name" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="last_name"
          type="text"
          required={true}
        />
      </div>

      {/* login */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="login" value="username" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="login"
          type="text"
          required={true}
        />
      </div>

      {/* email */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="email" />
        </div>
        <TextInput
          id="email"
          type="email"
          onChange={e => setCandidateInputValue(e)}
          placeholder="candidate@mail.com"
          required={true}
        />
      </div>

      {/* email */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone_number" value="phone number" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="phone_number"
          type="tel"
          required={true}
        />
      </div>

      {/* cin */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="cin" value="Id number" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="cin"
          type="number"
          required={true}
        />
      </div>

      {/* password */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="password" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="password"
          type="password"
          required={true}
        />
      </div>

      {/* password_match */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password_match" value="repeat password" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="password_match"
          type="password"
          required={true}
        />
      </div>

      {/* address */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="address" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="addresse"
          type="text"
          required={true}
        />
      </div>

      {/* zip code */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="postal_code" value="postal_code" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="postal_code"
          type="number"
          required={true}
        />
      </div>

      {/* country */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="country" value="coutry" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="country"
          type="text"
          required={true}
        />
      </div>

      {/* city */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="city" value="city" />
        </div>
        <TextInput
          onChange={e => setCandidateInputValue(e)}
          id="city"
          type="text"
          required={true}
        />
      </div>

      {signupError.isError ? (
        <Alert color="warning" rounded={true}>
          <span>
            <span className="font-medium">Error : </span> {signupError.msg}
          </span>
        </Alert>
      ) : (
        ""
      )}

      {signupError.isLoading ? (
        <Spinner style={{ margin: "auto" }} size="xl" />
      ) : (
        <Button type="submit">Sign up</Button>
      )}
    </form>
  );
}

export default CandidateSignup;
