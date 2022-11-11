const { handleResponse, handleError } = require("../../middleware")
const { getPopulation } = require("../../middleware/db")
const Department = require("../../models/department")
const { matchedData } = require('express-validator')
const { default: mongoose } = require("mongoose")

const getDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const aggregate = [
            {
                $match: {
                    _id: mongoose.Types.ObjectId(req.id)
                }
            },
            // {
            //     $lookup: {
            //         from: 'users',
            //         localField: '_id',
            //         foreignField: 'departmentId',
            //         as: 'workers'
            //     }
            // },
            {
                $lookup: {
                    from: 'shifts',
                    localField: '_id',
                    foreignField: 'departmentId',
                    as: 'shifts'
                }
            },
        ]
        const isExist = await getPopulation(aggregate, Department)
        if (isExist) {
            handleResponse(res, "success", isExist[0])
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getDepartment }