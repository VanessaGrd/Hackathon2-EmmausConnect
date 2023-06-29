import { useFormik } from "formik";
import { Typography, Button, Box, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
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
  const boxStyle = {
    width: "70vw",
    height: "60vh",
  };
  const buttonStyle = {
    backgroundColor: "rgb(158, 68, 68)",
  };
  const typographyStyle = {
    letterSpacing: "2px",
    textAlign: "center",
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        style={boxStyle}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5" style={typographyStyle}>
          Création profile utilisateur
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            name="lastname"
            label="Nom"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Prénom"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Mot de passe"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Box>
        <Button type="submit" variant="contained" style={buttonStyle}>
          <Typography variant="button">Créer </Typography>
        </Button>
      </Box>
      <ToastContainer />
    </form>
  );
}
