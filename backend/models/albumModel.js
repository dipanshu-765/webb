const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, 
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Artist'
    },
    cover: {
        type: Buffer
    }
}, {
    timestamps: true
})

albumSchema.virtual('songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'album'
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album