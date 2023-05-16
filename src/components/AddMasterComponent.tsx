import {
  Alert,
  Button,
  Checkbox,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import useAddMaster from "../hooks/UseAddMaster";
import SuccessMessage from "./SuccessMessage";

function AddMasterComponent() {
  const {
    error,
    success,
    setMasterInputValue,
    handleMasterSubmit,
    toggleIsActive,
  } = useAddMaster();

  return (
    <>
      <form
        className="flex flex-col gap-4 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
        onSubmit={event => {
          event.preventDefault();
          handleMasterSubmit();
        }}
      >
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-5xl dark:text-white">
          Add Master
        </h1>

        {/* Title */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            onChange={e => setMasterInputValue(e)}
            id="title"
            type="text"
            required={true}
          />
        </div>

        {/* Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <TextInput
            onChange={e => setMasterInputValue(e)}
            id="description"
            type="text"
            required={true}
          />
        </div>

        {/* start date */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="start_date" value="start date" />
          </div>
          <TextInput
            onChange={e => setMasterInputValue(e)}
            id="start_date"
            type="date"
            required={true}
          />
        </div>

        {/* closing date*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="closing_date" value="closing date" />
          </div>
          <TextInput
            onChange={e => setMasterInputValue(e)}
            id="closing_date"
            type="date"
            required={true}
          />
        </div>

        <div className="mb-2 block">
          <Label htmlFor="is_active" value="is active : " className="pr-4" />
          <Checkbox
            onClick={() => toggleIsActive()}
            defaultChecked={true}
            id="is_active"
            name=""
            value={"true"}
          />
        </div>

        {/* show error */}
        {error.isError && (
          <Alert color="warning" rounded={true}>
            <span>
              <span className="font-medium">Error : </span> {error.msg}
            </span>
          </Alert>
        )}

        {/* show success */}
        {success.length > 0 && <SuccessMessage message={success} />}

        {/* show spinner*/}
        {error.isLoading ? (
          <Spinner style={{ margin: "auto" }} size="xl" />
        ) : (
          <Button type="submit">Add Master</Button>
        )}
      </form>
    </>
  );
}

export default AddMasterComponent;
