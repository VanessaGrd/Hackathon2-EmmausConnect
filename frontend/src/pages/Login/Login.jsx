import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.login_page}>
      <div className={styles.login_box}>
        <TextField
          id="outlined-basic"
          label="Nom d'utilisateur"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Mot de passe"
          variant="outlined"
        />
        <Link to="/home">
          <Button type="button" variant="contained">
            User
          </Button>
        </Link>
        <Link to="/admin">
          <Button type="button" variant="contained">
            Admin
          </Button>
        </Link>
      </div>
    </div>
  );
}
