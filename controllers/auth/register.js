const { emailExists, registerUser, setUserData, getRegisterToken } = require('../auth/helper')
const { handleError, handleResponse } = require('../../middleware')

const register = async (req, res) => {
    try {
        req = req.body
        const isEmailExists = await emailExists(req.email)
        if (!isEmailExists) {
            const item = await registerUser(req)
            const userData = await setUserData(item)
            const token = await getRegisterToken(userData)
            handleResponse(res, "Welcome to Presence", token)
        }
    } catch (error) {
        handleError(res, error)
    }

}

module.exports = { register }