const models = require("../models");

const getUserByNameMiddleware = (req, res, next) => {
  const { lastname } = req.body;
  models.user
    .findByNameWithPassword(lastname)
    .then(([users]) => {
      if (users[0]) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByNameMiddleware,
};
