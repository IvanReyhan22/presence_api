const { matchedData } = require("express-validator")
const { handleError, handleResponse, buildErrObject } = require("../../middleware")
const { checkPassword, findUser, updatePassword } = require("../auth/helper")

const resetPassword = async (req, res) => {
    try {
        req = matchedData(req)

        const userData = await findUser(req.email)
        const isPasswordValid = await checkPassword(req.old_password, userData)

        if (isPasswordValid) {
            await updatePassword(req.new_password, userData)
            userData.password = undefined
            handleResponse(res, "Password has changed", userData)
        } else {
            handleError(res, buildErrObject(422, "Password is incorrect"))
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { resetPassword }