const mongoose = require('mongoose')

const PermitScheme = mongoose.Schema({
    subject: {
        type: String,
    },
    reason: {
        type: String,
        require: true
    },
    document: {
        type: String
    },
    date: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('Permit', PermitScheme)