import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import AdminHome from "./components/AdminComponents/AdminHome/AdminHome";
import UserHome from "./components/UserComponents/UserHome/UserHome";
import TestNewSmartphone from "./components/UserComponents/TestNewSmartphone/TestNewSmartphone";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/" element={<Home />}>
          <Route index element={<UserHome />} />
          <Route path="smartphone" element={<TestNewSmartphone />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
