const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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
      set(value) {
        // Hash de la contraseña antes de almacenarla
        const hashedPassword = bcrypt.hashSync(value, 10); // 10 es el costo de hashing (puedes ajustarlo según tus necesidades)
        this.setDataValue('password', hashedPassword);
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // Agrega más campos según sea necesario
  });

  // Define las relaciones con otros modelos si las hay
  // Por ejemplo, si tienes una relación con el modelo "Post", puedes hacerlo aquí

  return User;
};
