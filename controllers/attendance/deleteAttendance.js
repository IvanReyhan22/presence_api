const { handleError, buildErrObject, handleResponse } = require("../../middleware")
const { matchedData } = require("express-validator")
const { getItemById, deleteItem } = require("../../middleware/db")
const Attendance = require("../../models/attendance")

const deleteAttendance = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Attendance)
        if (isExist) {
            handleResponse(res, "success", await deleteItem(req.id, Attendance))
        } else[
            handleError(res, buildErrObject(404, "Attendance data not found!"))
        ]
    } catch (error) {
        handleError(res, res)
    }
}

module.exports = { deleteAttendance }