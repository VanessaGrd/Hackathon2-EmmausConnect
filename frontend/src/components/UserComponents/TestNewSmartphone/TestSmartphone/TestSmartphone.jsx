import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./TestSmartphone.module.css";
import filterSmartphone from "../AlgoSmartphone";
import ModalWrapper from "../../../ModalWrapper/ModalWrapper";
import ResumeModal from "../ResumeModal/ResumeModal";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function TestSmartphone() {
  const [openModal, setOpenModal] = useState(false);
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = () => toast.error("Un problème est survenu");
  const [smartphones, setSmartphones] = useState({
    marque: "",
    model: "",
    os: "",
    version: "",
    ram: "",
    stockage: "",
    date: "",
    olderness: "",
    reseau: "",
    accessories: "",
    state: "",
    categorie: "",
    price: "",
  });

  smartphones.olderness =
    new Date().getFullYear() - parseInt(smartphones.date, 10);

  const handleChangeValue = (e) => {
    setSmartphones({ ...smartphones, [e.target.name]: e.target.value });
  };

  const handleValid = () => {
    filterSmartphone(smartphones);
    setOpenModal(true);
  };
  console.info(smartphones);

  const handleValidate = () => {
    axios
      .post(`${BACKEND_URL}/submit-phone`, smartphones)
      .then((res) => {
        if (res.status === 200) {
          notifySuccess("Le télephone à été ajouté");
        } else {
          notifyFail();
        }
      })
      .catch((err) => console.error(err));
    setOpenModal(false);
  };
  return (
    <div className={styles.testsmartphone_container}>
      <TextField
        id="outlined-basic"
        label="Marque"
        name="marque"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Modèle"
        name="model"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="OS"
        name="os"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Version"
        name="version"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="RAM"
        name="ram"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Stockage"
        name="stockage"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Année de première utilisation"
        name="date"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Réseau"
        name="reseau"
        onChange={handleChangeValue}
        variant="outlined"
      />
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Câble / Chargeur
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="accessories"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={0}>Non</MenuItem>
            <MenuItem value={1}>Oui</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">État</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="state"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={0}>DEEE</MenuItem>
            <MenuItem value={1}>Réparable</MenuItem>
            <MenuItem value={2}>Bloqué</MenuItem>
            <MenuItem value={3}>Recondiationnable</MenuItem>
            <MenuItem value={4}>Reconditionné</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        sx={{ marginBottom: 10 }}
        variant="contained"
        onClick={handleValid}
      >
        Envoyer
      </Button>
      {openModal && (
        <ModalWrapper closeModal={setOpenModal} isCloseBtn>
          <ResumeModal resume={smartphones} actionBtn={handleValidate} />
        </ModalWrapper>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
