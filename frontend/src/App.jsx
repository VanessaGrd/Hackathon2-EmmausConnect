import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";

import "./App.css";
import RequireAuth from "./components/routes/RequireAuth";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth allowedRoles="admin" />}>
          <Route path="/admin/home" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles="user" />}>
          <Route path="user/home" element={<Home />} />
        </Route>

        {/* <Route path="/home" element={<Home />}>
          <Route index element={<UserHome />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
