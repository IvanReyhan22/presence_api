const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: "EMAIL_IS_NOT_VALID"
        },
        lowercase: true,
        unique: true,
        required: true
    },
    personalId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    departementId: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true
    },
    profilePic: {
        type: String
    },
    updated_at: {
        type: Date
    }
})

const hash = (user, salt, next) => {
    bcrypt.hash(user.password, salt, (error, newHash) => {
        if (error) {
            return next(error)
        }
        user.password = newHash
        return next()
    })
}

const genSalt = (user, SALT_FACTOR, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        }
        return hash(user, salt, next)
    })
}

UserSchema.pre('save', function (next) {
    const that = this
    const SALT_FACTOR = 5
    if (!that.isModified('password')) {
        return next()
    }
    return genSalt(that, SALT_FACTOR, next)
})

UserSchema.methods.comparePassword = function (passwordAttempt, cb) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
        err ? cb(err) : cb(null, isMatch)
    )
}


module.exports = mongoose.model('User', UserSchema)