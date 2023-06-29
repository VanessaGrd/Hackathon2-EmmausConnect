import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styles from "./ResumeModal.module.css";

export default function ResumeModal({ resume }) {
  return (
    <div className={styles.resumemodal_container}>
      <h3>Récapitulatif</h3>
      <div className={styles.resume_modal_box}>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Marque : </p>
          <p className={styles.data_text}>{resume.marque}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Modèle : </p>
          <p className={styles.data_text}>{resume.model}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>OS : </p>
          <p className={styles.data_text}>{resume.OS}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Version : </p>
          <p className={styles.data_text}>{resume.version}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>RAM : </p>
          <p className={styles.data_text}>{`${resume.ram} Go`}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Stockage : </p>
          <p className={styles.data_text}>{`${resume.stockage} Go`}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Ancienneté : </p>
          <p className={styles.data_text}>{`${resume.olderness} ans`}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Réseau : </p>
          <p className={styles.data_text}>{resume.reseau}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Catégorie : </p>
          <p className={styles.price}>{resume.categorie}</p>
        </div>
        <div className={styles.one_lign}>
          <p className={styles.bold_text}>Prix : </p>
          <p className={styles.price} id="price">{`${resume.price} €`}</p>
        </div>
        <Button
          type="button"
          variant="contained"
          sx={{ marginTop: 3, marginBottom: 2 }}
        >
          Ajouter au stock
        </Button>
      </div>
    </div>
  );
}

ResumeModal.propTypes = {
  resume: PropTypes.shape({
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    OS: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    ram: PropTypes.number.isRequired,
    stockage: PropTypes.number.isRequired,
    olderness: PropTypes.number.isRequired,
    reseau: PropTypes.string.isRequired,
    categorie: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
