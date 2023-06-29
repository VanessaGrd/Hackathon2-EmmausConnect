import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styles from "./TestNewSmartphone.module.css";
import TestSmartphone from "./TestSmartphone/TestSmartphone";
import ExistingSmartphone from "./ExistingSmartphone/ExistingSmartphone";

export default function TestNewSmartphone() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.testnewsmartphone_container}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Téléphone Existant" value="1" />
              <Tab label="Nouveau Téléphone" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ExistingSmartphone />
          </TabPanel>
          <TabPanel value="2">
            <TestSmartphone />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
