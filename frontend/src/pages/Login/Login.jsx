import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";
import { useUserContext } from "../../contexts/userContext";
import APIService from "../../services/APIService";
import logoEmmaus from "../../assets/logoemmaus.png";
import bgEc from "../../assets/bglogin.png";

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
          navigate("/admin/");
        } else {
          navigate("/user/");
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
  const buttonStyle = {
    backgroundColor: "rgb(39, 35, 80)",
  };
  return (
    <div className={styles.login_page}>
      <img className={styles.imgbg} src={bgEc} alt="bgEc" />

      <div className={styles.titleandformContainer}>
        <img className={styles.logo} src={logoEmmaus} alt="logoEmmaus" />

        <div className={styles.login_box}>
          <h3>Veuillez rentrer vos identifiants</h3>
          <form action="login" onSubmit={handleSubmit}>
            <div>
              <TextField
                type="lastname"
                name="lastname"
                id="lastname"
                label="Votre nom"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                type="password"
                name="password"
                id="password"
                label="Password"
                onChange={handleChange}
              />
              <Button variant="contained" type="submit" style={buttonStyle}>
                Connexion
              </Button>
              <p>{error}</p>
            </div>
          </form>
        </div>
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
