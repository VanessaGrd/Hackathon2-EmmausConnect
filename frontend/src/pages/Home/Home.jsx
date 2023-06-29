import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.home_page}>
        <Outlet />
      </div>
    </div>
  );
}
