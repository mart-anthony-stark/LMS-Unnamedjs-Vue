const Student = require("../models/Student.model");

module.exports = {
  getAllStudents: async (req, res) => {
    const students = await Student.find();
    res.send(students);
  },
  getOneStudent: async (req, res) => {
    const student = await Student.findOne({_id: req.params.id});
    res.send(student);
  },
};
