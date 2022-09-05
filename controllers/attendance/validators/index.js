const { validateCheckIn } = require('./validateCheckIn')
const { validateCheckOut } = require('./validatedCheckOut')
const { validateCheckStatus } = require('./validateCheckStatus')
const { validateUpdateAttendance } = require('./validateUpdateAttendance')
const { validateDeleteAttendance } = require('./validateDeleteAttendance')

module.exports = {
    validateCheckIn,
    validateCheckOut,
    validateCheckStatus,
    validateUpdateAttendance,
    validateDeleteAttendance
}