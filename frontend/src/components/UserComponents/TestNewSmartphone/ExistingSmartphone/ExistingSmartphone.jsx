import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./ExistingSmartphone.module.css";
import filterSmartphone from "../AlgoSmartphone";
import ModalWrapper from "../../../ModalWrapper/ModalWrapper";
import ResumeModal from "../ResumeModal/ResumeModal";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ExistingSmartphone() {
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
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">OS</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="os"
            label="os"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value="IOS">IOS</MenuItem>
            <MenuItem value="Android">Android</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marque</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="marque"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value="Apple">Apple</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="model"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value="Iphone 12">Iphone 12</MenuItem>
            <MenuItem value="Iphone 11">Iphone 11</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Version</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="version"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={16}>16</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stockage</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="stockage"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={64}>64Go</MenuItem>
            <MenuItem value={128}>128Go</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">RAM</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="ram"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="date"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Réseau</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="reseau"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value="4G">4G</MenuItem>
            <MenuItem value="5G">5G</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
        sx={{ marginBottom: 5 }}
        variant="contained"
        onClick={handleValid}
      >
        Envoyer
      </Button>
      {openModal && (
        <ModalWrapper closeModal={setOpenModal} isCloseBtn>
          <ResumeModal resume={smartphones} actionBtn={handleValidate} />
        </ModalWrapper>)}

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
