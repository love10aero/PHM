const express = require('express');
const router = express.Router();

const { query } = require('../db'); // Importa la función de consulta a la base de datos

// Ruta para obtener todos los pacientes
router.get('/pacientes', async (req, res) => {
  try {
    const result = await query('SELECT * FROM pacientes');
    res.json(result);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para agregar un nuevo paciente
router.post('/pacientes', async (req, res) => {
  const { nombre, edad, enfermedad } = req.body; // Recupera los datos del cuerpo de la solicitud
  try {
    await query('INSERT INTO pacientes (nombre, edad, enfermedad) VALUES ($1, $2, $3)', [nombre, edad, enfermedad]);
    res.status(201).json({ message: 'Paciente agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar paciente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Otras rutas de la API pueden ir aquí

module.exports = router;
