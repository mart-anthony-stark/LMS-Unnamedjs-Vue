const UserController = require("../controllers/user.controller");

module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", UserController.getAllUsers);
};
