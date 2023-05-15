import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { ApplicationContextProvider } from "./contexts/ApplicationsContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <ApplicationContextProvider>
        <App />
      </ApplicationContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
