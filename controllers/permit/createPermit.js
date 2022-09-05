const moment = require("moment")
const { handleError, handleResponse, buildErrObject } = require("../../middleware")
const { matchedData } = require('express-validator')
const { createItem } = require("../../middleware/db")
const { setPermitData } = require("./helpers")
const Permit = require("../../models/permit")

const createPermit = async (req, res) => {
    try {
        file = req.file
        body = req.body
        if (file) {
            filePath = file.path
            const data = await setPermitData(body.subject, body.reason, filePath)
            handleResponse(res, "success", await createItem(data, Permit))
        } else {
            handleError(res, buildErrObject(404, "prove of document is required!"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createPermit }