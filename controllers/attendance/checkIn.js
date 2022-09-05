const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemById, createItem } = require("../../middleware/db")
const { getCurrentTime } = require("../../middleware/utils")
const Attendance = require("../../models/attendance")
const Shift = require("../../models/shift")
const { checkAttendanceTime, isCheckedIn, setAttendanceData } = require("./helpers")

const checkIn = async (req, res) => {
    try {
        req = matchedData(req)

        const dateTime = await getCurrentTime()
        req.checkIn = dateTime

        const isExist = await isCheckedIn(req.user_id, dateTime.date)

        if (!isExist) {
            const shiftData = await getItemById(req.shift_id, Shift)

            const status = await checkAttendanceTime(shiftData.checkIn)
            req.status = status

            const attendanceData = await setAttendanceData(req)
            handleResponse(res, "success", await createItem(attendanceData, Attendance))
        } else {
            handleError(res, buildErrObject(422, "User already checked in today :" + dateTime))
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { checkIn }