const { handleError } = require("../handleError")
const { retrieveJwt } = require("./retrieveJwt")
const jwt = require('jsonwebtoken')
const { buildErrObject } = require("../utils")

const roleCheck = (roles) => async (req, res, next) => {
    try {
        const token = await retrieveJwt(req)
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (roles.indexOf(decode.data.role) > -1) {
            return next()
        } else {
            handleError(res, buildErrObject(401, "UNAUTHORIZED"))
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { roleCheck }