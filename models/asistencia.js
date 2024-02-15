const mongoose = require('mongoose');

const AsistenciaSchema = new mongoose.Schema({
  Asistencianame: String,
  cedula: String,
  password: String,
  codigo: String,
  tipo: String,
  zona: String,
  estado: Boolean,
  aprobacion: Boolean,
  coordinador: String,
  


});

const Asistencia = mongoose.model('Asistencia', AsistenciaSchema, 'Asistencias');

module.exports = Asistencia;
