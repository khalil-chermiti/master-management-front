import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const NavBarComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="/navbars">
        {/* <img
          src="https://banner2.cleanpng.com/20180425/auw/kisspng-master-s-degree-academic-degree-graduate-universit-5ae0f678568f05.7552695615246926003546.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-pointer">
          Master
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="cursor-pointer">Masters</Navbar.Link>
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
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
