const express = require('express');
const Ronda = require('../models/ronda');

const router = express.Router();
router.use(express.json());

// Endpoint para registrar un nuevo usuario
// Endpoint para registrar un nuevo usuario
router.post('/registerRonda', async (req, res) => {
    try {
      const { idUsuario,  horadeRonda, diadeRonda, mesdeRonda, AnioRonda} = req.body;
  

  
      // Realizar cualquier otra validación necesaria según tus requisitos
  
      // Crear un nuevo usuario en la base de datos
      const newRonda = new Ronda({
        idUsuario,
        horadeRonda,
        diadeRonda,
        mesdeRonda,
        AnioRonda,
      });
  
      // Guardar el nuevo usuario en la base de datos
      await newRonda.save();
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
  
      // Manejar diferentes tipos de errores y proporcionar mensajes más informativos
      if (error.code === 11000) {
        return res.status(400).json({ error: 'El nombre de usuario o la cédula ya están en uso.' });
      }
  
      res.status(500).json({ error: 'Error al registrar usuario. Consulta la consola para más detalles.' });
    }
  });
  

// Endpoint para obtener todos los rondas
router.get('/rondas', async (req, res) => {
  try {
    const rondas = await Ronda.find();
    res.json(rondas);
  } catch (error) {
    console.error('Error al obtener rondas:', error);
    res.status(500).json({ error: 'Error al obtener rondas. Consulta la consola para más detalles.' });
  }
});

  

module.exports = router;