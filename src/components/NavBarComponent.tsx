import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

const NavBarComponent = () => {
  const navigate = useNavigate();
  const auth = useContext(authContext);

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
      {auth?.auth.isAuth ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>My Applications</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => auth.logout()}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        ""
      )}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => navigate("master")}
        >
          Masters List
        </Navbar.Link>
        {auth?.auth.isAuth === false ? (
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
