const { default: mongoose } = require("mongoose");
const cors = require("cors");

express = require("express");
app = express();
path = require("path");
const DB_PATH =
  "mongodb+srv://root:Ravi511104%40@learing.5i39vit.mongodb.net/Finance_Tracker?retryWrites=true&w=majority&appName=Learing";
const authRouter = require("./routes/authRoute");
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
const PORT = 3001;
mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Database connected Successfully");
    app.listen(PORT, () => {
      console.log(`Sever is running on http:://localhost${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting Mongooes", err);
  });
