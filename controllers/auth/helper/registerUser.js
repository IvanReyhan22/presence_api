const { buildErrObject } = require("../../../middleware")
const User = require("../../../models/user")

const registerUser = (req = {}) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: req.name,
            email: req.email,
            personalId: req.personalId,
            password: req.password,
            departementId: req.departementId,
            role: req.role,
            profilePic: req.profilePic,
        })
        user.save((err, item) => {
            if (err) {
                reject(buildErrObject(422, err.message))
            } else {
                resolve(item)
            }
        })
    })
}

module.exports = { registerUser }