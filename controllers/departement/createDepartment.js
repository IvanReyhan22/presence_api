const { matchedData } = require('express-validator')
const { handleError, handleResponse, buildErrObject } = require('../../middleware')
const { getItemsBy, createItem } = require('../../middleware/db')
const Department = require('../../models/department')

const createDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const query = {
            "$or": [
                {
                    name: req.name
                },
                {
                    departmentCode: req.departmentCode
                }
            ]
        }
        const isExist = await getItemsBy(query, null, null, Department)
        if (isExist.length < 1) {
            handleResponse(res, "success", await createItem(req, Department))
        } else {
            handleError(res, buildErrObject(409, "Departement already registered"))
        }
    } catch (err) {
        handleError(res, err)
    }
}

module.exports = { createDepartment }