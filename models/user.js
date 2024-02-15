const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  cedula: String,
  password: String,
  codigo: String,
  tipo: String,
  zona: String,
  estado: Boolean,
  aprobacion: Boolean,
  coordinador: String,
});

const User = mongoose.model('User', UserSchema, 'Users');

module.exports = User;
