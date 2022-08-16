const { handleResponse, handleError } = require("../../middleware")
const { getPopulation } = require("../../middleware/db")
const Department = require("../../models/department")
const { matchedData } = require('express-validator')

const getDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const lookup = {
            from: 'users',
            localField: '_id',
            foreignField: 'departmentId',
            as: 'workers'
        }
        const isExist = await getPopulation(lookup, Department)
        if (isExist) {
            handleResponse(res, "success", isExist)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getDepartment }