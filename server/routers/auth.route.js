const UserController = require("../controllers/auth.controller");
const { catcher } = require("unnamed-js/utils");
const Admin = require("../models/Admin.model");

const getAdmins = async (req, res) => {
  // const admins = await Admin.find();
  req.admins = "admins";
};
module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", { beforeEnter: [getAdmins] }, catcher(UserController.getAllUsers));
};
