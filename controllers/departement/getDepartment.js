const { handleResponse, handleError } = require("../../middleware")
const { getItem } = require("../../middleware/db")
const Department = require("../../models/department")
const { matchedData } = require('express-validator')

const getDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItem(req.id, Department)
        if (isExist) {
            handleResponse(res, "success", isExist)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getDepartment }