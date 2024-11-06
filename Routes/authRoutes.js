const express = require("express");
const {
  login,
  signup,
  updateProfile,
  getUsersByIds,
  getAllUsers,
  deleteUser,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/updateProfile/:userId", updateProfile);
router.get("/getUsersByIds", getUsersByIds);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);






module.exports = router;
