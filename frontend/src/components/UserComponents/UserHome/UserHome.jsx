import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./UserHome.module.css";

export default function UserHome() {
  return (
    <div className={styles.userhome_container}>
      <h1>WELCOME ON USER PAGE</h1>
      <Link to="smartphone">
        <Button type="button" variant="contained">
          Test a new smartphone
        </Button>
      </Link>
    </div>
  );
}
