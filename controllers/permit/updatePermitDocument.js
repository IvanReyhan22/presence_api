const { matchedData } = require("express-validator")
const { handleError, handleResponse } = require("../../middleware")
const { getItemById, updateItem } = require("../../middleware/db")
const { deleteFile } = require("../../middleware/utils")
const Permit = require("../../models/permit")

const updatePermitDocument = async (req, res) => {
    try {
        const file = req.file
        const params = matchedData(req)
        const isExist = await getItemById(params.id, Permit)
        const newDocument = { document: file.path }
        if (isExist) {
            await deleteFile(isExist.document)
            handleResponse(res, "success", updateItem(params.id, newDocument, Permit))
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updatePermitDocument }