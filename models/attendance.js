const mongoose = require('mongoose')
const { Geo } = require('./property/geo')
const { Time } = require('./property/time')

const AttendanceScheme = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        department: {
            type: mongoose.Schema.Types.ObjectId,
            require: "Department"
        },
        shift: {
            type: String,
            require: true
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
        loc: Geo
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Attendance', AttendanceScheme)