const { Schema, model } = require("mongoose");

const ServicosSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    fazenda_id: {
      type: String,
      required: true
    },
    dia:{
      type: Date,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    tipodeservico: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Servicos", ServicosSchema);
