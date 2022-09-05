const { isCheckedIn } = require('./isCheckedIn')
const { checkAttendanceTime } = require('./checkAttendanceTime')
const { setAttendanceData } = require('./setAttendanceData')

module.exports = {
    isCheckedIn,
    setAttendanceData,
    checkAttendanceTime
}