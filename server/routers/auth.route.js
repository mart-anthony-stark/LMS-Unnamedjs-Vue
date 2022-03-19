const UserController = require("../controllers/auth.controller");
const { catcher } = require("unnamed-js/utils");
const Admin = require("../models/Admin.model");

module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  POST("/register", catcher(UserController.register));
  POST("/login", catcher(UserController.login));
};
