const { buildErrObject } = require("../utils")

const getItemsBy = (predicate = {}, select = '', sort = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.find(
            predicate, select, { sort },
            async (err, item) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
    })
}

module.exports = { getItemsBy }