import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function App() {
  const loginStatus = useAuth();
  const location = useLocation();

  console.log(loginStatus);
  if (loginStatus) {
    return <Navigate to="/dashboard" state={location} replace />;
  }

  return <></>;
}

export default App;
