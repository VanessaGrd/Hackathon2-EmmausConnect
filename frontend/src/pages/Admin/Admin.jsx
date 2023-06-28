import { Outlet } from "react-router-dom";
import styles from "./Admin.module.css";
import AdminNavBar from "../../components/AdminComponents/AdminNavBar/AdminNavBar";

export default function Admin() {
  return (
    <>
      <AdminNavBar />
      <div className={styles.admin_page}>
        <Outlet />
      </div>
    </>
  );
}
