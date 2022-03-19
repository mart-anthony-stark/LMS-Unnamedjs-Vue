const Admin = require("../models/Admin.model");
const bcrypt = require("bcryptjs");
const { createToken } = require("../utils/token.util");

module.exports = {
  register: async (request, response) => {
    const admin = new Admin(request.body);
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(request.body.password, salt);
    await admin.save();

    admin._doc.password = undefined;

    const token = createToken({ admin });
    response.send({ admin: admin._doc, token });
  },

  // login: async (req,res)=>{
  //   const {email, password} =
  // }
};
