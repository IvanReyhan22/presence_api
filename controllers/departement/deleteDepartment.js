const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItem, deleteItem } = require("../../middleware/db")
const Department = require("../../models/department")

const deleteDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItem(req.id, Department)
        if (isExist) {
            handleResponse(res, "item deleted", await deleteItem(req.id, Department))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deleteDepartment }