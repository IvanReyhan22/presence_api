const { handleResponse, handleError } = require("../../middleware")
const { getItemsBy } = require("../../middleware/db")
const Attendance = require('../../models/attendance')

const getAllAttendance = async (req, res) => {
    try {
        const sort = {
            date: 1
        }
        handleResponse(res, "success", await getItemsBy(null, null, sort, Attendance))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllAttendance }