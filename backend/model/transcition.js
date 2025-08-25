const mongooes = require("mongoose");
const transctionSchema = mongooes.Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  category: { typs: String, required: true },
  note: { type: String },
  date: { type: Date },
  userid: { type: String, required: true },
});
module.exports = mongooes.transctionSchema("Transcition", transctionSchema);
