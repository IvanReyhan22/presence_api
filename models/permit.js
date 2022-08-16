const mongoose = require('mongoose')

const PermitScheme = mongoose.Schema({
    subject: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    other: {
        type: String
    }
})

module.exports = mongoose.model('Permit', PermitScheme)