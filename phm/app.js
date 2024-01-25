const express = require('express');
const { Sequelize } = require('sequelize');
const userModel = require('./models/user'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

// Configura Sequelize y crea una instancia
const sequelize = new Sequelize({
  dialect: 'postgresql', // Cambia a 'postgresql' para PostgreSQL
  database: 'PHM', // Cambia al nombre de tu base de datos
  username: 'David', // Cambia al nombre de usuario de tu base de datos
  password: 'DMD.solutions1', // Cambia a la contraseña de tu base de datos
});

// Crea el modelo de usuario
const User = userModel(sequelize);

// Sincroniza el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelo de usuario sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo de usuario:', error);
  });

// Resto de la configuración de tu aplicación Express aquí

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
