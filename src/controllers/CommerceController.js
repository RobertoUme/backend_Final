const Comercio = require("../models/Comercio");
module.exports = {
  async store(req, res) {
    const comercio = await Comercio.create(req.body);
    return res.json(comercio);
  },
  async list(req, res) {
    const comercio = await Comercio.find({});
    return res.json(comercio);
  },
  async index(req, res) {
    const comercio = await Comercio.findOne({ _id: req.params.id });
    return res.json(comercio);
  },
  async update(req, res) {
    const comercio = await Comercio.findByIdAndUpdate(req.params.id ,req.body,{new:true});
    return res.json(comercio);
  },
  async destroy(req, res){
    await Comercio.deleteOne({_id: req.params.id});
    return res.json({message:"Exclusão realizada com sucesso!"});
  }
};