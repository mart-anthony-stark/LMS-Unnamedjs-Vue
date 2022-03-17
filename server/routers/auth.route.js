const UserController = require("../controllers/auth.controller");
const { catcher } = require("unnamed-js/utils");
const Admin = require("../models/Admin.model");

const getAdmins = async (req, res) => {
  req.admins = "asd";
  const admins = await Admin.find();
  req.admins = admins;
  console.log("guard");
};
module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", { beforeEnter: [getAdmins] }, catcher(UserController.getAllUsers));
  GET("/ASD", (req, res) => {
    res.send("ad");
  });
};
