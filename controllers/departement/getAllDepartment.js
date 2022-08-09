const { handleError, handleResponse } = require("../../middleware")
const { getAllItem } = require("../../middleware/db")
const Department = require("../../models/department")

const getAllDepartment = async (req, res) => {
    try {
        const sort = {
            name: 1
        }
        handleResponse(res, "success", await getAllItem(null, null, sort, Department))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllDepartment }