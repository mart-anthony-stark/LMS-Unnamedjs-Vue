const studentController = require("../controllers/student.controller");

const { catcher } = require("unnamed-js/utils");

const studentRouter = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/all", catcher(studentController.getAllStudents));
  GET("/:id", catcher(studentController.getOneStudent));
  POST('/create', catcher(studentController.createStudent))
  PATCH('/:id/update', catcher(studentController.updateStudent))
  DELETE('/:id', catcher(studentController.deleteOne))
};

module.exports = studentRouter;
