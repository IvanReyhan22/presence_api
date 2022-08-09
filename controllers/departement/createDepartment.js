const { handleError, handleResponse, buildErrObject } = require('../../middleware')
const { getItemBy, createItem } = require('../../middleware/db')
const Department = require('../../models/department')

const createDepartment = async (req, res) => {
    try {
        req = req.body
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
        const isExist = await getItemBy(query, Department)
        if (!isExist) {
            handleResponse(res, "success", await createItem(req, Department))
        } else {
            handleError(res, buildErrObject(409, "Departement already registered"))
        }
    } catch (err) {
        handleError(res, err)
    }
}

module.exports = { createDepartment }