const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const smartphoneControllers = require("./controllers/smartphoneController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// ---------   Route for Users --------------

// Route for posting smartphone
router.post("/submit-phone", smartphoneControllers.add);
// Route for getting the phone list
router.get("/smartphone", smartphoneControllers.getAllTelephones);

const { getUserByNameMiddleware } = require("./controllers/authControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

// public routes (Auth)
router.post("/login", getUserByNameMiddleware, verifyPassword);
router.get("/logout", verifyToken, logout);

// Private Routes

router.post("/users", hashPassword, userControllers.add);

module.exports = router;
