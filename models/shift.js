const mongoose = require('mongoose')
const { Time } = require('./property/time')

const ShiftSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    checkIn: {
        type: String,
        require: true,
    },
    checkOut: {
        type: String
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
})

module.exports = mongoose.model('Shift', ShiftSchema)