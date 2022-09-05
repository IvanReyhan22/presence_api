const { matchedData } = require("express-validator")
const { handleError, buildErrObject, handleResponse } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const Attendance = require("../../models/attendance")

const updateAttendance = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Attendance)
        if (isExist) {
            handleResponse(res, "success", await updateItem(req.id, req, Attendance))
        } else {
            handleError(res, buildErrObject(404, "Attendance data not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateAttendance }