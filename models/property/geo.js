const Geo = {
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        // [long,lat]
        type: [Number],
        index: "2dsphere"
    }
}

module.exports = { Geo }