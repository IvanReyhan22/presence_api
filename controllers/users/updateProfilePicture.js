const { matchedData } = require("express-validator")
const { handleError, buildErrObject, handleResponse } = require("../../middleware")
const { updateItem } = require("../../middleware/db")
const User = require("../../models/user")

const updateProfilePicture = async (req, res) => {
    try {
        file = req.file
        body = matchedData(req)
        if (file) {
            filePath = file.path
            const image = {
                profilePic: filePath
            }
            handleResponse(res, "success", await updateItem(body.id, image, User))
        } else {
            handleError(res, buildErrObject(404, "File is empty"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateProfilePicture }