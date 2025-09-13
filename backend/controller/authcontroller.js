const User = require("../model/User");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateJwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
  console.log("Incoming body:", req.body);

  const { fullName, email, password, profileUrl } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      profileUrl,
    });

    res.status(201).json({
      id: user._id,
      user,
      token: generateJwtToken(user._id),
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fiedl are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credential" });
    }
    return res.status(200).json({
      id: user._id,
      user,
      token: generateJwtToken(user._id),
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
};
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
};
