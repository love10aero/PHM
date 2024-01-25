const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/ejemplo', (req, res) => {
  res.json({ mensaje: 'Esta es una respuesta de ejemplo desde la API' });
});

module.exports = router;
