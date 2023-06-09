import "./App.css";
import SigninPage from "./pages/SigninPage";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MasterListPage from "./pages/MasterListPage";
import { authContext } from "./contexts/AuthContext";
import ApplicationsPage from "./pages/ApplicationsPage";
import getLoggedAdminAPI from "./apis/getLoggedAdminApi";
import NavBarComponent from "./components/NavBarComponent";
import CandidateSignupPage from "./pages/CandidateSignupPage";
import getLoggedCandidateAPI from "./apis/GetLoggedCandidateApi";
import AddMasterComponent from "./components/AddMasterComponent";
import UpdateMasterComponent from "./components/updateMasterComponent";
import ApplicationsPerMasterPage from "./pages/ApplicationsPerMasterPage";

function App() {
  const { hydrateAuth, auth, setUser, persistAuth } = useContext(authContext)!;

  // fetch logged candidate data when we get token from local storage or after login
  useEffect(() => {
    async function GetLoggedCandidate() {
      if (auth.token && auth.role === "CANDIDATE") {
        const candidate = await getLoggedCandidateAPI(auth.token);
        if (candidate.success === true) setUser(candidate.data);
      }

      if (auth.token && auth.role === "ADMIN") {
        const candidate = await getLoggedAdminAPI(auth.token);
        if (candidate.success === true) setUser(candidate.data);
      }
    }
    GetLoggedCandidate();
  }, [auth.token]);

  // hydrate auth object on page load
  useEffect(() => {
    hydrateAuth();
  }, []);

  // persist auth on auth change
  useEffect(() => {
    persistAuth();
  }, [auth]);

  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<MasterListPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />

        <Route
          path="/candidate/signin"
          element={<SigninPage USER_TYPE="CANDIDATE" />}
        />

        <Route path="/candidate/signup" element={<CandidateSignupPage />} />
        <Route path="/admin" element={<SigninPage USER_TYPE="ADMIN" />} />
        <Route path="/master" element={<MasterListPage />} />
        <Route path="/master/add" element={<AddMasterComponent />} />
        <Route path="/master/update/:id" element={<UpdateMasterComponent />} />
        <Route
          path="/master/:masterID/applications"
          element={<ApplicationsPerMasterPage />}
        />
      </Routes>
    </>
  );
}

export default App;
