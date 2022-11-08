const { matchedData } = require("express-validator")
const { handleError, handleResponse, buildErrObject } = require("../../middleware")
const { getItemById, deleteItem } = require("../../middleware/db")
const User = require("../../models/user")

const deleteUser = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, User)
        if (isExist) {
            handleResponse(res, "Item deleted", await deleteItem(req.id, User))
        } else {
            handleError(res, buildErrObject(422, "item not found"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deleteUser }