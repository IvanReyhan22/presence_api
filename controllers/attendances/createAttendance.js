const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemBy } = require("../../middleware/db")
const { getCurrentTime } = require("../../middleware/utils")
const Attendance = require("../../models/attendance")

const createAttendance = async (req, res) => {
    try {
        req = matchedData(req)
        // Get current time and return object
        const dateTime = await getCurrentTime()

        // Search if entry exist based on user_id and date(today)
        const param = {
            user_id: req.user_id,
            checkIn: {
                date: dateTime.date
            }
        }
        const isExist = await getItemBy(param, Attendance)
        if (!isExist) {
            res.send("Proceed")
        } else {
            res.send("Abort")
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createAttendance }