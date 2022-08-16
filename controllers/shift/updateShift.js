const { matchedData } = require("express-validator")
const { handleError, handleResponse, buildErrObject } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const Shift = require("../../models/shift")

const updateShift = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Shift)
        if (isExist) {
            handleResponse(res, "success", await updateItem(req.id, req, Shift))
        } else {
            handleError(res, buildErrObject(422, "item not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateShift }