const { decrypt } = require("../decrypt")

const retrieveJwt = (req) => {
    let token = null
    if (req.headers.authorization) {
        token = req.headers.authorization.replace('Bearer ', '').trim()
    } else if (req.body.token) {
        token = req.body.token.trim()
    } else if (req.query.token) {
        token = req.query.token.trim()
    }
    if (token) {
        token = decrypt(token)
    }
    return token
}

module.exports = { retrieveJwt }