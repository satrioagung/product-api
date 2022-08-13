const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    product: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

// generete table if don't exist
// (async () => {
//   await db.sync();
// })();
