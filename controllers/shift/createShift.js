const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { createItem } = require("../../middleware/db")
const Shift = require("../../models/shift")

const createShift = async (req, res) => {
    try {
        req = matchedData(req)
        handleResponse(res, "success", await createItem(req, Shift))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createShift }