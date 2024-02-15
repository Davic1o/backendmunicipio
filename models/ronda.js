const mongoose = require('mongoose');

const RondaSchema = new mongoose.Schema({
    idUsuario:String,
    horadeRonda: String,
    diadeRonda:String,
    mesdeRonda: String,
    AnioRonda: String,
  


});

const Ronda = mongoose.model('Ronda', RondaSchema, 'Rondas');

module.exports = Ronda;
