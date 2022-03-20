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

  login: async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) throw "Account not found.";

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) throw "Passwords do not match";

    const token = createToken({ admin });

    admin._doc.password = undefined;
    res.send({ token, admin: admin._doc });
  },
};
