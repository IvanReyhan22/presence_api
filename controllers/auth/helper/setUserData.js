const setUserData = (req = {}) => {
    return new Promise((resolve, reject) => {
        let user = {
            _id: req._id,
            name: req.name,
            email: req.email,
            personalId: req.personalId,
            departementId: req.departementId,
            level: req.level,
            profilePic: req.profilePic,
        }
        resolve(user)
    })
}

module.exports = { setUserData }