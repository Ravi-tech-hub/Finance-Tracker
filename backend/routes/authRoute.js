const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authControllers");
authRouter.post("/login", authController.postlogin);
authRouter.post("/signup", authController.postsignup);
module.exports = authRouter;
