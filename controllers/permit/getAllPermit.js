const { handleError, handleResponse } = require("../../middleware")
const { getItemsBy } = require("../../middleware/db")
const Permit = require("../../models/permit")

const getAllPermit = async (req, res) => {
    try {
        handleResponse(res, "success", await getItemsBy(null, null, null, Permit))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllPermit }