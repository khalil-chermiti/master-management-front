import { useContext } from "react";
import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

const AdminHeaderComponent = () => {
  const navigate = useNavigate();
  const { logout } = useContext(authContext)!;

  return (
    <>
      <Navbar.Link
        className="cursor-pointer"
        onClick={() => navigate("master/add")}
      >
        Add Master
      </Navbar.Link>

      <Navbar.Link className="cursor-pointer" onClick={() => logout()}>
        Signout
      </Navbar.Link>
    </>
  );
};

export default AdminHeaderComponent;
