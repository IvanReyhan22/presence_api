const setDepartmentData = () => {
    return new Promise((resolve, reject) => {
        let department = {
            _id: req._id,
            name: req.name,
            departmentCode: req.departmentCode,
        }
        resolve(department)
    })
}

module.exports = { setDepartmentData }