const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemById } = require("../../middleware/db")
const User = require("../../models/user")

const getUser = async (req, res) => {
    try {
        req = matchedData(req)
        handleResponse(res, "success", await getItemById(req.id, User))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getUser }