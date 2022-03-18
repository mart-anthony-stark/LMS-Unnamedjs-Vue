const Admin = require("../models/Admin.model");
const { createToken } = require("../utils/token.util");

module.exports = {
  register: async (request, response) => {
    const admin = new Admin(request.body);
    await admin.save();

    admin._doc.password = undefined;

    const token = createToken({ admin });
    response.send({ admin: admin._doc, token });
  },
};
