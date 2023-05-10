import "./App.css";
import { Navbar } from "flowbite-react";
import CandidateSignupPage from "./candidate/CandidateSignupPage";
function App() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/navbars">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link to="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <section style={{ width: "60%", margin: "5rem auto" }}>
        <CandidateSignupPage />
      </section>
    </>
  );
}

export default App;
