import "./App.css";
import SigninPage from "./pages/SigninPage";
import { Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import CandidateSignupPage from "./pages/CandidateSignupPage";

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route
          path="/candidate/signin"
          element={<SigninPage USER_TYPE="CANDIDATE" />}
        />
        <Route path="/candidate/signup" element={<CandidateSignupPage />} />
      </Routes>
    </>
  );
}

export default App;
