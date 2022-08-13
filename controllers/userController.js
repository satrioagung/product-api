const User = require("../models/UserModel");

module.exports = {
  getUser: async (req, res) => {
    try {
      const response = await User.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  },

  getUserById: async (req, res) => {
    try {
      const response = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  },

  createUser: async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).json({ msg: "User created" });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "User updated" });
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "User deleted" });
    } catch (error) {
      console.log(error.message);
    }
  },
};
