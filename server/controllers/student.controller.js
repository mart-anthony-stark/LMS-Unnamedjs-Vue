const Student = require("../models/Student.model");

module.exports = {
  getAllStudents: async (req, res) => {
    const students = await Student.find();
    res.send(students);
  },
  getOneStudent: async (req, res) => {
    const student = await Student.findOne({ _id: req.params.id });
    res.send(student);
  },
  createStudent: async (req, res) => {
    const student = new Student(req.body);
    const password = req.body.password;
    student.password = !password && `${req.body.name}`;

    await student.save();
    res.send(student);
  },
  updateStudent: async (req, res) => {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.send(student);
  },
  deleteOne: async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
  },
};
