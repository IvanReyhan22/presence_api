const handleResponse = (res = {}, msg = '', req = {}) => {
    res.status(200).json({
        status: 200,
        msg: msg,
        data: req
    })
}

module.exports = { handleResponse }