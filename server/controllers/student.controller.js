const Student = require("../models/Student.model");

module.exports = {
  getAllStudent: async (req, res) => {
    const students = await Student.find();
    res.send(students);
  },
};
