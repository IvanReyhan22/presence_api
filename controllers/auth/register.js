const { emailExists, registerUser, setUserData, getRegisterToken } = require('../auth/helper')
const { handleError, handleResponse } = require('../../middleware')
const { getItemsBy } = require('../../middleware/db')
const Department = require('../../models/department')
const { matchedData } = require('express-validator')
const { getDepartment } = require('../departement/helper')

const register = async (req, res) => {
    try {
        req = matchedData(req)
        const isEmailExists = await emailExists(req.email)
        if (!isEmailExists) {

            // Get department id by it's code
            const param = { departmentCode: req.departmentCode }
            const departmentData = await getItemsBy(param, '_id', null, Department)

            // Assign department id to request object
            req.departmentId = departmentData[0]._id
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