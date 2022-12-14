const { matchedData } = require("express-validator")
const { handleError, handleResponse, buildErrObject } = require("../../middleware")
const { deleteItem, getItemById } = require("../../middleware/db")
const Department = require("../../models/department")

const deleteDepartment = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Department)
        if (isExist) {
            handleResponse(res, "item deleted", await deleteItem(req.id, Department))
        } else {
            handleError(res, buildErrObject(422, "item not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deleteDepartment }