const { matchedData } = require("express-validator")
const { handleError, buildErrObject, handleResponse } = require("../../middleware")
const { getItemById, deleteItem } = require("../../middleware/db")
const Shift = require("../../models/shift")

const deleteShift = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Shift)
        if (isExist) {
            handleResponse(res, "success", await deleteItem(req.id, Shift))
        } else {
            handleError(res, buildErrObject(422, "item not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deleteShift }