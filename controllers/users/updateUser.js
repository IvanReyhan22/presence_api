const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const User = require("../../models/user")

const updateUser = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, User)
        if (isExist) {
            const update = await updateItem(req.id, req, User)
            handleResponse(res, "success", update)
        }
    } catch (error) {
        handleError(req, error)
    }
}

module.exports = { updateUser }