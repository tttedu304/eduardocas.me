const { Schema, model } = require("mongoose");
const dbExperiencias_Cas = new Schema({
  _id: {
    type: String
  },
  titulo: {
    type: String
  },
  desc: {
    type: String
  },
  fecha: {
    type: Date,
    default: Date.now()
  }
});
const Experiencias = model("Experiencias", dbExperiencias_Cas);
exports.experiencias = Experiencias;
