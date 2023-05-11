import { useContext } from "react";
import { Navbar } from "flowbite-react";
import UserComponent from "./UserComponent";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

const NavBarComponent = () => {
  const navigate = useNavigate();
  const { auth } = useContext(authContext)!;

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand
        onClick={() => navigate("/master")}
        className="cursor-pointer"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Master
        </span>
      </Navbar.Brand>
      {auth.isAuth ? <UserComponent user={auth.user!} /> : ""}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => navigate("master")}
        >
          Masters List
        </Navbar.Link>
        {auth.isAuth === false ? (
          <>
            <Navbar.Link
              className="cursor-pointer"
              onClick={() => navigate("candidate/signup")}
            >
              Signup
            </Navbar.Link>
            <Navbar.Link
              className="cursor-pointer"
              onClick={() => navigate("candidate/signin")}
            >
              Signin
            </Navbar.Link>
          </>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
