const { handleError, handleResponse } = require("../../middleware")
const { getItemsBy } = require("../../middleware/db")
const User = require("../../models/user")

const getAllUser = async (req, res) => {
    try {
        const by = {
            role: "user"
        }
        handleResponse(res, "success", await getItemsBy(by, null, null, User))
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllUser }