const { Schema, model } = require("mongoose");

const CotacaoSchema = new Schema(
  {
    mes: {
      type: Number,
      required: true
    },
    commerce_id: {
      type: String,
      required: true
    },
    user_id: {
      type: String,
      required: true
    },
    lista: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Cotacao", CotacaoSchema);
