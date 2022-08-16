const { handleError, handleResponse } = require("../../middleware")
const { getItemsBy } = require("../../middleware/db")
const Shift = require('../../models/shift')

const getAllShift = async (req, res) => {
    try {
        handleResponse(res, "success", await getItemsBy(null, null, null, Shift))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllShift }