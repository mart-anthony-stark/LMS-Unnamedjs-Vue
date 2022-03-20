const studentController = require('../controllers/student.controller')

const studentRouter = ({GET, POST, PUT, PATCH,DELETE}) => {
    GET('/all', studentController.getAllStudents)
    GET('/:id', studentController.getOneStudent)
}

module.exports = studentRouter