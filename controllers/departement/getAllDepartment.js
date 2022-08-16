const { handleError, handleResponse } = require("../../middleware")
const { getItemsBy } = require("../../middleware/db")
const Department = require("../../models/department")

const getAllDepartment = async (req, res) => {
    try {
        const select = 'name departmentCode description'
        const sort = {
            name: 1
        }
        handleResponse(res, "success", await getItemsBy(null, select, sort, Department))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllDepartment }