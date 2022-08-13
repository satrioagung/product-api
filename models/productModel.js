const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Product = db.define(
  "products",
  {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;

// generete table if don't exist
// (async () => {
//   await db.sync();
// })();
