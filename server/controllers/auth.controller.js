const Admin = require("../models/Admin.model");

module.exports = {
  getAllUsers: async (request, response) => {
    // const admins = await Admin.findById("65a4d");
    response.send({ admins: "request.admins", admins: request.admins });
  },
};
