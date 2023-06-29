import { NavLink } from "react-router-dom";
import styles from "./AdminNavBar.module.css";

export default function AdminNavBar() {
  return (
    <div className={styles.admin_navbar_container}>
      <h1>AdminNavbar</h1>
      <nav>
        <ul>
          <NavLink to="/admin/home">Home</NavLink>
        </ul>
      </nav>
    </div>
  );
}
