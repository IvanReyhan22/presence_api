const { generateToken } = require('./generateToken')

const getRegisterToken = (userInfo = {}) => {
    return new Promise((resolve) => {
        const data = {
            token: "Bearer " + generateToken(userInfo),
            user: userInfo
        }
        resolve(data)
    })
}

module.exports = { getRegisterToken }