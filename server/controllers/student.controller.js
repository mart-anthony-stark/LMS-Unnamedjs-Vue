const Student = require("../models/Student.model");

module.exports = {
  getAllStudents: async (req, res) => {
    const students = await Student.find();
    res.send(students);
  },
};
