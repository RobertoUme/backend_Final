const { Schema, model } = require("mongoose");

const ComercioSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    nome_da_rua: {
      type: String,
      required: true
    },
    numero_da_rua: {
      type: Number,
      required: true
    },
    bairro_do_comercio: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);
module.exports = model("Comercio", ComercioSchema);
