const UserController = require("../controllers/auth.controller");

module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", UserController.getAllUsers);
};
