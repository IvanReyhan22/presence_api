const { getItemBy } = require("../../../middleware/db")
const Attendance = require("../../../models/attendance")

const isCheckedIn = (user = {}) => {
    return new Promise((resolve, reject) => {
        const param = {
            user_id: user.user_id,
            checkIn: {
                date: user.checkIn.date
            }
        }
        getItemBy(param, Attendance)
    })
}

module.exports = { isCheckedIn }