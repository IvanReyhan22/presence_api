const { handleError, handleResponse } = require("../../middleware")
const { findUser, updatePassword } = require("./helper")

const resetPassword = async (req, res) => {
    try {
        req = req.body
        const user = await findUser(req.email)
        await updatePassword(req.password, user)
        handleResponse(res, "Password sucessfully reset")
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { resetPassword }