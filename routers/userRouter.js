const express = require("express");
const router = express.Router();

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
