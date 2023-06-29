import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./UserHome.module.css";

export default function UserHome() {
  return (
    <div className={styles.userhome_container}>
      <h1>UserHome</h1>
      <Link to="/user/smartphone">
        <Button type="button" variant="contained">
          User
        </Button>
      </Link>
      <nav>
        <ul>
          <Link to="/user/home">Home</Link>
        </ul>
      </nav>
    </div>
  );
}
