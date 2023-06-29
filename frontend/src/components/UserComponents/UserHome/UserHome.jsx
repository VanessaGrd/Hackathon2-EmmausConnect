import { NavLink } from "react-router-dom";
import styles from "./UserHome.module.css";

export default function UserHome() {
  return (
    <div className={styles.admin_navbar_container}>
      <h1>UserHome</h1>
      <nav>
        <ul>
          <NavLink to="/user/home">Home</NavLink>
        </ul>
      </nav>
    </div>
  );
}
