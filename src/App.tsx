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

  // fetch logged candidate data when we get token from local storage or after login
  useEffect(() => {
    async function hydrateAndGetLoggedCandidate() {
      if (auth.token) {
        const candidate = await getLoggedCandidateAPI(auth.token);
        if (candidate.success === true) setCandidate(candidate.data);
      }
    }
    hydrateAndGetLoggedCandidate();
  }, [auth.token]);

  // hydrate auth object on login
  useEffect(() => {
    hydrateAuth();
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
