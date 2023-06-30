import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./AdminHome.module.css";

export default function AdminHome() {
  return (
    <div className={styles.admin_home_container}>
      <Link to="telephone-list">
        <div className={styles.admin_box}>
          <div className={styles.overlay}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(158, 68, 68)" }}
            >
              Voir les Stocks
            </Button>
          </div>
        </div>
      </Link>
      <Link to="create-user">
        <div className={styles.admin_box2}>
          <div className={styles.overlay}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(158, 68, 68)" }}
            >
              Ajouter un Utilisateur
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
