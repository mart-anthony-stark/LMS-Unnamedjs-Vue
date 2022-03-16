const UserController = require("../controllers/auth.controller");
const catcher = require("../utils/catcher.util");

module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", catcher(UserController.getAllUsers));
};
