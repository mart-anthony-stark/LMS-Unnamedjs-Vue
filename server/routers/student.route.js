const studentController = require('../controllers/student.controller')

const studentRouter = ({GET, POST, PUT, PATCH,DELETE}) => {
    GET('/', studentController.getAllStudents)
}

module.exports = studentRouter