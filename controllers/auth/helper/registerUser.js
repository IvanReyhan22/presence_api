const { buildErrObject } = require("../../../middleware")
const User = require("../../../models/user")

const registerUser = (req = {}) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: req.name,
            email: req.email,
            password: req.password,
            personalId: req.personalId,
            departmentId: req.departmentId,
            shiftId: null,
            role: 'user',
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