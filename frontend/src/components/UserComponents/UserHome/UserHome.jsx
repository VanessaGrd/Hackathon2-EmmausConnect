import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./UserHome.module.css";

export default function UserHome() {
  return (
    <div className={styles.userhome_container}>
      <Link to="smartphone">
        <div className={styles.home_box}>
          <div className={styles.overlay}>
            <Button variant="contained">Évaluer un téléphone</Button>
          </div>
        </div>
      </Link>
      <Link to="smartphone">
        <div className={styles.home_box2}>
          <div className={styles.overlay}>
            <Button variant="contained">Voir la FAQ</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
