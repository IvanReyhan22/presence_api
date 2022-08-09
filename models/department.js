const mongoose = require('mongoose')

const DepartmentScheme = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    departmentCode: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Department', DepartmentScheme)