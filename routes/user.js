const express = require('express');
const User = require('../models/user');

const router = express.Router();
router.use(express.json());

// Endpoint para registrar un nuevo usuario
// Endpoint para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    try {
      const { username, cedula, password, zona, codigo, tipo, coordinador} = req.body;
  
      // Validar que todos los campos requeridos estén presentes
      if (!username || !cedula || !password || !zona || !tipo) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
      }
  
      // Realizar cualquier otra validación necesaria según tus requisitos
  
      // Crear un nuevo usuario en la base de datos
      const newUser = new User({
        username,
        cedula,
        password,
        zona,
        codigo,
        tipo,
        estado: false,
        aprobacion: false,
        coordinador,
      });
  
      // Guardar el nuevo usuario en la base de datos
      await newUser.save();
  
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
  

// Endpoint para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios. Consulta la consola para más detalles.' });
  }
});

// Endpoint para actualizar un usuario por su ID
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, estado, aprobacion, coordinador } = req.body;

    // Validar y sanitizar los datos según tus necesidades
    // ...coordinador

    const updateFields = {};
    if (tipo) {
      updateFields.tipo = tipo;
    }
    if (estado !== undefined) {
      updateFields.estado = estado;
    }
    if (aprobacion !== undefined) {
      updateFields.aprobacion = aprobacion;
    }
    if (coordinador !== undefined) {
        updateFields.coordinador = coordinador;
      }

    // Actualizar el usuario por su ID
    const updatedUser = await User.findByIdAndUpdate(
        id,
        updateFields,
        { new: true } // Devolver el documento actualizado
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error al actualizar usuario. Consulta la consola para más detalles.' });
    }
  });
  

module.exports = router;



