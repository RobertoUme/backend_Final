const Cliente = require("../models/Cliente");
module.exports = {
  async store(req, res) {
    const cliente = await Cliente.create(req.body);
    return res.json(cliente);
  },
  async list(req, res) {
    const cliente = await Cliente.find({});
    return res.json(cliente);
  },
  async index(req, res) {
    const cliente = await Cliente.findOne({ _id: req.params.id });
    return res.json(cliente);
  },
  async update(req, res) {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id ,req.body,{new:true});
    return res.json(cliente);
  },
  async destroy(req, res){
    await cliente.deleteOne({_id: req.params.id});
    return res.json({message:"Exclusão realizada com sucesso!"});
  }
};