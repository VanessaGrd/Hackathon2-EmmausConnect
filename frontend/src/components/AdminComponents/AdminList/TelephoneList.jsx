import { useEffect, useState } from "react";
import axios from "axios";
import TelephoneCard from "./TelephoneCard";
import styles from "./TelephoneList.module.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function TelephoneList() {
  const [listSmartphones, setListSmartphones] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/smartphone`)
      .then((response) => setListSmartphones(response.data))
      .catch((err) => console.error(err));
  }, []);

  console.info(listSmartphones);

  return (
    <div className={styles.telephone_list_container}>
      {listSmartphones.map((smartphone) => (
        <TelephoneCard key={smartphone.id} smartphone={smartphone} />
      ))}
    </div>
  );
}
