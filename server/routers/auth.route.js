const UserController = require("../controllers/auth.controller");
const { catcher } = require("unnamed-js/utils");

module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", catcher(UserController.getAllUsers));
};
