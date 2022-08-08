const crypto = require('crypto')
const secret = process.env.CRYPTO_KEY
const algorithm = 'aes-256-cbc'

const key = crypto.scryptSync(secret, 'spicy', 32)
// crypto vector
const iv = Buffer.alloc(16, 0)

const encrypt = (value = '') => {
    const chiper = crypto.createCipheriv(algorithm, key, iv)

    let encrypted = chiper.update(value, 'utf8', 'hex')
    encrypted += chiper.final('hex')

    return encrypted
}

module.exports = { encrypt }