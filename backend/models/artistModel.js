const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

artistSchema.virtual('albums', {
    localField: '_id'
})

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist