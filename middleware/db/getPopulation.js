const { buildErrObject } = require("../utils")

const getPopulation = (match = {}, lookup = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.aggregate(
            [
                {
                    $match: match
                },
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