const handleError = (res = {}, err = {}) => {
    // Prints error in console
    if (process.env.NODE_ENV === 'development') {
        console.log(err)
    }
    // Sends error to user
    res.status(err.code).json({
        status: err.code,
        errors: err.message
    })
}

module.exports = { handleError }