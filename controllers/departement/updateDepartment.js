const { matchedData } = require('express-validator')
const { handleError, handleResponse } = require("../../middleware")
const { getItem, updateItem } = require("../../middleware/db")
const Department = require("../../models/department")

const updateDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItem(req.id, Department)
        if (isExist) {
            const update = await updateItem(req.id, req, Department)
            handleResponse(res, "update success", update)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateDepartment }