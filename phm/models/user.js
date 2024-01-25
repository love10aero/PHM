const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    // Define los campos del modelo aquí
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Agrega más campos según sea necesario
  });

  // Define las relaciones con otros modelos si las hay
  // Por ejemplo, si tienes una relación con el modelo "Post", puedes hacerlo aquí

  return User;
};
