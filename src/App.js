import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
// import PageNotFound from "./pages/PageNotFound";
// import SignUp from "./pages/Sigup/Sigup.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact={true} />
      {/* <Route path="/register" element={<SignUp />} /> */}
      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
export default App;
