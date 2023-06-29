import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./ExistingSmartphone.module.css";
import filterSmartphone from "../AlgoSmartphone";

export default function ExistingSmartphone() {
  const [smartphones, setSmartphones] = useState({
    marque: "",
    model: "",
    OS: "",
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

  // const thesmartphones = {
  //   OS: "IOS",
  //   version: 12,
  //   ram: 6,
  //   stockage: 64,
  //   date: "2021",
  //   olderness: 2,
  //   reseau: "4G",
  //   accessories: 1,
  //   state: 3,
  //   categorie: "",
  // };

  smartphones.olderness =
    new Date().getFullYear() - parseInt(smartphones.date, 10);

  const handleChangeValue = (e) => {
    setSmartphones({ ...smartphones, [e.target.name]: e.target.value });
  };

  const handleValid = () => {
    filterSmartphone(smartphones);
  };
  console.info(smartphones);
  return (
    <div className={styles.testsmartphone_container}>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="accessories"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={0}>Apple</MenuItem>
            <MenuItem value={1}>Android</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
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
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stockage</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="accessories"
            label="État"
            onChange={handleChangeValue}
          >
            <MenuItem value={undefined}>Please Select</MenuItem>
            <MenuItem value={0}>8Go</MenuItem>
            <MenuItem value={1}>16Go</MenuItem>
            <MenuItem value={2}>32Go</MenuItem>
            <MenuItem value={3}>64Go</MenuItem>
            <MenuItem value={4}>128Go</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">RAM</InputLabel>
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
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
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
    </div>
  );
}
