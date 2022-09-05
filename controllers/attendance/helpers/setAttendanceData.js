const setAttendanceData = (req = {}) => {
    return new Promise((resolve, reject) => {
        const data = {
            userId: req.user_id,
            departmentId: req.department_id,
            shiftId: req.shift_id,
            checkIn: req.checkIn,
            checkOut: req.checkOut,
            status: req.status,
            address: req.address,
            loc: req.loc,
            permit: null,
        }
        resolve(data)
    })
}

module.exports = { setAttendanceData }