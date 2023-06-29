import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import TestNewSmartphone from "./components/UserComponents/TestNewSmartphone/TestNewSmartphone";
import UserHome from "./components/UserComponents/UserHome/UserHome";
import AdminHome from "./components/AdminComponents/AdminHome/AdminHome";
import TelephoneList from "./components/AdminComponents/AdminList/TelephoneList";
import "./App.css";
// import RequireAuth from "./components/routes/RequireAuth";
import Home from "./pages/Home/Home";
import CreateUser from "./components/AdminComponents/CreateUser";
import Faq from "./components/UserComponents/AdminHome/Faq";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route element={<RequireAuth allowedRoles="user" />}> */}
        <Route path="user/" element={<Home />}>
          <Route index element={<UserHome />} />
          <Route path="smartphone" element={<TestNewSmartphone />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        {/* </Route><Route element={<RequireAuth allowedRoles="admin" />}> */}
        <Route path="/admin/" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="telephone-list" element={<TelephoneList />} />
          <Route path="create-user" element={<CreateUser />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
