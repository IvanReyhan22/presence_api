const { itemNotFound } = require("../utils")

const updateItem = (id = '', req = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(
            id,
            req,
            {
                new: true,
                runValidators: true
            },
            async (err, item) => {
                try {
                    resolve(await itemNotFound(err, item))
                } catch (error) {
                    reject(error)
                }
            }

        )
    })
}

module.exports = { updateItem }