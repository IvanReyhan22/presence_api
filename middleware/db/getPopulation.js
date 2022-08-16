const { buildErrObject } = require("../utils")

const getPopulation = (lookup = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.aggregate(
            [
                {
                    $lookup: lookup
                }
            ],
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