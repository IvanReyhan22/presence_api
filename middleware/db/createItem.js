const { buildErrObject } = require("../utils/buildErrObject")

const createItem = (req = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.create(req, (err, item) => {
            if (err) {
                reject(buildErrObject(422, err.message))
            }
            resolve(item)
        })
    })
}

module.exports = { createItem }