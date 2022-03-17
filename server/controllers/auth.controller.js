const Admin = require("../models/Admin.model");

module.exports = {
  getAllUsers: async (request, response) => {
    const admins = await Admin.find();
    console.log("handler");
    response.send({ admins: "request.admins", admins: request.admins });
  },
};
