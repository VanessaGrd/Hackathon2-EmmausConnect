import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./TestSmartphone.module.css";
import filterSmartphone from "./AlgoSmartphone";

export default function TestSmartphone() {
  const [smartphones, setSmartphones] = useState({
    marque: "",
    model: 0,
    version: "",
    OS: "",
    ram: 0,
    stockage: 0,
    date: "",
    olderness: "",
    reseau: "",
    accessories: "",
    state: "",
    categorie: "",
  });

  const handleChangeValue = (e) => {
    setSmartphones({ ...smartphones, [e.target.name]: e.target.value });
  };

  //   const smartphones = {
  //     version: "IOS",
  //     model: 10,
  //     RAM: "6",
  //     stockage: 64,
  //     date: "2021",
  //     olderness: "",
  //     reseau: "4G",
  //     accessories: true,
  //     state: 3,
  //     categorie: "",
  //   };

  const handleValid = () => {
    filterSmartphone(smartphones);
  };
  console.info(smartphones);
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
        name="OS"
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
            <MenuItem value={false}>Non</MenuItem>
            <MenuItem value>Oui</MenuItem>
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
            <MenuItem value={0}>DEEE</MenuItem>
            <MenuItem value={1}>Réparable</MenuItem>
            <MenuItem value={2}>Bloqué</MenuItem>
            <MenuItem value={3}>Recondiationnable</MenuItem>
            <MenuItem value={4}>Reconditionné</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleValid}>
        Envoyer
      </Button>
    </div>
  );
}
