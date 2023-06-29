import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";
import { useUserContext } from "../../contexts/userContext";
import APIService from "../../services/APIService";

export default function Login() {
  const { login } = useUserContext();
  const [userInfos, setUserInfos] = useState({ lastname: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`/login`, userInfos);
      if (res) {
        login(res.data);
        if (res.data.roles === "admin") {
          navigate("/admin/home");
        } else {
          navigate("/user/home");
        }
      } else {
        throw new Error();
      }
    } catch {
      if (error.response?.status === 401) {
        setError("Les informations d'identification sont incorrectes.");
      } else {
        setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    }
  };
  const handleChange = (e) => {
    setUserInfos({
      ...userInfos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.login_box}>
        <form action="login" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Nom</label>
            <input
              type="lastname"
              name="lastname"
              id="lastname"
              required="required"
              placeholder="votre nom"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              required="required"
              placeholder="........"
              onChange={handleChange}
            />
            <button type="submit">Connexion</button>
          </div>
        </form>

        {/* <TextField
          id="outlined-basic"
          label="Nom d'utilisateur"
          variant="outlined"
          value={userInfos.lastname}
        />
        <TextField
          id="outlined-basic"
          label="Mot de passe"
          variant="outlined"
          value={userInfos.password}
        /> */}

        {/* <Link to="/home">
          <Button type="button" variant="contained">
            User
          </Button>
        </Link>
        <Link to="/admin">
          <Button type="button" variant="contained">
            Admin
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
