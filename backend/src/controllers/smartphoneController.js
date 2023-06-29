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
  const newsmartphone = req.body;

  models.smartphone
    .insert(newsmartphone)
    .then(([result]) => {
      res.location(`/smartphones/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
