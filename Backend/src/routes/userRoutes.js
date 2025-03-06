const express = require ("express");
const router = express.Router();
const { signUp, logIn, getUserProfile, logOut } = require("../controller/userController");
const authMiddleware = require ("../middleware/authMiddleware");

router.post("/register", signUp)
router.post("/login", logIn)
router.get("/profile", authMiddleware, getUserProfile)
router.post("/logout", logOut)

module.exports = router