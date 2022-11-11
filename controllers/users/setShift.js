const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const User = require("../../models/user")

const setShift = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, User)
        if (isExist) {
            const updateData = { shiftId: req.shiftId }
            handleResponse(res, "Update Shift Success", await updateItem(req.id, updateData, User))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { setShift }