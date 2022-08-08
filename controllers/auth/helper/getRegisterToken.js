const { generateToken } = require('./generateToken')

const getRegisterToken = (userInfo = {}) => {
    return new Promise((resolve) => {
        const data = {
            token: generateToken(userInfo._id),
            user: userInfo
        }
        resolve(data)
    })
}

module.exports = { getRegisterToken }