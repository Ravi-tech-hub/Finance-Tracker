const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controller/authcontroller");
const upload = require("../middleware/uploadMiddleware");

const route = express.Router();
route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/getUser", protect, getUserInfo);
route.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file Upload" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});
module.exports = route;
