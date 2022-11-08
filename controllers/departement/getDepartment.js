const { handleResponse, handleError } = require("../../middleware")
const { getPopulation } = require("../../middleware/db")
const Department = require("../../models/department")
const { matchedData } = require('express-validator')
const { default: mongoose } = require("mongoose")

const getDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const match = {
            _id: mongoose.Types.ObjectId(req.id)
        }
        const lookup = {
            from: 'users',
            localField: '_id',
            foreignField: 'departmentId',
            as: 'workers'
        }
        const isExist = await getPopulation(match, lookup, Department)
        console.log(match)
        if (isExist) {
            handleResponse(res, "success", isExist[0])
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getDepartment }