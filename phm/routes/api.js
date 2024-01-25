const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Importa el modelo de usuario

// Ruta para obtener todos los pacientes
router.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await User.findAll(); // Utiliza el método findAll del modelo User
    res.json(pacientes);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para agregar un nuevo paciente
router.post('/pacientes', async (req, res) => {
  const { nombre, edad, enfermedad } = req.body; // Recupera los datos del cuerpo de la solicitud
  try {
    await User.create({ nombre, edad, enfermedad }); // Utiliza el método create del modelo User
    res.status(201).json({ message: 'Paciente agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar paciente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Otras rutas de la API pueden ir aquí

module.exports = router;
