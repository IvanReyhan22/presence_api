const { validateGetUser } = require('./validateGetUser')
const { validateUpdateUser } = require('./validateUpdateUser')
const { validateResetPassword } = require('./validateResetPassword')
const { validateSetShift } = require('./validateSetShift')

module.exports = {
    validateGetUser,
    validateUpdateUser,
    validateResetPassword,
    validateSetShift
}