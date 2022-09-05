const { handleError, handleResponse } = require("../../middleware")
const { getItemById } = require("../../middleware/db")
const Permit = require("../../models/permit")
const { matchedData } = require('express-validator')

const getPermit = async (req, res) => {
    try {
        req = matchedData(req)
        handleResponse(res, "success", await getItemById(req.id, Permit))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getPermit }