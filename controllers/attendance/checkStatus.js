const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getCurrentTime, buildErrObject } = require("../../middleware/utils")
const { isCheckedIn } = require("./helpers")

const checkStatus = async (req, res) => {
    try {
        req = matchedData(req)
        const dateTime = await getCurrentTime()
        const data = await isCheckedIn(req.id, dateTime.date)
        if (data.length > 0) {
            handleResponse(res, "success", data[0])
        } else {
            handleError(res, buildErrObject(422, "Attendance data not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { checkStatus }