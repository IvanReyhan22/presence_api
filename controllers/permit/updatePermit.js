const { handleError, handleResponse } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const Permit = require("../../models/permit")
const { matchedData } = require('express-validator')

const updatePermit = async (req, res) => {
    try {
        req = matchedData(req)
        const isExist = await getItemById(req.id, Permit)
        if (isExist) {
            handleResponse(res, "success", await updateItem(req.id, req, Permit))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updatePermit }