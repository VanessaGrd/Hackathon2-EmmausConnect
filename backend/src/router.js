const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

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
const userControllers = require("./controllers/userControllers");

router.post("/users", hashPassword, userControllers.add);

module.exports = router;
