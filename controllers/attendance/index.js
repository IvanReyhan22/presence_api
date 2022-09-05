const { getAllAttendance } = require('./getAllAttendance')
const { checkIn } = require('./checkIn')
const { checkOut } = require('./checkOut')
const { checkStatus } = require('./checkStatus')
const { updateAttendance } = require('./updateAttendance')
const { deleteAttendance } = require('./deleteAttendance')

module.exports = {
    getAllAttendance,
    checkIn,
    checkOut,
    checkStatus,
    updateAttendance,
    deleteAttendance
}