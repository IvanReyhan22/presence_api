const moment = require("moment")

const checkAttendanceTime = (timeCheck = '') => {
    return new Promise((resolve, reject) => {
        const toDateFormat = moment(timeCheck, "hh:mm A").format()
        const timeDiff = moment().diff(toDateFormat, 'seconds')
        if (timeDiff < 0) {
            resolve("onTime")
        } else {
            resolve("late")
        }
    })
}

module.exports = { checkAttendanceTime }