const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { updateItem } = require("../../middleware/db")
const { getCurrentTime, buildErrObject } = require("../../middleware/utils")
const { isCheckedIn } = require("./helpers")
const Attendance = require("../../models/attendance")

const checkOut = async (req, res) => {
    try {
        req = matchedData(req)

        const dateTime = await getCurrentTime()
        req.checkOut = dateTime

        const isExist = await isCheckedIn(req.user_id, dateTime.date)

        if (isExist) {
            const data = isExist[0]
            console.log(req)
            handleResponse(res, "success", await updateItem(data._id, req, Attendance))
        } else {
            handleError(res, buildErrObject(422, "Attendance not found"))
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { checkOut }