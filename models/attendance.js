const mongoose = require('mongoose')
const { Geo } = require('./property/geo')
const { Time } = require('./property/time')

const AttendanceScheme = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department"
        },
        shiftId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shift"
        },
        checkIn: Time,
        checkOut: Time,
        status: {
            type: String,
            enum: ['onTime', 'late', 'permit'],
            required: true,
            default: 'user'
        },
        address: {
            type: String,
            require: true
        },
        loc: Geo,
        permit: {
            type: String,
        }
    }
)

module.exports = mongoose.model('Attendance', AttendanceScheme)