const mongooes = require("mongoose");
const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGO_URL, {});
    console.log("Databse connect successfully");
  } catch (err) {
    console.log("Error occured to connect to mongoDb", err);
    process.exit(1);
  }
};
module.exports = connectDB;
