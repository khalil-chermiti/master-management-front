import "./App.css";
import SigninPage from "./pages/SigninPage";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MasterListPage from "./pages/MasterListPage";
import { authContext } from "./contexts/AuthContext";
import ApplicationsPage from "./pages/ApplicationsPage";
import NavBarComponent from "./components/NavBarComponent";
import CandidateSignupPage from "./pages/CandidateSignupPage";
import getLoggedCandidateAPI from "./apis/GetLoggedCandidateApi";

function App() {
  const { hydrateAuth, auth, setCandidate } = useContext(authContext)!;

  useEffect(() => {
    async function hydrateAndGetLoggedCandidate() {
      hydrateAuth();
      console.log(auth.token);
      const candidate = await getLoggedCandidateAPI(auth.token);
      if (candidate.success === true) setCandidate(candidate.data);
    }
    hydrateAndGetLoggedCandidate();
  }, [auth.token]);

  useEffect(() => {
    async function getCandidate() {
      const response = await getLoggedCandidateAPI(auth.token);
      if (response.success === true) setCandidate(response.data);
    }
    getCandidate();
  }, []);

  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/" element={<MasterListPage />} />
        <Route
          path="/candidate/signin"
          element={<SigninPage USER_TYPE="CANDIDATE" />}
        />
        <Route path="/candidate/signup" element={<CandidateSignupPage />} />

        <Route path="/master" element={<MasterListPage />} />
      </Routes>
    </>
  );
}

export default App;
