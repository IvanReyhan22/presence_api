const { handleError, handleResponse } = require("../../middleware")
const { matchedData } = require('express-validator')
const { deleteItem, getItemById } = require("../../middleware/db")
const Permit = require("../../models/permit")
const { deleteFile } = require("../../middleware/utils")

const deletePermit = async (req, res) => {
    try {
        req = matchedData(req)
        const permitData = await getItemById(req.id, Permit)
        await deleteFile(permitData.document)
        handleResponse(res, "success", await deleteItem(req.id, Permit))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deletePermit }