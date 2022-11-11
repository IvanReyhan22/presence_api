const { buildErrObject } = require("../utils")

const getPopulation = (aggregate = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.aggregate(aggregate,
            async (err, item) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
    })
}

module.exports = { getPopulation }