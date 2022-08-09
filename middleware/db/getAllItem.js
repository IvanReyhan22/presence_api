const { buildErrObject } = require("../utils")

const getAllItem = (predicate = {}, exclude = '', sort = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.find(
            { predicate }, exclude, { sort },
            async (err, item) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
    })
}

module.exports = { getAllItem }