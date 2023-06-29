// import { Outlet } from "react-router-dom";
import styles from "./Admin.module.css";
import AdminNavBar from "../../components/AdminComponents/AdminNavBar/AdminNavBar";
import CreateUser from "../../components/AdminComponents/CreateUser";

export default function Admin() {
  return (
    <>
      <AdminNavBar />
      <div className={styles.admin_page}>
        {/* <Outlet /> */}
        Homepage
      </div>
      <CreateUser />
    </>
  );
}
