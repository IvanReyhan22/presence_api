const { emailExists } = require('./emailExists')
const { registerUser } = require('./registerUser')
const { setUserData } = require('./setUserData')
const { generateToken } = require('./generateToken')
const { getRegisterToken } = require('./getRegisterToken')
const { checkPassword } = require('./checkPassword')
const { findUser } = require('./findUser')
const { updatePassword } = require('./updatePassword')

module.exports = {
    emailExists,
    registerUser,
    setUserData,
    generateToken,
    getRegisterToken,
    checkPassword,
    findUser,
    updatePassword
}