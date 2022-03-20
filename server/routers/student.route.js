const studentController = require('../controllers/student.controller')

const studentRouter = ({GET, POST, PUT, PATCH,DELETE}) => {
    GET('/', studentController.getAllStudents)
    GET('/:id', studentController.getOneStudent)
}

module.exports = studentRouter