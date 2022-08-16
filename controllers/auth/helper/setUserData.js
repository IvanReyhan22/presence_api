const setUserData = (req = {}) => {
    return new Promise((resolve, reject) => {
        let user = {
            _id: req._id,
            name: req.name,
            email: req.email,
            personalId: req.personalId,
            departmentId: req.departmentId,
            shiftId: req.shiftId,
            role: req.role,
            profilePic: req.profilePic,
        }
        resolve(user)
    })
}

module.exports = { setUserData }