const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { check, validationResult } = require("express-validator");

exports.postlogin = async (req, res, next) => {
  console.log("Post login called");
  const { email, password } = req.body;
  console.log(password);
  // console.log(user.password);
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Passsword" });
    }
    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    return res.status(200).json({
      message: "Login Successful!",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
exports.postsignup = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name should be at least 2 character long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name should contain only Alphabets"),

  check("lastName")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Last name should contain only Alphabets"),

  check("email")
    .isEmail()
    .withMessage("Please enter a valid Email")
    .normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password Should be 8 character long")
    .matches(/[A-Z]/)
    .withMessage("Password should contain atleast  one upper case")
    .matches(/[a-z]/)
    .withMessage("Password should contain atleast  one Lower case")
    .matches(/[0-9]/)
    .withMessage("Password should contain atleast  one number")
    .matches(/[!@$&]/)
    .withMessage("Password should contain atleast  one special character")
    .trim(),

  async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "user already exist" });
      }
      const hashpassword = await bcrypt.hash(password, 12);
      user = new User({
        firstName,
        lastName,
        email,
        password: hashpassword,
      });

      await user.save();
      const token = jwt.sign({ id: user._id }, "secretkey", {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "user Register", token });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },
];
