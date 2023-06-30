import PropTypes from "prop-types";
import Apple from "../../../assets/logo-apple.png";
import Android from "../../../assets/logo-android.png";
import styles from "./TelephoneCard.module.css";

export default function TelephoneCard({ smartphone }) {
  const getLogo = () => {
    if (smartphone.operating_system === "IOS") {
      return Apple;
    }
    if (smartphone.operating_system === "android") {
      return Android;
    }
    return null;
  };
  return (
    <div className={styles.telephone_card_container}>
      <div className={styles.img_section}>
        <img className={styles.img_logo} src={getLogo()} alt="logo" />
      </div>
      <div className={styles.brand_section}>
        <p>
          OS: <span>{smartphone.operating_system}</span>{" "}
        </p>
        <p>
          Marque: <span>{smartphone.model}</span>{" "}
        </p>
        <p>
          Modèle: <span>{smartphone.brand}</span>
        </p>
        <p>
          Version: <span>{smartphone.version_os}</span>
        </p>
      </div>
      <div className={styles.model_section}>
        <p>
          RAM: <span>{smartphone.ram}</span>
        </p>
        <p>
          Stockage: <span>{smartphone.storage_memory}</span>
        </p>
        <p>
          Année de première utilisation: <span>{smartphone.start_up}</span>
        </p>
        <p>
          Réseau: <span>{smartphone.network}</span>
        </p>
      </div>
      <div className={styles.price_section}>
        <p>
          Accessoire: <span>{smartphone.accessorie}</span>
        </p>
        <p>
          Catégorie: <span>{smartphone.category}</span>
        </p>
        <p>
          Prix: <span className={styles.price_final}>{smartphone.price} €</span>
        </p>
      </div>
    </div>
  );
}

TelephoneCard.propTypes = {
  smartphone: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      operating_system: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      version_os: PropTypes.string.isRequired,
      ram: PropTypes.string.isRequired,
      storage_memory: PropTypes.string.isRequired,
      start_up: PropTypes.number.isRequired,
      network: PropTypes.string.isRequired,
      accessorie: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
