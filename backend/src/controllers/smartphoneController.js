const models = require("../models");

const browse = (req, res) => {
  models.smartphone
    .findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const add = (req, res) => {
  const smartphone = req.body;

  models.smartphone
    .insert(smartphone)
    .then(([result]) => {
      res.location(`/smartphones/${result.insertId}`).sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllTelephones = (req, res) => {
  models.smartphone
    .findAllSmartphones()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

module.exports = {
  browse,
  add,
  getAllTelephones,
};
