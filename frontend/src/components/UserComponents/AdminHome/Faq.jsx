import React, { useState } from "react";
import { Typography, Button, Box, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Faq.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question:
        "Comment estimer la décote en fonction de l'état du téléphone ?",
      answer:
        "La décote en fonction de l'état du téléphone est évaluée en tenant compte de divers facteurs tels que le reconditionnement, le blocage du smartphone et la réparabilité",
    },
    {
      id: 2,
      question:
        "Quels sont les critères pour évaluer les caractéristiques du téléphone ?",
      answer:
        "Les caractéristiques du téléphone, tels que le modèle, la capacité de stockage, la version du système d'exploitation, etc., sont pris en compte dans l'estimation du prix de vente. Notre guide d'évaluation contient une liste détaillée des caractéristiques spécifiques prises en compte.",
    },
    {
      id: 3,
      question:
        "Pouvez-vous donner des exemples de catégories d'état et leurs décotes correspondantes ?",
      answer:
        "Bien sûr ! Par exemple, un téléphone en excellent état pourrait avoir une décote de 10%, tandis qu'un téléphone avec des dommages importants pourrait avoir une décote de 50% ou plus. Les pourcentages exacts peuvent varier en fonction des critères spécifiques d'évaluation.",
    },
    {
      id: 4,
      question:
        "Que se passe-t-il si un téléphone na pas daccessoires supplémentaires ?",
      answer:
        "Si un téléphone nest pas accompagné d'accessoires supplémentaires tels que des chargeurs il ne pourra pas être accepté,",
    },
    {
      id: 5,
      question:
        "Est-ce que les téléphones avec des problèmes logiciels sont acceptés ?",
      answer:
        "Oui, nous acceptons les téléphones présentant des problèmes logiciels, mais cela peut entraîner une décote plus importante. Veuillez noter que nous ne rachetons pas les téléphones dont les problèmes logiciels sont irréparables ou qui sont bloqués par un compte iCloud ou Google.",
    },
    {
      id: 6,
      question: "Comment est fixé le prix du téléphone ?",
      answer:
        "Le prix est fixé en fonction de la date de mise en circulation, de la mémoire et du stockage du téléphone.",
    },
  ];
  const noticeQuestions = [
    {
      id: 7,
      question: "Comment créer un compte sur le site ?",
      answer:
        "Pour créer un compte, rendez-vous sur la page d'inscription et remplissez le formulaire avec vos informations personnelles. Une fois le formulaire soumis, vous recevrez un e-mail de confirmation contenant les instructions pour activer votre compte.",
    },
    {
      id: 8,
      question:
        "Comment ajouter un téléphone à la liste des produits à vendre ?",
      answer:
        'Pour ajouter un téléphone à la liste des produits à vendre, connectez-vous à votre compte et accédez à la section "Evaluer un smartphone". Remplissez les informations requises telles que le modèle, létat, les caractéristiques, les accessoires inclus, etc.',
    },
    {
      id: 9,
      question: "Comment estimer le prix de vente d'un téléphone ?",
      answer:
        "Pour estimer le prix de vente d'un téléphone, utilisez l'outil d'estimation en fournissant les détails sur l'état du téléphone et ses caractéristiques. L'outil calculera automatiquement une estimation basée sur les critères préétablis.",
    },
  ];
  const handleQuestion = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };
  const [text, setText] = useState("");

  const handleMessage = () => {
    setText("");
    toast.success("Votre question a été envoyée avec succès !");
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>FAQ</h1>
      <div className={styles.faqContainer}>
        <div className={styles.generalQuestions}>
          <h3>Questions générales </h3>
          {questions.map((quest) => (
            <div key={quest.id}>
              <button type="button" onClick={() => handleQuestion(quest.id)}>
                {quest.question}
              </button>
              {selectedQuestion === quest.id && <p>{quest.answer}</p>}
            </div>
          ))}
        </div>
        <div className={styles.explainQuestions}>
          <h3>Fonctionnement du site </h3>
          {noticeQuestions.map((quest) => (
            <div key={quest.id}>
              <button type="button" onClick={() => handleQuestion(quest.id)}>
                {quest.question}
              </button>
              {selectedQuestion === quest.id && <p>{quest.answer}</p>}
            </div>
          ))}
        </div>

        <h5>
          Aucune des questions proposées ne répond à vos interrogations ?
          Envoyez-nous votre question !{" "}
        </h5>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          height="120px"
        >
          <TextField
            id="outlined-basic"
            label="Une question ?"
            type="text"
            sx={{ width: 250, marginBottom: 3 }}
            value={text}
            onChange={handleText}
          />

          <Button type="button" variant="contained" onClick={handleMessage}>
            <Typography variant="button">Envoyer </Typography>
          </Button>
        </Box>
      </div>
      <ToastContainer />
    </div>
  );
}
