// Importa las dependencias necesarias
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors')
// Importa la configuración de Sequelize desde db/index.js
const db = require('./models');

const apiRoutes = require('./routes/api'); // Importa las rutas de api.js

const app = express();
const port = 3000;
// Agrega el middleware express.json() para analizar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configura Sequelize utilizando la información de config/config.json
const sequelize = db.sequelize;
app.use(cors())
// Usa las rutas de api.js
app.use('/api', apiRoutes);

// Resto de la configuración de tu aplicación Express aquí

// Inicia el servidor
sequelize.sync() // Sincroniza el modelo con la base de datos
  .then(() => {
    app.listen(port, () => {
      console.log(`El servidor está escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });
