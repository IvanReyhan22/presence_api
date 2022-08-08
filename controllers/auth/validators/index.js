const { validateLogin } = require('./validateLogin')
const { validateRegister } = require('./validateRegister')
const { validateResetPassword } = require('./validateResetPassword')

module.exports = {
    validateLogin,
    validateRegister,
    validateResetPassword
}