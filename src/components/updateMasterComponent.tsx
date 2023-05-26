import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUpdateMaster from "../hooks/useUpdateMaster";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const formatDate = (dateStr: string | undefined) => {
  if (typeof dateStr === "string")
    return new Date(dateStr).toISOString().slice(0, 10);
  else return new Date().toISOString().slice(0, 10);
};

function UpdateMasterComponent() {
  const { id } = useParams();
  const {
    closingDate,
    auth,
    getMaster,
    handleUpdate,
    master,
    active,
    setActive,
    setClosingDate,
  } = useUpdateMaster();

  // get master
  useEffect(() => {
    if (auth.token && typeof id === "string") getMaster(parseInt(id));
  }, [auth.token]);

  // update active status
  useEffect(() => {
    if (master?.is_active) setActive(master?.is_active);
  }, [master]);

  return (
    <>
      <form
        className="flex flex-col gap-4 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full m-auto p-3"
        onSubmit={event => {
          event.preventDefault();
          handleUpdate();
        }}
      >
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-800 md:text-5xl lg:text-5xl dark:text-white">
          Update Master
        </h1>

        {/* Title */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            disabled={true}
            id="title"
            type="text"
            required={true}
            value={master?.title}
          />
        </div>

        {/* Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <TextInput
            disabled={true}
            id="description"
            type="text"
            required={true}
            value={master?.description}
          />
        </div>

        {/* start date */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="start_date" value="start date" />
          </div>
          <TextInput
            disabled={true}
            id="start_date"
            type="date"
            value={formatDate(master?.start_date)}
            required={true}
          />
        </div>

        {/* closing date*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="closing_date" value="closing date" />
          </div>
          <TextInput
            onChange={e => setClosingDate(new Date(e.target.value))}
            id="closing_date"
            type="date"
            required={true}
            value={formatDate(closingDate.toString())}
          />
        </div>

        <div className="mb-2 block">
          <Label htmlFor="is_active" value="is active : " className="pr-4" />
          <Checkbox
            onClick={() => setActive(prev => !prev)}
            defaultChecked={active}
            id="is_active"
            name=""
          />
        </div>

        <Button type="submit">Update Master</Button>
      </form>
    </>
  );
}

export default UpdateMasterComponent;
