import { useFormik } from "formik";
import { Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import APIService from "../../services/APIService";
import "react-toastify/dist/ReactToastify.css";

export default function InscriptionForm() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
    },

    onSubmit: () => {
      APIService.post(`/users`, formik.values)
        .then(() => {
          toast.success("Le compte a été créé avec succès", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            toast.error("Problème lors de l'inscription", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Nom</label>
      <input
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />

      <label htmlFor="firstName">Prénom</label>

      <input
        name="firstname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />

      <label htmlFor="hashedPassword">Mot de passe</label>

      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Button type="submit" variant="contained" size="large">
        <Typography variant="button" fontSize={24}>
          Valider{" "}
        </Typography>
      </Button>
    </form>
  );
}
