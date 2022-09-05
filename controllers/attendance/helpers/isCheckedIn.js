const { getItemsBy } = require("../../../middleware/db")
const Attendance = require("../../../models/attendance")

const isCheckedIn = (userId = '', date = '') => {
    return new Promise(async (resolve, reject) => {
        const param = {
            userId: userId
        }
        const exist = await getItemsBy(param, null, null, Attendance)
        if (exist.length > 0) {
            resolve(exist)
        } else {
            resolve(false)
        }
    })
}

module.exports = { isCheckedIn }