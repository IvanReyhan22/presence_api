const setUserData = (req = {}) => {
    return new Promise((resolve, reject) => {
        let user = {
            _id: req._id,
            name: req.name,
            email: req.email,
            personalId: req.personalId,
            departementId: req.departementId,
            role: req.role,
            profilePic: req.profilePic,
        }
        resolve(user)
    })
}

module.exports = { setUserData }