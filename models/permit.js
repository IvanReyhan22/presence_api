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
    },
    status: {
        type: Number,
        require: true
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: false
    }
})

module.exports = mongoose.model('Permit', PermitScheme)