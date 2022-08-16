const { getRegisterToken, checkPassword, setUserData } = require('../auth/helper')
const { handleError, handleResponse, buildErrObject } = require('../../middleware')
const { findUser } = require('./helper/findUser')
const { matchedData } = require('express-validator')

const login = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await findUser(req.email)
        const isPasswordMatch = await checkPassword(req.password, user)
        if (isPasswordMatch) {
            const userData = await setUserData(user)
            const token = await getRegisterToken(userData)
            handleResponse(res, "Welcome to Presence", token)
        } else {
            handleError(res, buildErrObject(409, "User credential is incorrect"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { login }